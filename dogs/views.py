from django.shortcuts import render
from .models import Dog

def index(request):
    dogs = Dog.objects.all()
    puppies_for_sale = []
    for dog in dogs:
        if dog.available_for_sale and dog.puppy:
            puppies_for_sale.append(dog)
    context = {'puppies_for_sale': puppies_for_sale}
    return render(request, 'index.html', context)