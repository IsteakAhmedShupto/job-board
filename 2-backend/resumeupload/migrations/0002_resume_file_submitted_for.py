# Generated by Django 4.2.3 on 2024-01-11 18:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resumeupload', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='resume',
            name='file_submitted_for',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
