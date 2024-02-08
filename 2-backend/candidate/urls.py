from django.urls import path

from . import views

urlpatterns = [
    path('', views.CandidateList.as_view()),
    path('<int:pk>', views.CandidateListReadUpdateDelete.as_view()),
]
