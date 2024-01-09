const clientsSlider = new Swiper('.swiper', {
    slidesPerView: 3.7,
    centeredSlides: false,
    loop: true,
    waitForTransition: true,
    simulateTouch: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    init: false,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
    },
    on: {
    init: function () {
        if (pageArr.length > 4 && pageArr[3] === 'sks') {
            clientsSlider.params.speed = 7000
            clientsSlider.params.slidesPerView = 3.7
        } else {
            clientsSlider.params.speed = 3000
            clientsSlider.params.slidesPerView = 4.5
        }
    },
}
});
clientsSlider.init()
clientsSlider.enable()

window.addEventListener('resize', e => {
    // console.log(window.innerWidth)
})