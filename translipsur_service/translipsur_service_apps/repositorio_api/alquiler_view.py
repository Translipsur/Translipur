from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from translipsur_service_apps.repositorio.models.alquiler import Alquiler


class AlquilerSerializer(serializers.ModelSerializer):

    d_detalle = serializers.ReadOnlyField(
        source='detalleTiempoAlquiler.detalle')
    dt_detalle = serializers.ReadOnlyField(source='detalleTarifario.detalle')
    r_detalle = serializers.ReadOnlyField(source='ruta.detalle')
    c_descripcion = serializers.ReadOnlyField(source='cliente.descripcion')

    class Meta:
        model = Alquiler
        fields = '__all__'


class AlquilerViewSet(viewsets.ModelViewSet):
    queryset = Alquiler.objects.all()
    serializer_class = AlquilerSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(detalle__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
