from uuid import uuid4
from django.db import models
from .persona import Persona


class Cliente(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    descripcion = models.CharField(max_length=40, null=True, blank=True)
    fecha_creada = models.DateTimeField(auto_now_add=True)
    fecha_actualizada = models.DateTimeField(auto_now=True)
    estado = models.BooleanField(default=True)
    persona = models.ForeignKey(Persona)

    class Meta:
        verbose_name = "Cliente"
        verbose_name_plural = "Clientes"

    def __str__(self):
        return self.descripcion
