from django.http import HttpResponse, HttpResponseNotFound, JsonResponse

from django.shortcuts import render, redirect, get_object_or_404

from .models import *


def index(request):
    categories = Category.objects.all()
    products = Product.objects.all()
    solutions = Solution.objects.all()
    catalog = CatalogItem.objects.all()

    context = {
        'categories': categories,
        'products': products,
        'solutions': solutions,
        'catalog':catalog,
    }

    return render(request, 'shop/index.html', context)

def main(request):
    return render(request,'shop/index.html')
def guarantee(request):
    return render(request,'shop/guarantee.html')
def basket(request):
    return render(request,'shop/delivery.html')
def contacts(request):
    return render(request,'shop/contacts.html')
def other(request):
    return render(request,'shop/other.html')
def get_products_by_category(request):
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        category_name = request.GET.get('category')
        products = Product.objects.filter(category__name__iexact=category_name)
        product_list = [{'name': product.name, 'image_url': product.image.url, 'price': product.price} for product in products]
        return JsonResponse({'products': product_list})
    else:
        return JsonResponse({'error': 'This is not an AJAX request'})





def catalog(request):

    search_query = request.GET.get('search')
    min_price = request.GET.get('min-price')
    max_price = request.GET.get('max-price')
    brands = request.GET.getlist('brand')
    sort = request.GET.get('sort')
    category_slug = request.GET.get('category')

    categories = CatalogItem.objects.all()
    products = Product.objects.all()

    brands_filter = Product.BRAND_CHOICES

    if search_query:
        products = products.filter(name__icontains=search_query)
    if min_price:
        products = products.filter(price__gte=min_price)
    if max_price:
        products = products.filter(price__lte=max_price)
    if brands:
        products = products.filter(brand__in=brands)
    if category_slug:
        products = products.filter(category__slug=category_slug)
    catalog = CatalogItem.objects.all()


    if sort == 'asc':
        products = products.order_by('price')
    elif sort == 'desc':
        products = products.order_by('-price')

    context = {
        'categories': categories,
        'products': products,
        'search_query': search_query,
        'brands_filter': brands_filter,
        'product': Product,
        'catalog': catalog
    }
    return render(request, 'shop/catalog.html', context)


def add_to_cart(request, product_id):
    product = get_object_or_404(Product, pk=product_id)

    cart = request.session.get('cart', {})

    cart_item = cart.get(product_id)
    if cart_item:
        cart_item['quantity'] += 1
    else:
        cart[product_id] = {
            'id': product_id,
            'name': product.name,
            'price': product.price,
            'quantity': 1,
        }

    request.session['cart'] = cart

    return JsonResponse({'message': 'Product added to cart'})



def pageNotFound(request,exception):
    return HttpResponseNotFound("Не найдено")