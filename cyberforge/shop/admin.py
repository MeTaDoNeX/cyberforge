from django.contrib import admin
from .models import *


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'description')
    list_filter = ('category',)
    search_fields = ('name', 'description')

class SolutionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price')

class CatalogItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon',)


admin.site.register(CatalogItem, CatalogItemAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Solution, SolutionAdmin)