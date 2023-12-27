window.addEventListener('load', () => {
    const pageArr = page.split('/')
    if (pageArr.length > 4) {
        modal.style.display = 'none'
        modal.classList.add('modal-close')
        area.classList.add('area-open')
        greeting.classList.add('greeting-close')
        wrapper.classList.add('_loaded')
    } else {
        greeting.classList.add('greeting-open')
        greetingContent.classList.add('open-greeting-content')
        setTimeout(() => {
            area.classList.add('area-open')
            greeting.classList.add('greeting-close')
            wrapper.classList.add('_loaded')
        }, 900)
    }
})