from django.urls import path, include
from django.utils.encoding import uri_to_iri

from .views import *
urlpatterns = [
    path('',index,name='home'),
    path('catalog/',catalog,name = 'catalog'),
    path('add-to-cart/<int:product_id>/', add_to_cart, name='add_to_cart'),
    path('favorites/',catalog,name = 'favorites'),
    path('guarantee/',guarantee,name = 'guarantee'),
    path('delivery/',basket,name = 'delivery'),
    path('contacts/',contacts,name = 'contacts'),
    path('other/',other,name = 'other'),
    path('get_products_by_category/', get_products_by_category, name='get_products_by_category'),
]
