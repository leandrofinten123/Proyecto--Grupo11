from django.urls import path
from .views import JuegoListCreate, JuegoDetail

urlpatterns = [
    path('juegos/', JuegoListCreate.as_view(), name='juego-list-create'),
    path('juegos/<int:pk>/', JuegoDetail.as_view(), name='juego-detail'),
]