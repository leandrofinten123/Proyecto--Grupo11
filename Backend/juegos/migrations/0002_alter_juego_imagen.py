# Generated by Django 5.0.7 on 2024-07-12 20:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('juegos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='juego',
            name='imagen',
            field=models.URLField(),
        ),
    ]
