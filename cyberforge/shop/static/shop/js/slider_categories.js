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
        console.log(filteredProducts);
    }

    const categoryLinks = document.querySelectorAll('.category-nav a');
    let activeCategory = 'all';

    categoryLinks.forEach(link => {
        link.addEventListener('click', () => {
            categoryLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
            activeCategory = link.textContent.toLowerCase();
            displayProducts(activeCategory);
        });
    });

    categoryLinks[0].classList.add('active');
    displayProducts(activeCategory);

    const slider = document.querySelector(".category-slider");
    const slideWidth = document.querySelector(".category-slide").offsetWidth;
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.addEventListener("click", function () {
        slider.scrollBy(-slideWidth, 0);
    });

    nextBtn.addEventListener("click", function () {
        slider.scrollBy(slideWidth, 0);
    });
});
