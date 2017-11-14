from uuid import uuid4
from django.db import models
from .persona import Persona


class Usuario(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    fecha_creada = models.DateTimeField(auto_now_add=True)
    fecha_actualizada = models.DateTimeField(auto_now=True)
    persona = models.ForeignKey(Persona)
    estado = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"

    def __str__(self):
        return self.user
