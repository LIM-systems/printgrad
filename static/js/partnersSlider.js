const partnersSlider = new Swiper('.swiper2', {
    slidesPerView: 4.5,
    centeredSlides: false,
    speed: 3000,
    loop: true,
    waitForTransition: true,
    simulateTouch:false,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4.5,
        },
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
});
partnersSlider.enable()