
// табы на главной
function openCity(e) {
    let id = e.target.closest('.tablinks').id.split('_')[1]

    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active-content")
        tabcontent[i].style.display = "none"
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        if (outsrcTablinks.length !== 0) tablinks[i].className = tablinks[i].className.replace(" active_active-outsrc-tablink", "");
    }

    document.getElementById(id).style.display = "block";
    setTimeout(() => document.getElementById(id).className += " active-content", 10)
    e.currentTarget.className += " active";
    if (outsrcTablinks.length !== 0) e.currentTarget.className += " active_active-outsrc-tablink";
}

const firstTabContent = document.querySelectorAll('.tabcontent')
const outsrcTablinks = document.querySelectorAll('.outsrc_tablinks')
if (fourthBlockTabs.length !== 0) {
    firstTabContent[0].className += " active-content"
    firstTabContent[0].style.display = "block"
    const firstButton = document.querySelectorAll('.tablinks')[0].className += " active"
    if (outsrcTablinks.length !== 0) outsrcTablinks[0].className += " active_active-outsrc-tablink"
    fourthBlockTabs.forEach(item => item.addEventListener('click', openCity))
    if (outsrcTablinks.length !== 0) outsrcTablinks.forEach(item => item.addEventListener('click', openCity))
}


// из футера к первому блоку
const toUpButton = document.querySelector('.toUp-button')
toUpButton.addEventListener('click', () => mainSlider.slideTo(0))

// из футера к блоку заполнения формы
const toCallForm = document.querySelector('.to-call-form')
let slideToCallForm = null
const value = pageArr[pageArr.length - 2]
pageArr.length <= 4 ? slideToCallForm = 5 : value === 'sks' || value === 'outsrc'
    ? slideToCallForm = 4 : value === 'pks'
        ? slideToCallForm = 3 : value === 'about_us'
            ? slideToCallForm = 4 : value === 'partners'
                ? slideToCallForm = 3 : slideToCallForm = null
if (slideToCallForm) toCallForm.addEventListener('click', () => mainSlider.slideTo(slideToCallForm))

// отключаем баннер и приветствие при переходе с других страниц
if (pageArr.length <= 4) {
    const isFromAnotherPage = localStorage.getItem('fromAnotherPage')
    if (isFromAnotherPage) {
        modal.style.display = 'none'
        area.classList.add('area-open')
        greeting.style.display = 'none'
        wrapper.classList.add('_loaded')
        localStorage.clear()
    }
} else {
    localStorage.setItem('fromAnotherPage', true)
}


// закрытие приветственной модалки
closeModal.addEventListener('click', () => modal.classList.add('modal-close'))


// переключение строк в табах аутсорса
const outsrcRows = document.querySelectorAll('.third-block-outsrc-problem')
if (outsrcRows.length !== 0) {
    outsrcRows.forEach(item => {
        const button = item.querySelector('.outsrc-problem-button')
        button.addEventListener('click', e => {
            const texts = item.querySelectorAll('p')
            if (texts[0].className === 'hide-outsrc-problem') {
                item.querySelector('img').src = '/static/imgs/outsrctabsopen.png'
                texts[0].className = ''
                texts[1].className = 'hide-outsrc-problem'
                item.style.backgroundColor = '#fff'
            } else {
                item.querySelector('img').src = '/static/imgs/outsrctabsclose.png'
                texts[0].className = 'hide-outsrc-problem'
                texts[1].className = ''
                item.style.backgroundColor = '#fff1e4'
            }
        })
    })
}

// отображение текста на странице о компании блок "почему мы"
const aboutUsWhyItems = document.querySelectorAll('.third-block-about-us__content-item')
if (aboutUsWhyItems.length !== 0) {
    aboutUsWhyItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#FFC895'
            const text = item.querySelectorAll('.about-us-text')
            text[0].classList.add('_about-us-hidden-text')
            text[1].classList.remove('_about-us-hidden-text')
        })
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '#fff'
            const text = item.querySelectorAll('.about-us-text')
            text[0].classList.remove('_about-us-hidden-text')
            text[1].classList.add('_about-us-hidden-text')
        })
    })
}


// на странице о нас переход на главную на определенные слайды
const toServicesButton = document.querySelector('.to-main-services')
if (toServicesButton) toServicesButton.addEventListener('click', () => {
    sessionStorage.setItem('fromAboutUs', 1)
})
const toCasesButton = document.querySelector('.to-main-cases')
if (toCasesButton) toCasesButton.addEventListener('click', () => {
    sessionStorage.setItem('fromAboutUs', 3)
})