document.addEventListener("DOMContentLoaded", function () {
    const sortBtn = document.getElementById("sort-btn");
    const sortDropdown = document.getElementById("sort-dropdown");

    sortDropdown.addEventListener("click", function (event) {
        event.preventDefault();

        const sortValue = event.target.dataset.sort;

        window.location.href = `/catalog/?sort=${sortValue}`;
    });
});
