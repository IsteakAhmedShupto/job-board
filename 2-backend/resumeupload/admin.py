from django.contrib import admin

from .models import Resume


class ResumeAdmin(admin.ModelAdmin):
    list_display = ('id', 'file', 'file_submitted_for', 'candidate_email')
    list_display_links = ('id', 'file')


admin.site.register(Resume, ResumeAdmin)
