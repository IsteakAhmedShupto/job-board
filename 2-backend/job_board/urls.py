from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/joblistings/', include('joblistings.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/users/', include('users.urls')),
    path('api/employer/', include('employer.urls')),
    path('api/candidate/', include('candidate.urls')),
    path('api/resumeupload/', include('resumeupload.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
