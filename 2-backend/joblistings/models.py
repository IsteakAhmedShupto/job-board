from django.db import models
from datetime import datetime

from django.contrib.auth.models import User


class Joblistings(models.Model):
    # user is employer here
    employer = models.ForeignKey(User, on_delete=models.CASCADE)

    title = models.CharField(max_length=200)
    location = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    requirements = models.TextField(blank=True)
    salary = models.IntegerField()
    is_featured = models.BooleanField(default=True, blank=True)
    company_email = models.EmailField(blank=True)
    listing_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.title
