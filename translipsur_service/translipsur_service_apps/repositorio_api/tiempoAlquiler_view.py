from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from translipsur_service_apps.repositorio.models.tiempoAlquiler import TiempoAlquiler


class TiempoAlquilerSerializer(serializers.ModelSerializer):

    u_placa = serializers.ReadOnlyField(source='unidad.placa')

    class Meta:
        model = TiempoAlquiler
        fields = '__all__'


class TiempoAlquilerViewSet(viewsets.ModelViewSet):
    queryset = TiempoAlquiler.objects.all()
    serializer_class = TiempoAlquilerSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(descripcion__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
