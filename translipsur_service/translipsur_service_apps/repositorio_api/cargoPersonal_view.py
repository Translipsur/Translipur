from rest_framework import serializers, viewsets
from django.db.models import Q
from operator import __or__ as OR
from functools import reduce

from translipsur_service_apps.repositorio.models.cargoPersonal import CargoPersonal


class CargoPersonalSerializer(serializers.ModelSerializer):

    p_categoria = serializers.ReadOnlyField(source='personal.categoria')

    class Meta:
        model = CargoPersonal
        fields = '__all__'


class CargoPersonalViewSet(viewsets.ModelViewSet):
    queryset = CargoPersonal.objects.all()
    serializer_class = CargoPersonalSerializer

    def get_queryset(self):
        query = self.request.query_params.get('query', '')
        queryall = (Q(id__icontains=query),
                    Q(funcion__icontains=query))
        queryset = self.queryset.filter(reduce(OR, queryall))
        return queryset
