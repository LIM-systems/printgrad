
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
function toTopButtonActivete() {
    if (isSliderActive) {
        if (toUpButton) toUpButton.addEventListener('click', () => mainSlider.slideTo(0))
    } else {
        if (toUpButton) toUpButton.addEventListener('click', () => firstBlock.scrollIntoView({
            block: 'nearest', // к ближайшей границе экрана
            behavior: 'smooth', // и плавно 
        }))
    }
}

// из футера к блоку заполнения формы
const toCallForm = document.querySelector('.to-call-form')
function toCallFormButtonActivete() {
    if (isSliderActive) {
        let slideToCallForm = null
        const value = pageArr[pageArr.length - 2]
        pageArr.length <= 4 ? slideToCallForm = 5 : value === 'sks' || value === 'outsrc'
            ? slideToCallForm = 4 : value === 'pks'
                ? slideToCallForm = 3 : value === 'about_us'
                    ? slideToCallForm = 4 : value === 'partners'
                        ? slideToCallForm = 3 : slideToCallForm = null
                            ? slideToCallForm = 3 : value === 'po1'
                                ? slideToCallForm = 8 : slideToCallForm = null
        if (slideToCallForm) toCallForm.addEventListener('click', () => mainSlider.slideTo(slideToCallForm))
    } else {
        const contactUsTitle = document.querySelector('.contact-us-title')
        toCallForm.addEventListener('click', () => contactUsTitle.scrollIntoView({
            block: 'nearest', // к ближайшей границе экрана
            behavior: 'smooth', // и плавно 
        }))
    }
}


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
Array.from(closeModal).forEach(item => {
    item.addEventListener('click', () => {
        modalForm.classList.add('modal-close')
        modal.classList.add('modal-close')
    })
})


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

// выпадающее главное меню
const po = document.querySelector('.po-menu')
const hiddenPO = document.querySelector('.po-menu-hidden')
po.addEventListener('mouseover', e => {
    hiddenPO.classList.remove('_po-menu-hide')
})
po.addEventListener('mouseout', e => {
    hiddenPO.classList.add('_po-menu-hide')
})


// на странице о нас переход на главную на определенные слайды
const toServicesButton = document.querySelector('.to-main-services')
if (toServicesButton) toServicesButton.addEventListener('click', () => {
    sessionStorage.setItem('fromAboutUs', 1)
})
const toCasesButton = document.querySelector('.to-main-cases')
if (toCasesButton) toCasesButton.addEventListener('click', () => {
    sessionStorage.setItem('fromAboutUs', 3)
})


// центрирование блоков при более высокой высоте
const screenContent = document.querySelectorAll('.screen__content')
let windowHeight = document.documentElement.clientHeight
let widowWidth = document.documentElement.clientWidth
const menuHeight = 140
centerContent()
window.addEventListener('resize', () => {
    widowWidth = document.documentElement.clientWidth
    windowHeight = document.documentElement.clientHeight
    centerContent()
})

function centerContent() {
    Array.from(screenContent).forEach((item, i) => {
        if (widowWidth >= 1200) {
            const elemHeight = item.offsetHeight
            let marginTop = menuHeight + (windowHeight - menuHeight) / 2 - elemHeight / 2
            if (item.classList.contains('footer-content')) {
                marginTop = windowHeight / 2 - elemHeight / 2
            }
            item.style.marginTop = `${marginTop}px`
        } else {
            item.style.marginTop = `130px`
        }
    })
}

// фиксированные контакты, раскрытие иконок
let openedFixedContacts = false
contactsFixed.addEventListener('click', () => {
    if (!openedFixedContacts) {
        hiddenContactsFixed.classList.remove('contacts-fixed__hide')
        Array.from(hiddenContactsFixedElements).forEach(item => {
            item.classList.remove('contacts-fixed__hide-items')
        })
        openedFixedContacts = true
    } else {
        Array.from(hiddenContactsFixedElements).forEach(item => {
            item.classList.add('contacts-fixed__hide-items')
        })
        hiddenContactsFixed.classList.add('contacts-fixed__hide')
        openedFixedContacts = false
    }
})

// открытие модалки с формой
Array.from(openModalFormButtons).forEach(item => {
    item.addEventListener('click', () => {
        modalForm.classList.remove('modal-close')
    })
})


