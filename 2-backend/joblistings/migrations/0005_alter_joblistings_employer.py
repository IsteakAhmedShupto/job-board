# Generated by Django 4.2.3 on 2023-12-26 07:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('joblistings', '0004_alter_joblistings_employer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='joblistings',
            name='employer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
