from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from translipsur_service_apps.repositorio.models.ruta import Ruta


class RutaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ruta
        fields = '__all__'


class RutaViewSet(viewsets.ModelViewSet):
    queryset = Ruta.objects.all()
    serializer_class = RutaSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(detalle__icontains=query), Q(lugar_origen__icontains=query), Q(lugar_destino__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
