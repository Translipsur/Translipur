from uuid import uuid4
from django.db import models


class Unidad(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    marca = models.CharField(max_length=40)
    placa = models.CharField(max_length=40)
    color = models.CharField(max_length=40)
    tipo_combustible = models.CharField(max_length=40)
    ruedas = models.CharField(max_length=40)
    altura = models.CharField(max_length=40)
    ancho = models.CharField(max_length=40)
    tipo = models.CharField(max_length=40)
    cilindros = models.CharField(max_length=40)
    ejes = models.CharField(max_length=40)
    nro_motor = models.CharField(max_length=40)
    km_recorrido = models.CharField(max_length=40)
    ano_modelo = models.CharField(max_length=40, null=True, blank=True)
    asientos = models.CharField(max_length=40, null=True, blank=True)
    carga_util = models.CharField(max_length=40, null=True, blank=True)
    longitud = models.CharField(max_length=40, null=True, blank=True)
    nro_serie = models.CharField(max_length=40, null=True, blank=True)
    pasajeros = models.CharField(max_length=40, null=True, blank=True)
    peso_bruto = models.CharField(max_length=40, null=True, blank=True)
    peso_seco = models.CharField(max_length=40, null=True, blank=True)

    class Meta:
        verbose_name = "Unidad"
        verbose_name_plural = "Unidades"

    def __str__(self):
        return self.placa
