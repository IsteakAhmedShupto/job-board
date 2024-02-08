from rest_framework import generics
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated

# serializer
from .serializers import ResumeSerializer

# models
from .models import Resume


class ResumeList(generics.ListCreateAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
