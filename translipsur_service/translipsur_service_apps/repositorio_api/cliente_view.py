from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from translipsur_service_apps.repositorio.models.cliente import Cliente


class ClienteSerializer(serializers.ModelSerializer):

    p_nombre = serializers.ReadOnlyField(source='persona.nombre')

    class Meta:
        model = Cliente
        fields = '__all__'


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(descripcion__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
