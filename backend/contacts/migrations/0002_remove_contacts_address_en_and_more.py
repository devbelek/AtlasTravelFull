# Generated by Django 5.0.6 on 2024-10-09 18:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contacts',
            name='address_en',
        ),
        migrations.RemoveField(
            model_name='contacts',
            name='address_ky',
        ),
        migrations.RemoveField(
            model_name='contacts',
            name='address_ru',
        ),
    ]
