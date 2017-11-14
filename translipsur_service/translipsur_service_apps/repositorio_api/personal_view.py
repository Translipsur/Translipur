from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from translipsur_service_apps.repositorio.models.personal import Personal


class PersonalSerializer(serializers.ModelSerializer):

    p_nombre = serializers.ReadOnlyField(source='persona.nombre')
    a_detalle = serializers.ReadOnlyField(source='alquiler.detalle')

    class Meta:
        model = Personal
        fields = '__all__'


class PersonalViewSet(viewsets.ModelViewSet):
    queryset = Personal.objects.all()
    serializer_class = PersonalSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(categoria__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
