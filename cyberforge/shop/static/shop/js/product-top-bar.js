document.addEventListener("DOMContentLoaded", function () {
    function countProducts() {
        const productList = document.getElementById("product-list");
        const productItems = productList.getElementsByClassName("product-item");
        return productItems.length;
    }

    function updateProductCount() {
        const totalCount = countProducts();
        const productCountElement = document.getElementById("product-count");
        productCountElement.textContent = `Найдено: ${totalCount} товаров`;
    }

    updateProductCount();
});
