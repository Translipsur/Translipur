# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-11-05 22:30
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('repositorio', '0019_soat'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('descripcion', models.CharField(blank=True, max_length=40, null=True)),
                ('fecha_creada', models.DateTimeField(auto_now_add=True)),
                ('fecha_actualizada', models.DateTimeField(auto_now=True)),
                ('estado', models.BooleanField(default=True)),
                ('persona', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='repositorio.Persona')),
            ],
            options={
                'verbose_name': 'Cliente',
                'verbose_name_plural': 'Clientes',
            },
        ),
    ]