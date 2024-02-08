from django.contrib import admin

from .models import Employer


class EmployerAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'name', 'email')
    list_display_links = ('id', 'user', 'name')


admin.site.register(Employer, EmployerAdmin)
