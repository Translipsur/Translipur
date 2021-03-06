# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-11-07 08:00
from __future__ import unicode_literals

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('repositorio', '0025_ruta'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tarifario',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('nombre_tarifario', models.CharField(max_length=60)),
                ('cantidad_alquiler', models.CharField(max_length=30)),
                ('costo', models.CharField(max_length=20)),
                ('descripcion', models.CharField(blank=True, max_length=60, null=True)),
                ('unidad_medida', models.CharField(blank=True, max_length=50, null=True)),
                ('fecha_creada', models.DateTimeField(auto_now_add=True)),
                ('fecha_actualizada', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Tarifario',
                'verbose_name_plural': 'Tarifarios',
            },
        ),
    ]
