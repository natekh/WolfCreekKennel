from django.shortcuts import render
from .models import Dog, Litter, Dog_Image, Litter_Image, Dog_Video, Litter_Video, Misc_Image, Misc_Video, FAQ

def index(request):
    dogs = Dog.objects.all()
    puppies_for_sale = []
    for dog in dogs:
        if dog.available_for_sale and dog.puppy:
            puppies_for_sale.append(dog)
    context = {'puppies_for_sale': puppies_for_sale}
    return render(request, 'index.html', context)

def sires(request):
    dogs = Dog.objects.all()   
    sires = []
    for dog in dogs:
        if not dog.puppy and dog.sex == 'M':
            sires.append(dog)
    context = {'adult_dogs': sires}
    return render(request, 'adult_dogs.html', context)

def dams(request):
    dogs = Dog.objects.all()
    dams = []
    for dog in dogs:
        if not dog.puppy and dog.sex == 'F':
            dams.append(dog)
    context = {'adult_dogs': dams}
    return render(request, 'adult_dogs.html', context)

def nursery(request):
    dogs = Dog.objects.all()
    puppies = []
    for dog in dogs:
        if dog.puppy:
            puppies.append(dog)
    context = {'puppies': puppies}
    return render(request, 'nursery.html', context)

def gallery(request):
    dogs = Dog.objects.all()
    puppies_for_sale = []
    for dog in dogs:
        if dog.available_for_sale and dog.puppy:
            puppies_for_sale.append(dog)
    context = {'puppies_for_sale': puppies_for_sale}
    return render(request, 'gallery.html')

def about_the_kennel(request):
    dogs = Dog.objects.all()
    puppies_for_sale = []
    for dog in dogs:
        if dog.available_for_sale and dog.puppy:
            puppies_for_sale.append(dog)
    context = {'puppies_for_sale': puppies_for_sale}
    return render(request, 'about_the_kennel.html')

def contact_us(request):
    dogs = Dog.objects.all()
    puppies_for_sale = []
    for dog in dogs:
        if dog.available_for_sale and dog.puppy:
            puppies_for_sale.append(dog)
    context = {'puppies_for_sale': puppies_for_sale}
    return render(request, 'contact_us.html')

def faq(request):
    faqs = FAQ.objects.all()
    context = {'faqs': faqs}
    return render(request, 'faq.html', context)