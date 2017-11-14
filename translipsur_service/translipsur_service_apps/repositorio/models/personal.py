from uuid import uuid4
from django.db import models
from .persona import Persona
from .alquiler import Alquiler


class Personal(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    categoria = models.CharField(max_length=40)
    fecha_creada = models.DateTimeField(auto_now_add=True)
    fecha_actualizada = models.DateTimeField(auto_now=True)
    estado = models.BooleanField(default=True)
    persona = models.ForeignKey(Persona)
    alquiler = models.ForeignKey(Alquiler)

    class Meta:
        verbose_name = "Personal"
        verbose_name_plural = "Personales"

    def __str__(self):
        return self.categoria
