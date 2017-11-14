from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from translipsur_service_apps.repositorio.models.detalleTarifario import DetalleTarifario


class DetalleTarifarioSerializer(serializers.ModelSerializer):

    t_nombre_tarifario = serializers.ReadOnlyField(
        source='tarifario.nombre_tarifario')

    class Meta:
        model = DetalleTarifario
        fields = '__all__'


class DetalleTarifarioViewSet(viewsets.ModelViewSet):
    queryset = DetalleTarifario.objects.all()
    serializer_class = DetalleTarifarioSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(detalle__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
