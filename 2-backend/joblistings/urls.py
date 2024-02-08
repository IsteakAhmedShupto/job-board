from django.urls import path

from . import views

urlpatterns = [
    path('', views.JoblistingsList.as_view()),
    path('<int:pk>', views.JoblistingsReadUpdateDelete.as_view())
]
