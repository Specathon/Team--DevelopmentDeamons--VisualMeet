# Generated by Django 3.1.5 on 2021-01-20 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('query', '0025_auto_20210120_1126'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classwiseattendancestatus',
            name='class_time',
            field=models.CharField(default=None, max_length=30),
        ),
    ]
