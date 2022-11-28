const duration = 1500
const pause = 3500
let interval

function autoSlide() {
    interval = window.setInterval(nextImage, pause)
}

function nextImage() {
    let slideLastElement = $('.slide').last()
    let firstImage = $('.slide').first()
    console.log(firstImage)
    firstImage.animate({ marginLeft: -firstImage.width() }, duration, () => {
        slideLastElement.after(firstImage)
        firstImage.css({marginLeft: 0})
    })
}


$(document).ready(() => {
    autoSlide()
})