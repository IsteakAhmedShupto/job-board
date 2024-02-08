from django.contrib import admin

from .models import Joblistings


class JoblistingsAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'is_featured', 'listing_date')
    list_display_links = ('id', 'title')


admin.site.register(Joblistings, JoblistingsAdmin)
