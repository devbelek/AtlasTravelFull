# Generated by Django 5.0.6 on 2024-10-10 01:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_benefits_description_en_benefits_description_ky_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='benefits',
            name='max_height',
            field=models.PositiveIntegerField(default=200, verbose_name='Максимальная высота иконки'),
        ),
        migrations.AddField(
            model_name='benefits',
            name='max_width',
            field=models.PositiveIntegerField(default=200, verbose_name='Максимальная ширина иконки'),
        ),
        migrations.AddField(
            model_name='benefits',
            name='quality',
            field=models.PositiveIntegerField(default=90, verbose_name='Качество (1-100)'),
        ),
        migrations.AddField(
            model_name='rentofcarimage',
            name='max_height',
            field=models.PositiveIntegerField(default=1080, verbose_name='Максимальная высота'),
        ),
        migrations.AddField(
            model_name='rentofcarimage',
            name='max_width',
            field=models.PositiveIntegerField(default=1920, verbose_name='Максимальная ширина'),
        ),
        migrations.AddField(
            model_name='rentofcarimage',
            name='quality',
            field=models.PositiveIntegerField(default=85, verbose_name='Качество (1-100)'),
        ),
    ]
