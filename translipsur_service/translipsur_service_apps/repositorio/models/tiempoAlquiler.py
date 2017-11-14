from uuid import uuid4
from django.db import models
from .unidad import Unidad


class TiempoAlquiler(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    descripcion = models.CharField(max_length=40, null=True, blank=True)
    fecha_creada = models.DateTimeField(auto_now_add=True)
    fecha_actualizada = models.DateTimeField(auto_now=True)
    unidad = models.ForeignKey(Unidad)

    class Meta:
        verbose_name = "TiempoAlquiler"
        verbose_name_plural = "TiempoAlquileres"

    def __str__(self):
        return self.descripcion
