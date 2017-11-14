# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-11-05 03:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('repositorio', '0008_auto_20171104_2038'),
    ]

    operations = [
        migrations.CreateModel(
            name='Unidad',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('marca', models.CharField(max_length=40)),
                ('placa', models.CharField(max_length=40)),
                ('color', models.CharField(max_length=40)),
                ('tipo_combustible', models.CharField(max_length=40)),
                ('ruedas', models.CharField(max_length=40)),
                ('altura', models.CharField(max_length=40)),
                ('ancho', models.CharField(max_length=40)),
                ('tipo', models.CharField(max_length=40)),
                ('cilindros', models.CharField(max_length=40)),
                ('ejes', models.CharField(max_length=40)),
                ('nro_motor', models.CharField(max_length=40)),
                ('km_recorrido', models.CharField(max_length=40)),
                ('ano_modelo', models.CharField(blank=True, max_length=40, null=True)),
                ('asientos', models.CharField(blank=True, max_length=40, null=True)),
                ('carga_util', models.CharField(blank=True, max_length=40, null=True)),
                ('longitud', models.CharField(blank=True, max_length=40, null=True)),
                ('nro_serie', models.CharField(blank=True, max_length=40, null=True)),
                ('pasajeros', models.CharField(blank=True, max_length=40, null=True)),
                ('peso_bruto', models.CharField(blank=True, max_length=40, null=True)),
                ('peso_seco', models.CharField(blank=True, max_length=40, null=True)),
            ],
            options={
                'verbose_name': 'Unidad',
                'verbose_name_plural': 'Unidades',
            },
        ),
    ]