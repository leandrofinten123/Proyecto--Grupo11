# Generated by Django 5.0.7 on 2024-07-15 00:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('juegos', '0002_alter_juego_imagen'),
    ]

    operations = [
        migrations.AlterField(
            model_name='juego',
            name='genero',
            field=models.CharField(max_length=200),
        ),
    ]