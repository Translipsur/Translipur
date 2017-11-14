from uuid import uuid4
from django.db import models
from .persona import Persona


class Proveedor(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nombre = models.CharField(max_length=30)
    pagina_web = models.CharField(max_length=40, null=True, blank=True)
    estado = models.BooleanField(default=True)
    persona = models.ForeignKey(Persona)

    class Meta:
        verbose_name = "Proveedor"
        verbose_name_plural = "Proveedores"

    def __str__(self):
        return self.nombre
