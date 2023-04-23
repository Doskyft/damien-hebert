document.querySelectorAll('.more-detail-toggle').forEach((element) => {
    console.log(element)

    element.addEventListener('click', (event) => {
        event.preventDefault()

        const detailContainer = event.currentTarget.closest('div')
        const detail = detailContainer.querySelector('.more-detail')
        const detailBtn = detailContainer.querySelector('.more-detail-toggle')

        if ('block' === detail.style.display) {
            detail.style.display = 'none'
            detailBtn.innerText = 'Afficher plus de détails'
        } else {
            detail.style.display = 'block'
            detailBtn.innerText = 'Afficher moins de détails'
        }
    })
})
