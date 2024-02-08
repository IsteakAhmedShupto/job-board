from django.db import models
from django.contrib.auth.models import User


class Candidate(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    photo = models.ImageField(upload_to='candidate', blank=True)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField()
    about = models.TextField()
    portfolio = models.URLField(blank=True)
    github = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    x = models.URLField(blank=True)
    hashnode = models.URLField(blank=True)
    devto = models.URLField(blank=True)

    def __str__(self):
        return self.first_name
