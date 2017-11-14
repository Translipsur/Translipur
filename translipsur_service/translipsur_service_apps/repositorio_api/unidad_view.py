from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from translipsur_service_apps.repositorio.models.unidad import Unidad


class UnidadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Unidad
        fields = '__all__'


class UnidadViewSet(viewsets.ModelViewSet):
    queryset = Unidad.objects.all()
    serializer_class = UnidadSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(marca__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
