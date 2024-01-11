// приветствие
const greeting = document.querySelector('.greeting')//для приветствия
const greetingContent = greeting.children[0] //для приветствия
const area = document.querySelector('.area')//для приветствия

// модалки
const modal = document.querySelector('.modal-wrapper')
const closeModal = document.querySelectorAll('.close-modal')
const modalForm = document.querySelector('.modal-form-wrapper')
const openModalFormButtons = document.querySelectorAll('.open-form-modal')

// общие перемененные
const wrapper = document.querySelector('.wrapper') // главная оболочка
const page = window.location.href //определение странички
const pageArr = page.split('/')
const contactsFixed = document.querySelector('.contacts-fixed') // фиксированные контакты
const hiddenContactsFixed = document.querySelector('.contacts-fixed-hidden') // скрытые фиксированные контакты
const hiddenContactsFixedElements = hiddenContactsFixed.children


// главный вертикальный слайдер
let mainSlider = null // объект слайдера
let isSliderActive = null // активен ли слайдер
const mainSliderElement = document.querySelector('.page') // главный элемент слайдера
const screensContent = document.querySelectorAll('.screen__content') // контент у слайдера(кроме заднего фона)
const bgImages = document.querySelectorAll('.screen__image') // фоновые изображения
const screenContents = document.querySelectorAll('.screen__content') // все контентные части
// главное меню
const mainMenu = document.querySelector('.menu-wrapper')
// const menuLinks = document.querySelector('.menu-links').querySelectorAll('a') // главное меню
// блоки главной страницы
const firstBlock = document.querySelector('.first-block')
const secondBlock = document.querySelector('.second-block')
const thirdBlock = document.querySelector('.third-block')
const fourthBlock = document.querySelector('.fourth-block')
const fifthBlock = document.querySelector('.fifth-block')
const sixthBlock = document.querySelector('.sixth-block')
const seventhBlock = document.querySelector('.seventh-block')
const eighthBlock = document.querySelector('.eighth-block')
const ninthBlock = document.querySelector('.ninth-block')
const tenthBlock = document.querySelector('.tenth-block')
const eleventhBlock = document.querySelector('.eleventh-block')
const twelfthBlock = document.querySelector('.twelfth-block')
const footerBlock = document.querySelector('.footer-block')

// табы в 4ом блоке
const fourthBlockTabs = document.querySelectorAll('.tablinks')


// селекты офисов
const officesSelect = document.querySelectorAll('.offices-item-select')


// форма обратного звонка
const callForms = document.querySelectorAll('.call-form')

// кнопка назад
const backButton = document.querySelector('.back-button')