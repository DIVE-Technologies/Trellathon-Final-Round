from rest_framework import serializers
from rest_framework.serializers import Serializer, FileField
from .models import trails

class trailSerializer(serializers.ModelSerializer):
    class Meta:
        model = trails
        fields = ['trail_id', 'name', 'catalgue_id', 'user_id', 'video', 'location']

        