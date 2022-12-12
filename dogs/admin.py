from django.contrib import admin
from .models import Litter, Dog, Title, Dog_Image, Litter_Image, Dog_Video, Litter_Video, FAQ

admin.site.register(Litter)
admin.site.register(Dog)
admin.site.register(Title)
admin.site.register(Dog_Image)
admin.site.register(Litter_Image)
admin.site.register(Dog_Video)
admin.site.register(Litter_Video)
admin.site.register(FAQ)
