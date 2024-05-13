from django.contrib.auth.models import User
from django.db import models

from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name





class Solution(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='solutions/')
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class CatalogItem(models.Model):
    name = models.CharField(max_length=255)
    icon = models.ImageField(upload_to='catalog_icons/')

    def __str__(self):
        return self.name



class Product(models.Model):
    BRAND_CHOICES = [
        ('Acer', 'Acer'),
        ('Msi', 'Msi'),
        ('Apple', 'Apple'),
    ]

    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='products/')
    price = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    catalog_item = models.ForeignKey(CatalogItem, on_delete=models.CASCADE, related_name='products')
    brand = models.CharField(max_length=255, choices=BRAND_CHOICES)


    def __str__(self):
        return self.name

    def get_category_name(self):
        return self.category.name.lower().replace(" ", "-")

    def get_data_category(self):
        return f'data-category="{self.get_category_name()}"'