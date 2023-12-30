const po1InstrSlider = new Swiper('.swiper3', {
    slidesPerView: 1,
    centeredSlides: true,
    speed: 1000,
    waitForTransition: false,
    simulateTouch: true,
    pagination: {
        el: ".swiper3-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className} po1-slider-bullet">${index + 1}</span>`;
        },
    },
});
po1InstrSlider.enable()