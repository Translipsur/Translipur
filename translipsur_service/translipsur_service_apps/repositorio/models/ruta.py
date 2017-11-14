from uuid import uuid4
from django.db import models


class Ruta(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    detalle = models.CharField(max_length=60, null=True, blank=True)
    distancia_km = models.CharField(max_length=20)
    lugar_origen = models.CharField(max_length=60)
    lugar_destino = models.CharField(max_length=60)
    fecha_creada = models.DateTimeField(auto_now_add=True)
    fecha_actualizada = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Ruta"
        verbose_name_plural = "Rutas"

    def __str__(self):
        return self.detalle
