# Generated by Django 3.1.5 on 2021-01-28 19:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('query', '0040_notificationblog_posted_on'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notificationblog',
            name='username',
            field=models.CharField(max_length=100),
        ),
    ]
