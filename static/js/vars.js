// приветствие
const greeting = document.querySelector('.greeting')//для приветствия
const greetingContent = greeting.children[0] //для приветствия
const area = document.querySelector('.area')//для приветствия

// модалка
const modal = document.querySelector('.modal-wrapper')
const closeModal = document.querySelector('.close-modal')

// общие перемененные
const wrapper = document.querySelector('.wrapper') // главная оболочка
const page = window.location.href //определение странички
const pageArr = page.split('/')
const contactsFixed = document.querySelector('.contacts-fixed') // фиксированные контакты

// главный вертикальный слайдер
let mainSlider = null // объект слайдера
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
const footerBlock = document.querySelector('.sixth-block')

// табы в 4ом блоке
const fourthBlockTabs = document.querySelectorAll('.tablinks')