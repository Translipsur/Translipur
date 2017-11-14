from uuid import uuid4
from django.db import models
from .personal import Personal


class CargoPersonal(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    descripcion = models.CharField(max_length=50, null=True, blank=True)
    funcion = models.CharField(max_length=40)
    fecha_creada = models.DateTimeField(auto_now_add=True)
    fecha_actualizada = models.DateTimeField(auto_now=True)
    estado = models.BooleanField(default=True)
    personal = models.ForeignKey(Personal)

    class Meta:
        verbose_name = "CargoPersonal"
        verbose_name_plural = "CargoPersonales"

    def __str__(self):
        return self.funcion
