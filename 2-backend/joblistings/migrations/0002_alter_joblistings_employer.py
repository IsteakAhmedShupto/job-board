# Generated by Django 4.2.3 on 2023-12-26 03:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('employer', '0006_employer_user'),
        ('joblistings', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='joblistings',
            name='employer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='employer.employer'),
        ),
    ]