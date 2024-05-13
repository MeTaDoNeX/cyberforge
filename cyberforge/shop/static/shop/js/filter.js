document.addEventListener("DOMContentLoaded", function () {
    const activeCategory = document.querySelector('.category-link.active');
    if (activeCategory) {
        fetchProducts(activeCategory.textContent.trim().toLowerCase());
    }

    const categoryLinks = document.querySelectorAll('.category-link');

    categoryLinks.forEach(link => {
        link.addEventListener('click', handleCategoryClick);
    });

    function handleCategoryClick(e) {
        e.preventDefault();
        const clickedCategory = e.target.textContent.trim().toLowerCase();
        categoryLinks.forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
        console.log('Selected category:', clickedCategory);
        fetchProducts(encodeURIComponent(clickedCategory));
    }

    function fetchProducts(category) {
        console.log('Fetching products for category:', decodeURIComponent(category));
        fetch(`/get_products_by_category/?category=${category}`, {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.products) {
                updateProductList(data.products);
            }
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    }

    function updateProductList(products) {
        const productList = document.querySelector('.category-slider');
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = `
                <div class="category-slide">
                    <img class="category-img" src="${product.image_url}" alt="${product.name}">
                    <h4><a href="#">${product.name}</a></h4>
                    <div class="product-details">
                        <div class="product-price">$${product.price}</div>
                        <a href="{% url 'cart' %}"><img class="basket" src="/static/shop/images/category/basket.png" alt="Add to Cart"></a>
                    </div>
                </div>
            `;
            productList.insertAdjacentHTML('beforeend', productItem);
        });
    }
});
