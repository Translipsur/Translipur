# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-11-05 03:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('repositorio', '0010_auto_20171104_2211'),
    ]

    operations = [
        migrations.AlterField(
            model_name='unidad',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]