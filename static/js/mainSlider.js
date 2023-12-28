

function initSlider() {
    mainSlider = new Swiper('.page', {
        wrapperClass: 'page__wrapper',
        slideClass: 'page__screen',
        direction: 'vertical',
        slidesPerView: 'auto',
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        mousewheel: true,
        parallax: true,
        watchOverflow: true,
        speed: 700,
        observer: true,
        observeParents: true,
        observerSlideChildren: true,
        pagination: {
            el: '.page__pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'page__bullet',
            bulletActiveClass: 'page__bullet_active',
        },
        init: false,
        on: {
            init: function () {
                mainSliderElement.style.position = 'fixed'
                mainSliderElement.style.overlow = 'hidden'
                // регулировка кнопки фиксированных контактов
                fixedContactsHandler(0)
                // добавляем классы для анимации первого появления
                // wrapper.classList.add('_loaded')
                // установки при инициализации слайдера
                // mainSlider.slideTo(1)
                menuSlider()
                // отправляем пользователя на нужный слайд
                toggleToSlide()
            },
            slideChange: function () {
                // скрываем меню в футере
                hideMenu(mainSlider.realIndex)
                // регулировка кнопки фиксированных контактов
                fixedContactsHandler(mainSlider.realIndex)
                // добавление/удаление необходимых классов для отображения меню и экрана
                activeScreenRemove()
                // menuLinks[mainSlider.realIndex].classList.add('_active')
                screensContent[mainSlider.realIndex]?.classList?.add('_active-screen')
            },
            resize: function () {
                setScrollType()
            }
        }
    })

    // отправка пользователя на нужный слайдер в зависимости от места перехода
    function toggleToSlide() {
        let slideNumber = sessionStorage.getItem('fromAboutUs')
        if(slideNumber) mainSlider.slideTo(slideNumber)
        sessionStorage.clear()
    }

    // скрытие/открытие кнопки фиксированных контактов
    function fixedContactsHandler(sliderNumber) {
        const value = pageArr[pageArr.length - 2]
        if (pageArr.length <= 4) {
            const prohibitedSlides = [0, 5, 7]
            if (prohibitedSlides.includes((sliderNumber))) {
                contactsFixed.classList.add('contacts-fixed-hide')
            } else {
                contactsFixed.classList.remove('contacts-fixed-hide')
            }
        }
        if (value === 'sks') {
            const prohibitedSlides = [4, 5]
            if (prohibitedSlides.includes((sliderNumber))) {
                contactsFixed.classList.add('contacts-fixed-hide')
            } else {
                contactsFixed.classList.remove('contacts-fixed-hide')
            }
        }

        if (value === 'outsrc') {
            const prohibitedSlides = [4, 5]
            if (prohibitedSlides.includes((sliderNumber))) {
                contactsFixed.classList.add('contacts-fixed-hide')
            } else {
                contactsFixed.classList.remove('contacts-fixed-hide')
            }
        }

        if (value === 'pks') {
            const prohibitedSlides = [3,4]
            if (prohibitedSlides.includes((sliderNumber))) {
                contactsFixed.classList.add('contacts-fixed-hide')
            } else {
                contactsFixed.classList.remove('contacts-fixed-hide')
            }
        }

        if (value === 'about_us') {
            const prohibitedSlides = [4,5]
            if (prohibitedSlides.includes((sliderNumber))) {
                contactsFixed.classList.add('contacts-fixed-hide')
            } else {
                contactsFixed.classList.remove('contacts-fixed-hide')
            }
        }

        if (value === 'partners') {
            const prohibitedSlides = [3,4]
            if (prohibitedSlides.includes((sliderNumber))) {
                contactsFixed.classList.add('contacts-fixed-hide')
            } else {
                contactsFixed.classList.remove('contacts-fixed-hide')
            }
        }
    }

    function hideMenu(slideNumber) {
        const value = pageArr[pageArr.length - 2]
        let footerNumber = null
        pageArr.length <= 4 ? footerNumber = 7 : value === 'sks' ||  value === 'outsrc'
        ? footerNumber = 5 : value === 'pks' ? footerNumber = 4 : value === 'about_us' 
        ? footerNumber = 5 : value === 'partners' ? footerNumber = 4 : footerNumber = null
        if (slideNumber === footerNumber) {
            mainMenu.classList.add('_hide-main-menu')
        } else {
            mainMenu.classList.remove('_hide-main-menu')
        }
    }

    // необходимые установки для активации слайдера
    function menuSlider() {
        if (mainSlider.realIndex === 7) {
            mainMenu.classList.add('_hide-main-menu')
        }
        screensContent[mainSlider.realIndex].classList.add('_active-screen')
        // menuLinks[mainSlider.realIndex].classList.add('_active')
        // if (menuLinks.length > 0) {
        //     // добавляем необходимые классы активации и скрытия
        //     screensContent[mainSlider.realIndex].classList.add('_active-screen')
        //     // далее работаем с кажой ссылкой меню
        //     menuLinks.forEach((item, i) => {
        //         item.addEventListener('click', e => {
        //             e.preventDefault()
        //             activeScreenRemove()
        //             mainSlider.slideTo(i, 700)
        //             e.target.classList.add('_active')
        //             screensContent[i].classList.add('_active-screen')
        //         })
        //     })
        // }
    }



    // удаление активного экрана
    function activeScreenRemove() {
        const activeScreen = document.querySelector('.screen__content._active-screen')
        if (activeScreen) {
            activeScreen.classList.remove('_active-screen')
        }
    }

    function setScrollType() {
        const menuStyles = window.getComputedStyle(mainMenu)
        const menuTopValue = menuStyles.getPropertyValue('top')
        for (let i = 0; i < mainSlider.slides.length; i++) {
            const slide = mainSlider.slides[i]
            const slideContent = slide.querySelector('.screen__content')

            if (slideContent) {
                let slideContentHeight = slideContent.offsetHeight
                if (menuTopValue !== '-140.758px') {
                    slideContentHeight -= menuTopValue
                }
                if (slideContentHeight > window.innerHeight) {
                    destroySwiper()
                    break
                }
            }
        }
    }

    // инициализация слайдера
    mainSlider.init()

}

function destroySwiper() {
    if (mainSlider) {
        mainSlider.destroy(true, true)
        mainSlider = null
    }
    mainSliderElement.style.position = 'static'
    mainSliderElement.style.overlow = 'visible'
    bgImages.forEach(item => {
        const img = item.querySelector('img')
        if (img) img.style.transform = 'translate3d(0px, 0%, 0px) scale(1)'
    })
    screenContents.forEach(item => item.style.opacity = '1')
    firstBlock.style.transform = 'translate3d(0px, 0%, 0px)'
    secondBlock.style.transform = 'translate3d(0px, 0%, 0px)'
    thirdBlock.style.transform = 'translate3d(0px, 0%, 0px)'
    fourthBlock.style.transform = 'translate3d(0px, 0%, 0px)'
    fifthBlock.style.transform = 'translate3d(0px, 0%, 0px)'
    footerBlock.style.transform = 'translate3d(0px, 0%, 0px)'
    mainMenu.classList.remove('_hide-main-menu')
}

function handleResize() {
    if (window.innerWidth < 1000) {
        destroySwiper()
    } else {
        if (!mainSlider) {
            initSlider()
        }
    }
}

initSlider()
handleResize()
window.addEventListener('resize', handleResize)