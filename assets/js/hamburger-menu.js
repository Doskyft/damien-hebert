const header = document.querySelector("header")
const burgerBtn = header.querySelector(".menu-responsive-btn")

burgerBtn.addEventListener('click', (e) => {
    const target = e.currentTarget

    if (!(target instanceof Element)) {
        return
    }

    const ul = header.querySelector("ul")
    const body = document.querySelector('body')

    ul.style.top = document.querySelector("header").style.height

    if (header.classList.contains('open')) {
        header.classList.remove('open')
        target.classList.remove('close')

        body.style.overflow = 'auto'
    } else {
        header.classList.add('open')
        target.classList.add('close')

        body.style.overflow = 'hidden'
    }
})

document.querySelectorAll("header nav ul li").forEach(li => {
    li.addEventListener('click', () => {
        header.classList.remove('open')
        burgerBtn.classList.remove('close')
    })
})
