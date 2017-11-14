from uuid import uuid4
from django.db import models
from .tarifario import Tarifario


class DetalleTarifario(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    detalle = models.CharField(max_length=60, null=True, blank=True)
    fecha_creada = models.DateTimeField(auto_now_add=True)
    fecha_actualizada = models.DateTimeField(auto_now=True)
    tarifario = models.ForeignKey(Tarifario)

    class Meta:
        verbose_name = "DetalleTarifario"
        verbose_name_plural = "DetalleTarifarios"

    def __str__(self):
        return self.detalle
