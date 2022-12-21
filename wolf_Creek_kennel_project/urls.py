"""wolf_Creek_kennel_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from dogs import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="index"),
    path('sires/', views.sires, name="sires"),
    path('dams/', views.dams, name="dams"),
    path('nursery/', views.nursery, name="nursery"),
    path('gallery/', views.gallery, name="gallery"),
    path('aboutTheKennel/', views.about_the_kennel, name="about_the_kennel"),
    path('contactUs/', views.contact_us, name="contact_us"),
    path('contactUs/<int:pk>/', views.contact_us_about_puppy, name="contact_us_about_puppy"),
    path('faq/', views.faq, name="faq"),
    path('available_puppy/<int:pk>/', views.puppy_detail_sale, name="available_puppy_detail"),
    path('puppy/<int:pk>/', views.puppy_detail, name="puppy_detail"),
    path('dog/<int:pk>/', views.adult_dog_detail, name="adult_dog_detail"),
    path('litter/<int:pk>/', views.litter_detail, name="litter_detail")
]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)