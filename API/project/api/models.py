from django.db import models

# Create your models here.

class trails(models.Model):
    trail_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50, blank=False)
    catalogue_id = models.IntegerField()
    user_id = models.CharField(blank=False)
    video = models.FileField()
    location = models.CommaSeparatedIntegerField()
    
