# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-11-07 06:40
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('repositorio', '0023_cargopersonal'),
    ]

    operations = [
        migrations.CreateModel(
            name='TiempoAlquiler',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('descripcion', models.CharField(blank=True, max_length=40, null=True)),
                ('fecha_creada', models.DateTimeField(auto_now_add=True)),
                ('fecha_actualizada', models.DateTimeField(auto_now=True)),
                ('unidad', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='repositorio.Unidad')),
            ],
            options={
                'verbose_name': 'TiempoAlquiler',
                'verbose_name_plural': 'TiempoAlquileres',
            },
        ),
    ]
