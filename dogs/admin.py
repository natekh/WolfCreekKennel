from django.contrib import admin
from .models import Litter, Dog, Dog_Image, Litter_Image, Dog_Video, Litter_Video, Misc_Image, Misc_Video, FAQ

admin.site.register(Litter)
admin.site.register(Dog)
admin.site.register(Dog_Image)
admin.site.register(Litter_Image)
admin.site.register(Dog_Video)
admin.site.register(Litter_Video)
admin.site.register(Misc_Image)
admin.site.register(Misc_Video)
admin.site.register(FAQ)
