# Generated by Django 4.2.3 on 2023-12-26 03:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employer', '0004_employer_about_employer_email_employer_website'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employer',
            name='user',
        ),
        migrations.AddField(
            model_name='employer',
            name='name',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
