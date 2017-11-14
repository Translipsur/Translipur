from uuid import uuid4
from django.db import models
from .proveedor import Proveedor
from .unidad import Unidad


class DetalleUnidad(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    descripcion = models.CharField(max_length=40, null=True, blank=True)
    costo = models.CharField(max_length=20, null=True, blank=True)
    fecha_creada = models.DateTimeField(auto_now_add=True)
    fecha_actualizada = models.DateTimeField(auto_now=True)
    proveedor = models.ForeignKey(Proveedor)
    unidad = models.ForeignKey(Unidad)

    class Meta:
        verbose_name = "DetalleUnidad"
        verbose_name_plural = "DetalleUnidades"

    def __str__(self):
        return self.descripcion
