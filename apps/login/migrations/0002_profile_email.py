# Generated by Django 2.1.2 on 2018-10-28 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='email',
            field=models.EmailField(default='www', max_length=254, unique=True),
            preserve_default=False,
        ),
    ]