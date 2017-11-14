from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from translipsur_service_apps.repositorio.models.detalleTiempoAlquiler import DetalleTiempoAlquiler


class DetalleTiempoAlquilerSerializer(serializers.ModelSerializer):

    t_descripcion = serializers.ReadOnlyField(
        source='tiempoAlquiler.descripcion')

    class Meta:
        model = DetalleTiempoAlquiler
        fields = '__all__'


class DetalleTiempoAlquilerViewSet(viewsets.ModelViewSet):
    queryset = DetalleTiempoAlquiler.objects.all()
    serializer_class = DetalleTiempoAlquilerSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(detalle__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
