from django.urls import path

from . import views

urlpatterns = [
    # path('refresh', views.refresh),
    path('refresh', views.MyTokenRefreshView.as_view()),
    path('register', views.register),
    path('login', views.login),
]
