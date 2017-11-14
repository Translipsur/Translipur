from uuid import uuid4
from django.db import models
from .persona import Persona
from .alquiler import Alquiler


class RecepcionUnidad(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    descripcion = models.CharField(max_length=60, null=True, blank=True)
    tipo_recepcion = models.CharField(max_length=40)
    unidad_entrega = models.CharField(max_length=40)
    fecha_creada = models.DateTimeField(auto_now_add=True)
    fecha_actualizada = models.DateTimeField(auto_now=True)
    persona = models.ForeignKey(Persona)
    alquiler = models.ForeignKey(Alquiler)

    class Meta:
        verbose_name = "RecepcionUnidad"
        verbose_name_plural = "RecepcionUnidades"

    def __str__(self):
        return self.descripcion
