# Generated by Django 4.1.4 on 2022-12-10 22:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dogs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='dog',
            name='main_image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='litter',
            name='main_image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
