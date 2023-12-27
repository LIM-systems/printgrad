const partnersSlider = new Swiper('.swiper2', {
    slidesPerView: 2.5,
    centeredSlides: false,
    speed: 3000,
    loop: true,
    waitForTransition: true,
    simulateTouch:false,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
});
partnersSlider.enable()