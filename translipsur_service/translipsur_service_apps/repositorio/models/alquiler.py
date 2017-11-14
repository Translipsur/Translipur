from uuid import uuid4
from django.db import models
from .detalleTiempoAlquiler import DetalleTiempoAlquiler
from .detalleTarifario import DetalleTarifario
from .ruta import Ruta
from .cliente import Cliente


class Alquiler(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    detalle = models.CharField(max_length=60, null=True, blank=True)
    fecha_creada = models.DateTimeField(auto_now_add=True)
    fecha_actualizada = models.DateTimeField(auto_now=True)
    detalleTiempoAlquiler = models.ForeignKey(DetalleTiempoAlquiler)
    detalleTarifario = models.ForeignKey(DetalleTarifario)
    ruta = models.ForeignKey(Ruta)
    cliente = models.ForeignKey(Cliente)

    class Meta:
        verbose_name = "Alquiler"
        verbose_name_plural = "Alquileres"

    def __str__(self):
        return self.detalle
