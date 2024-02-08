from rest_framework import generics
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated

from rest_framework import filters

# serializers
from .serializers import JoblistingsSerializer

# models
from .models import Joblistings


class JoblistingsList(generics.ListCreateAPIView):
    queryset = Joblistings.objects.all()
    serializer_class = JoblistingsSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["title", "location", "salary"]

    def perform_create(self, serializer):
        serializer.save(employer=self.request.user)


class JoblistingsReadUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Joblistings.objects.all()
    serializer_class = JoblistingsSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
