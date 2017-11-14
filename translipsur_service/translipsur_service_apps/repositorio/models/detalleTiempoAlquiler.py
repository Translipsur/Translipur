from uuid import uuid4
from django.db import models
from .tiempoAlquiler import TiempoAlquiler


class DetalleTiempoAlquiler(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    detalle = models.CharField(max_length=60, null=True, blank=True)
    fecha_creada = models.DateTimeField(auto_now_add=True)
    fecha_actualizada = models.DateTimeField(auto_now=True)
    tiempoAlquiler = models.ForeignKey(TiempoAlquiler)

    class Meta:
        verbose_name = "DetalleTiempoAlquiler"
        verbose_name_plural = "DetalleTiempoAlquileres"

    def __str__(self):
        return self.detalle
