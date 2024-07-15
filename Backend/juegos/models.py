from django.db import models

class Juego(models.Model):
    nombre = models.CharField(max_length=100)
    genero = models.CharField(max_length=200)
    imagen = models.URLField()

    def __str__(self):
        return self.nombre