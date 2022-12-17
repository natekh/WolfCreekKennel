from django.db import models
from django.core.validators import FileExtensionValidator
from django.core.exceptions import ValidationError

class Litter(models.Model):
    title = models.CharField(max_length=500)
    mother = models.ForeignKey("Dog", related_name="mother", on_delete=models.CASCADE)
    father = models.ForeignKey("Dog", related_name="father", on_delete=models.CASCADE)
    description = models.TextField(null=True, blank=True)
    main_image = models.ImageField(upload_to='images/', null=True, blank=True)
    coming_soon = models.BooleanField(default=False)
    due_date = models.DateField(null=True, blank=True, default=None)

    def __str__(self):
        return self.title

    def clean(self):
        super().clean()
        if not self.coming_soon and self.due_date is not None:
            raise ValidationError('Due date is only allowed if coming soon is true.')

class Dog(models.Model):
    litter = models.ForeignKey(Litter, related_name="dogs", on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=500)
    show_name = models.BooleanField()
    description = models.TextField(null=True, blank=True)
    birthday = models.DateField()
    available_for_sale = models.BooleanField()
    puppy = models.BooleanField() 
    sexes = (('M', 'Male'), ('F', 'Female'))
    sex = models.CharField(max_length=1, choices=sexes)
    breeds = (('EB', 'English Bulldog'), ('FB', 'French Bulldog'))
    breed = models.CharField(max_length=2, choices=breeds, default='EB')
    pedigree = models.ImageField(upload_to='images/', null=True, blank=True)
    main_image = models.ImageField(upload_to='images/', null=True, blank=True)

    def __str__(self):
        return self.name

class Dog_Image(models.Model):
    dog = models.ForeignKey(Dog, related_name="dog_images", on_delete=models.CASCADE)  
    name = models.CharField(max_length=500) 
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return f"{self.dog.name}: {self.name}"

class Litter_Image(models.Model):
    puppy_litter = models.ForeignKey(Litter, related_name="litter_images", on_delete=models.CASCADE)
    name = models.CharField(max_length=500)
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return f"{self.puppy_litter.name}: {self.name}"

class Dog_Video(models.Model):
    dog = models.ForeignKey(Dog, related_name="dog_videos", on_delete=models.CASCADE) 
    name = models.CharField(max_length=500)
    video = models.FileField(upload_to='videos/', validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])

    def __str__(self):
        return f"{self.dog.name}: {self.name}"

class Litter_Video(models.Model):
    puppy_litter = models.ForeignKey(Litter, related_name="litter_videos", on_delete=models.CASCADE)
    name = models.CharField(max_length=500)
    video = models.FileField(upload_to='videos/', validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])

    def __str__(self):
        return f"{self.puppy_litter.name}: {self.name}"

class Misc_Image(models.Model):
    name = models.CharField(max_length=500)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.name

class Misc_Video(models.Model):
    name = models.CharField(max_length=500)
    description = models.TextField(null=True, blank=True)
    video = models.FileField(upload_to='videos/', validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])

    def __str__(self):
        return self.name

class FAQ(models.Model):
    question = models.TextField()
    answer = models.TextField()

    def __str__(self):
        return self.question