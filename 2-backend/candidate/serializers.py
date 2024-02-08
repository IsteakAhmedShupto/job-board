from rest_framework import serializers
from .models import Candidate


class CandidateSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Candidate
        fields = ['id', 'user', 'photo', 'first_name', 'last_name', 'email', 'about',
                  'portfolio', 'github', 'linkedin', 'x', 'hashnode', 'devto']
