function addEventListeners(element) {
    if (!element.hasAttribute('data-toggle')) {
        element.addEventListener('click', toggleDetail)
        element.setAttribute('data-toggle', 'true')
    }
}

function toggleDetail(event) {
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
}

document.querySelectorAll('.more-detail-toggle').forEach((element) => {
    addEventListeners(element)
})

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
                node.querySelectorAll('.more-detail-toggle').forEach((element) => {
                    addEventListeners(element)
                })
            }
        })
    })
})

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false,
})
