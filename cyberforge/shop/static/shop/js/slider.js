document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".slider-indicator");
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            if (idx === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    showSlide(currentIndex);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            clearInterval(slideInterval);
            currentIndex = index;
            showSlide(currentIndex);
            document.querySelector(".slider-indicator.active").classList.remove("active");
            indicators[currentIndex].classList.add("active");

            slideInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
                document.querySelector(".slider-indicator.active").classList.remove("active");
                indicators[currentIndex].classList.add("active");
            }, 5000);
        });
    });

    slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        document.querySelector(".slider-indicator.active").classList.remove("active");
        indicators[currentIndex].classList.add("active");
    }, 5000);
});
