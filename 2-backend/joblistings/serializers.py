from rest_framework import serializers
from .models import Joblistings


class JoblistingsSerializer(serializers.ModelSerializer):
    employer = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Joblistings
        fields = ['id', 'employer', 'title', 'location',
                  'description', 'requirements', 'salary', 'is_featured', 'company_email', 'listing_date']
