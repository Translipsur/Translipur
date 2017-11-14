from uuid import uuid4
from django.db import models


class Tarifario(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nombre_tarifario = models.CharField(max_length=60)
    cantidad_alquiler = models.CharField(max_length=30)
    costo = models.CharField(max_length=20)
    descripcion = models.CharField(max_length=60, null=True, blank=True)
    unidad_medida = models.CharField(max_length=50, null=True, blank=True)
    fecha_creada = models.DateTimeField(auto_now_add=True)
    fecha_actualizada = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Tarifario"
        verbose_name_plural = "Tarifarios"

    def __str__(self):
        return self.nombre_tarifario
