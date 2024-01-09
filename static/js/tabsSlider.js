const tabsSlider = new Swiper('.swiperTabs', {
    slidesPerView: 1,
    centeredSlides: true,
    speed: 500,
    waitForTransition: false,
    init: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    init: function () {
        console.log('test')
    },
});
tabsSlider.init()
tabsSlider.enable()