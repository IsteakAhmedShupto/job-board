from django.db import models


class Resume(models.Model):
    file = models.URLField(null=True, blank=True)
    file_submitted_for = models.IntegerField(null=True, blank=True)
    candidate_email = models.EmailField(null=True, blank=True)

    def __str__(self):
        return self.candidate_email
