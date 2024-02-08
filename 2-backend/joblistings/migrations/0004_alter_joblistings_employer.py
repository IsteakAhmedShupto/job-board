# Generated by Django 4.2.3 on 2023-12-26 04:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('employer', '0007_alter_employer_user'),
        ('joblistings', '0003_alter_joblistings_employer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='joblistings',
            name='employer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='employer.employer'),
        ),
    ]
