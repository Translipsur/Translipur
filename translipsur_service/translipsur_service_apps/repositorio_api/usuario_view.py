from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from translipsur_service_apps.repositorio.models.usuario import Usuario


class UsuarioSerializer(serializers.ModelSerializer):

    p_nombre = serializers.ReadOnlyField(source='persona.nombre')

    class Meta:
        model = Usuario
        fields = '__all__'


class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(user__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
