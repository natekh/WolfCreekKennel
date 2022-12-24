import os
from datetime import datetime
from django.shortcuts import render, get_object_or_404, redirect
from .models import Dog, Litter, Dog_Image, Litter_Image, Dog_Video, Litter_Video, Misc_Image, Misc_Video, FAQ, Email

def get_age(dog_birthday):
    now = datetime.now().date()
    age_in_days = (now - dog_birthday).days
    age_in_years = age_in_days // 365
    age_in_months = age_in_days // 30
    age_in_weeks = age_in_days // 7
    if age_in_years != 0:
        if age_in_years == 1:
            return f"{age_in_years} year"
        else:
            return f"{age_in_years} years"
        
    if age_in_months != 0:
        if age_in_months == 1:
            return f"{age_in_months} month"
        else:
            return f"{age_in_months} months"

    if age_in_weeks != 0:
        if age_in_weeks == 1:
            return f"{age_in_weeks} week"
        else:
            return f"{age_in_weeks} weeks"

    if age_in_days == 1:
        return f"{age_in_days} day"
    else:
        return f"{age_in_days} days"
        

def index(request):
    dogs = Dog.objects.all()
    puppies_for_sale = []
    for dog in dogs:
        if dog.available_for_sale and dog.puppy and dog.main_image != None:
            puppies_for_sale.append(dog)
    context = {'puppies_for_sale': puppies_for_sale}
    return render(request, 'index.html', context)

def sires(request):
    dogs = Dog.objects.all()   
    sires = []
    ages = []
    for dog in dogs:
        if not dog.puppy and dog.sex == 'M':           
            age = get_age(dog.birthday)
            ages.append({'pk': dog.pk, 'age': age})
            sires.append(dog)
    context = {'adult_dogs': sires, 'ages': ages}
    return render(request, 'adult_dogs.html', context)

def dams(request):
    dogs = Dog.objects.all()
    dams = []
    ages = []
    for dog in dogs:
        if not dog.puppy and dog.sex == 'F':
            age = get_age(dog.birthday)
            ages.append({'pk': dog.pk, 'age': age})
            dams.append(dog)
    context = {'adult_dogs': dams, 'ages': ages}
    return render(request, 'adult_dogs.html', context)

def nursery(request):
    litters = Litter.objects.all()
    coming_soon = []
    current = []
    past_litters = []  
    for litter in litters:
        available_flag = False
        if litter.coming_soon:
            coming_soon.append(litter)
        else:
            for puppy in litter.dogs.all():
                if puppy.available_for_sale:
                    available_flag = True
            if available_flag:
                current.append(litter)
            else:
                past_litters.append(litter)
    context = {'coming_soon': coming_soon, 'current': current, 'past_litters': past_litters}
    return render(request, 'nursery.html', context)

def gallery(request):
    images = Misc_Image.objects.all()
    context = {'images': images}
    return render(request, 'gallery.html', context)

def about_the_kennel(request):
    dogs = Dog.objects.all()
    puppies_for_sale = []
    for dog in dogs:
        if dog.available_for_sale and dog.puppy:
            puppies_for_sale.append(dog)
    return render(request, 'about_the_kennel.html')

def contact_us(request):
    return render(request, 'contact_us.html')

def contact_us_about_puppy(request, pk):
    puppy = get_object_or_404(Dog, id=pk)
    context = {'puppy': puppy}
    return render(request, 'contact_us.html', context)

def faq(request):
    faqs = FAQ.objects.all()
    context = {'faqs': faqs}
    return render(request, 'faq.html', context)

def puppy_detail_sale(request, pk):
    puppy = get_object_or_404(Dog, id=pk)
    context = {'puppy': puppy}
    return render(request, 'puppy_detail_sale.html', context)

def puppy_detail(request, pk):
    puppy = get_object_or_404(Dog, id=pk)
    context = {'puppy': puppy}
    return render(request, 'puppy_detail.html', context)

def adult_dog_detail(request, pk):
    dog = get_object_or_404(Dog, id=pk)
    age = get_age(dog.birthday)
    context = {'dog': dog, 'age': age}
    return render(request, 'adult_dog_detail.html', context)

def litter_detail(request, pk):
    litter = get_object_or_404(Litter, id=pk)
    context = {'litter': litter}
    return render(request, 'litter_detail.html', context)

def add_email_to_newsletter(request):
    email = request.POST['email']
    email_address = Email(email=email)
    try:
        email_address.save()
    except:
        print("Post request failed.")
    return redirect('index')