addresses = {
    'г.Москва, ул. Башиловская 1, к.2': 'https://yandex.ru/maps/-/CDq3QTj9',
    'г.Москва, ул. Михайлова, д. 43': 'https://yandex.ru/maps/-/CDq3QEj4',
    'г.Москва, Черноморский бульвар, д.4,к2': 'https://yandex.ru/maps/-/CDq3Q2ke',
    'г. Москва, ул. Кирпичные Выемки, д. 2, корп. 1, этаж 4, офис 432': 'https://yandex.ru/maps/-/CDq3Q-06',
    'г.Москва, Варшавское шоссе, 152, к2.': 'https://yandex.ru/maps/-/CDq3UA2-',
    'М.о., г. Подольск, мкр. Климовск, ул.Индустриальная, д.13': 'https://yandex.ru/maps/-/CDq3UEN6',
    'М.о., г. Коломна, посёлок Радужный, ул. Московская, д.2.': 'https://yandex.ru/maps/-/CDq3UIn4',
    'г. Санкт-Петербург ул. Южное шоссе 37 к.1': 'https://yandex.ru/maps/-/CDq3UU0M',
    'г.Курск ул. Володарского д. 70': 'https://yandex.ru/maps/-/CDq3UYkJ',
    'г.Железногорск ул. Мира д.20 кор. 2 кв 65': 'https://yandex.ru/maps/-/CDq3U4y1',
    'г.Курск ул. Володарского д. 70': 'https://yandex.ru/maps/-/CDq3UYkJ',
    'г.Рыльск ул. 3-го Интренационала д. 53': 'https://yandex.ru/maps/-/CDq3UBix',
    'Елец, ул. Коммунаров, д. 57': 'https://yandex.ru/maps/-/CDq3UJnL',
    'г. Липецк, Универсальный проезд 2, стр. 4': 'https://yandex.ru/maps/-/CDq3UJ3f',
    'г. Клинцы, ул. Ворошилова, д.3а': 'https://yandex.ru/maps/-/CDq3UN8s',
    'г. Брянск, ул. Крыловская, д. 3 Б, оф. 12': 'https://yandex.ru/maps/-/CDq3URYi',
    'г.Калуга ул.Промышленная д.36 а офис 8': 'https://yandex.ru/maps/-/CDq3UR9X',
    'г. Набережные Челны ул.Машиностроительная 12А': 'https://yandex.ru/maps/-/CDq3UV8C',
    'г. Казань ул.Василиченко 1 к. 153А': 'https://yandex.ru/maps/-/CDq3UZ7m',
    'г. Белгород, ул. Садовая д. 110а': 'https://yandex.ru/maps/-/CDq3U6j6',
    'г. Воронеж Дружинников 11': 'https://yandex.ru/maps/-/CDq3U6~S',
    'г. Орел ул. пер. Маслозавод д.2': 'https://yandex.ru/maps/-/CDq3UC-M',
    'г. Рязань,Черновицкая,34,к.3': 'https://yandex.ru/maps/-/CDq3UGjP',
    'г. Тамбов, Бульвар Строителей, д 4, офис 402': 'https://yandex.ru/maps/-/CDq3UKIo',
    'г.Тула ул.Рогожинская д.18 офис 119': 'https://yandex.ru/maps/-/CDq3UKoz',
}

// показ ссылки адреса при выборе адреса в блоке адресов на главной
Array.from(officesSelect).forEach(item => {
    item.addEventListener('change', e => {
        const value = e.target.value
        const id = e.target.id
        const links = document.querySelectorAll('.offices-item-link')
        const link = Array.from(links).filter(item => item.id === id)[0]
        if (link) {
            if (value === 'Выберите адрес') {
                link.href = ''
                link.textContent = ''
            } else {
                link.href = addresses[value]
                link.textContent = value
            }
        }
    })
})


// форма обратной связи
if (callForms) {
    Array.from(callForms).forEach(item => {
        const name = item.querySelectorAll('input')[0]
        const phone = item.querySelectorAll('input')[1]
        const button = item.querySelector('.send-call-form')
        // const csrftoken = getCookie('csrftoken');
        let csrf_token = document.getElementsByName('csrfmiddlewaretoken')[0].value
        button.addEventListener('click', () => {
            if (name.value === '' && phone.value === '') return
            const nameValue = name.value
            const phoneValue = phone.value
            name.value = ''
            phone.value = ''
            // const page = pageArr[3]
            fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrf_token
                },
                credentials: 'same-origin',
                body: JSON.stringify({ name: nameValue, phone: phoneValue })
            }).then(() => {
                const title = item.querySelector('p')
                title.textContent = 'Заявка отправлена. Спасибо!'
            }).catch(() => {
                const title = item.querySelector('p')
                title.textContent = 'Попробуйте другой способ связи.'
            })
        })
    })
}


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue
}


// меню бургер 
const burger = document.querySelector('.burger');
const lines = document.querySelectorAll('.burger__line');
const burgerLinks = document.querySelector('.burger-menu-links')

function toggleBurger() {
    lines.forEach((line) => line.classList.toggle('active-burger'));
    burgerLinks.classList.toggle('burger-menu-links-hidden')
}

burger.addEventListener('click', toggleBurger);


// запоминание на какой странице пользователь

let pageLocal = localStorage.getItem('page')
const link = backButton.querySelector('a')
if (pageLocal) {
    let pages = pageLocal.split(',')
    let lastPage = null
    let isInArr = false
    if (pageArr[3] === '') {
        pages.forEach(item => {
            if (item === `/`) isInArr = true
        })
        if (!isInArr) {
            pages.push(`/`)
        }
    } else {
        pages.forEach(item => {
            if (item === `/${pageArr[3]}`) isInArr = true
        })
        if (!isInArr) {
            pages.push(`/${pageArr[3]}`)
        }
    }
    if (pages.length !== 1) backButton.style.display = 'block'
    pages.length <= 1 ? lastPage = pages[pages.length - 1] : lastPage = pages[pages.length - 2]
    link.href = lastPage
    pages = pages.join(',')
    localStorage.setItem('page', pages)
} else {
    if (pageArr[3] === '') {
        localStorage.setItem('page', `/`)
    } else {
        localStorage.setItem('page', `,/${pageArr[3]}`)
    }
}

link.addEventListener('click', e => {
    e.preventDefault()
    let pages = localStorage.getItem('page')
    pages = pages.split(',')
    pages.pop()
    if (pages.length <= 1) {
        backButton.style.display = 'none'
    }
    pages = pages.join(',')
    localStorage.setItem('page', pages)
    console.log(pages)
    let pagesArr = [...pageArr]
    pagesArr[3] = link.href.split('/')[3]
    let goToPage = pagesArr.join('/')
    window.location.href = goToPage
})