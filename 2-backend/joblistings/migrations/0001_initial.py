# Generated by Django 4.2.3 on 2023-12-25 15:05

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Joblistings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('location', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True)),
                ('requirements', models.TextField(blank=True)),
                ('salary', models.IntegerField()),
                ('is_featured', models.BooleanField(default=True)),
                ('listing_date', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('employer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
