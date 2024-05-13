document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: 'Product 1', category: 'all' },
        { name: 'Product 2', category: 'laptops' },
        { name: 'Product 3', category: 'computers' },
        { name: 'Product 4', category: 'components' },
        { name: 'Product 5', category: 'accessories' },
        { name: 'Product 6', category: 'network' },
        { name: 'Product 7', category: 'office' }
    ];

    function displayProducts(category) {
        const filteredProducts = category === 'all' ? products : products.filter(prod => prod.category === category);
        const productItems = document.querySelectorAll('.product-item');

        productItems.forEach(item => {
            const dataCategory = item.getAttribute('data-category');
            if (category === 'all' || dataCategory === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    const categoryButtons = document.querySelectorAll('.category-buttons button');
    let activeCategory = 'all';

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            activeCategory = button.textContent.toLowerCase().replace(' ', '-');
            displayProducts(activeCategory);
        });
    });

    categoryButtons[0].classList.add('active');
    displayProducts(activeCategory);
});
