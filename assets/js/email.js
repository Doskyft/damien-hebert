const form = document.getElementById("contact-btn")

form.addEventListener('click', (e) => {
    const encEmail = "ZGFtaWVuLmhlYmVydC45OEBnbWFpbC5jb20="
    const decoEmail = atob(encEmail)

    form.setAttribute("href", "mailto:".concat(decoEmail))
    form.innerText = 'Email: '.concat(decoEmail)
})
