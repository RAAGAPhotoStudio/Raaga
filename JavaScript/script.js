document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider-item");
    const totalSlides = slides.length;

    document.querySelector(".arrow.left").addEventListener("click", function() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
      slides[currentSlide].classList.add("active");
    });

    document.querySelector(".arrow.right").addEventListener("click", function() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
      slides[currentSlide].classList.add("active");
    });
  });