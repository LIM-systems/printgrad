let phoneInput = document.querySelectorAll('.call-form-tel')

if (phoneInput) {
    Array.from(phoneInput).forEach(item => {
        const phoneMask = new IMask(item, {
            mask: "+{7}(000)000-00-00",
        });
    })
}