from rest_framework import generics
from .models import Juego
from .serializers import JuegoSerializer

class JuegoListCreate(generics.ListCreateAPIView):
    queryset = Juego.objects.all()
    serializer_class = JuegoSerializer

class JuegoDetail(generics.RetrieveDestroyAPIView):
    queryset = Juego.objects.all()
    serializer_class = JuegoSerializer