from uuid import uuid4
from django.db import models


class Persona(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nombre = models.CharField(max_length=40)
    ape_paterno = models.CharField(max_length=40)
    ape_materno = models.CharField(max_length=40)
    dni = models.CharField(max_length=8)
    ruc = models.CharField(max_length=11)
    celular = models.CharField(max_length=40)
    tipo_persona = models.CharField(max_length=40, null=True, blank=True)
    direccion = models.CharField(max_length=60)
    departamento = models.CharField(max_length=25, null=True, blank=True)
    provincia = models.CharField(max_length=25, null=True, blank=True)
    distrito = models.CharField(max_length=25, null=True, blank=True)

    class Meta:
        verbose_name = "Persona"
        verbose_name_plural = "Personas"

    def __str__(self):
        return self.nombre
