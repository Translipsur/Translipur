# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-11-05 01:27
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('repositorio', '0006_proveedor'),
    ]

    operations = [
        migrations.CreateModel(
            name='DetalleUnidad',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('costo', models.DecimalField(blank=True, decimal_places=1, max_digits=3, null=True)),
                ('fecha_creada', models.DateTimeField(auto_now_add=True)),
                ('fecha_actualizada', models.DateTimeField(auto_now=True)),
                ('proveedor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='repositorio.Proveedor')),
            ],
            options={
                'verbose_name': 'DetalleUnidad',
                'verbose_name_plural': 'DetalleUnidades',
            },
        ),
    ]
