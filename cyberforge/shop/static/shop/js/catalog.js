document.addEventListener("DOMContentLoaded", function () {
    const showFilterBtn = document.getElementById("show-filter");
    const resetFilterBtn = document.getElementById("reset-filter");
    const applyFilterBtn = document.getElementById('apply-filter');
    const priceFilterForm = document.getElementById("price-filter-form");

    showFilterBtn.addEventListener("click", function () {
        applyFilters();
    });

    resetFilterBtn.addEventListener('click', function (event) {
        event.preventDefault();
        resetFilters();
    });



    function applyFilters() {
        const minPrice = document.getElementById("min-price").value.trim();
        const maxPrice = document.getElementById("max-price").value.trim();

        let queryString = '';
        if (minPrice) {
            queryString += `min-price=${minPrice}&`;
        }
        if (maxPrice) {
            queryString += `max-price=${maxPrice}&`;
        }
        queryString = queryString.replace(/&$/, '');

        const url = `/catalog/?${queryString}`;
        updateUrl(url);
    }

    function resetFilters() {
        document.getElementById("min-price").value = '';
        document.getElementById("max-price").value = '';

        const url = '/catalog';
        updateUrl(url);
    }

    function updateUrl(url) {
        history.replaceState(null, null, url);
        window.location.href = url;
    }
});
