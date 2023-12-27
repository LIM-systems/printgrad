const clientsSlider = new Swiper('.swiper', {
    slidesPerView: 3.7,
    centeredSlides: false,
    loop: true,
    waitForTransition: true,
    simulateTouch:false,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    init: false,
    on: {
        init: function () {
            if(pageArr.length > 4 && pageArr[3] === 'sks' ){
                clientsSlider.params.speed = 7000
            } else {
                clientsSlider.params.speed = 3000
            }
        },
    }
});
clientsSlider.init()
clientsSlider.enable()
