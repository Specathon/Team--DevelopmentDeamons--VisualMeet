# Generated by Django 3.1.5 on 2021-01-28 18:01

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('query', '0039_auto_20210128_1559'),
    ]

    operations = [
        migrations.AddField(
            model_name='notificationblog',
            name='posted_on',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
