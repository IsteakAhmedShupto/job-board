from rest_framework import serializers
from .models import Employer


class EmployerSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Employer
        fields = ['id', 'user', 'photo', 'name', 'about', 'email', 'website']
