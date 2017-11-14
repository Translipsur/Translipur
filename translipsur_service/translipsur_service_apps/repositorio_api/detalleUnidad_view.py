from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from translipsur_service_apps.repositorio.models.detalleUnidad import DetalleUnidad


class DetalleUnidadSerializer(serializers.ModelSerializer):

    p_nombre = serializers.ReadOnlyField(source='proveedor.nombre')
    u_placa = serializers.ReadOnlyField(source='unidad.placa')

    class Meta:
        model = DetalleUnidad
        fields = '__all__'


class DetalleUnidadViewSet(viewsets.ModelViewSet):
    queryset = DetalleUnidad.objects.all()
    serializer_class = DetalleUnidadSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(costo__icontains=query), Q(descripcion__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
