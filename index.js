const bgImage = document.querySelector('.bg-image')

window.addEventListener('scroll', updatePage)

function updatePage() {
    bgImage.style.opacity = 1 - window.pageYOffset / 900
    bgImage.style.backgroundSize = `${150 - window.pageYOffset / 12}%`
}