const phoneInput = document.querySelector('.call-form').children[2]

const phoneMask = new IMask(phoneInput, {
    mask: "+{7}(000)000-00-00",
});