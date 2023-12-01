# Generated by Django 3.2.6 on 2023-11-27 18:13

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ExportLog',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('datetime_created', models.DateTimeField(auto_now_add=True)),
                ('last_edited', models.DateTimeField(auto_now=True)),
                ('status', models.CharField(choices=[('inProgress', 'IN_PROGRESS'), ('complete', 'COMPLETED'), ('failed', 'FAILED')], max_length=255)),
                ('failure_reason', models.CharField(blank=True, max_length=255, null=True)),
                ('continuation_token', models.CharField(blank=True, max_length=255, null=True)),
                ('spreadsheet_link', models.CharField(blank=True, max_length=255, null=True)),
                ('survey_id', models.CharField(max_length=255)),
                ('progress_id', models.CharField(blank=True, max_length=255)),
                ('template_name', models.CharField(max_length=255)),
                ('template_id', models.CharField(max_length=255, null=True)),
                ('output_file_name', models.CharField(blank=True, max_length=255, null=True)),
                ('is_dw', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]