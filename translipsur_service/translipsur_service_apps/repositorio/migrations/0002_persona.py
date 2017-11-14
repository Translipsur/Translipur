# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-11-04 03:15
from __future__ import unicode_literals

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('repositorio', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=40)),
                ('ape_paterno', models.CharField(max_length=40)),
                ('ape_materno', models.CharField(max_length=40)),
                ('dni', models.CharField(max_length=8)),
                ('ruc', models.CharField(max_length=11)),
                ('celular', models.CharField(max_length=40)),
                ('tipo_persona', models.CharField(blank=True, max_length=40, null=True)),
                ('direccion', models.CharField(max_length=60)),
                ('departamento', models.CharField(blank=True, max_length=25, null=True)),
                ('provincia', models.CharField(blank=True, max_length=25, null=True)),
                ('distrito', models.CharField(blank=True, max_length=25, null=True)),
            ],
            options={
                'verbose_name': 'Persona',
                'verbose_name_plural': 'Personas',
            },
        ),
    ]
