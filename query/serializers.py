from rest_framework import serializers
from .models import StudentUser,TeacherUser,links,classWiseAttendanceStatus

class StudentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentUser
        fields = '__all__'

class TeacherUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeacherUser
        fields = '__all__'        

class TeacherUserSerializerP(serializers.ModelSerializer):
    class Meta:
        model = TeacherUser
        fields = '__all__'

class StudentUserSerializerP(serializers.ModelSerializer):
    class Meta:
        model = StudentUser
        fields = '__all__'

class linksSerializer(serializers.ModelSerializer):
    class Meta:
        model = links
        fields = "__all__"

class classWiseAttendanceStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = classWiseAttendanceStatus
        fields = '__all__'