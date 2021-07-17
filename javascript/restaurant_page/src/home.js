// const parallax = document.getElementById("parallax-scrolling")
// // let photo = document.querySelector('#parallax-scrolling')
// // let photoOffsetTop = parallax.offsetTop
// // let photoOffsetHeight = parallax.offsetHeight
// let photoYPosition = -100
// parallax.style.backgroundPositionY = photoYPosition + "px"
//
// window.addEventListener("scroll", function () {
//     let offset = window.pageYOffset
//     parallax.style.backgroundPositionY = (offset) * 0.03 + photoYPosition + "px"
// })

export function pizzaPhoto(){
    const divImg =  document.createElement("div")
    divImg.className = "image"
    divImg.id = "parallax-scrolling"
    const textContainer = document.createElement("div")
    textContainer.className = "text-container"
    const p = document.createElement("p")
    p.textContent = "The best pizza in your town"
    const h3 = document.createElement("h3")
    h3.textContent = "Order your favourite food online"
    textContainer.append(p)
    textContainer.append(h3)
    divImg.append(textContainer)
    return divImg

}

export function newsletter(){
    const divContainer = document.createElement("div")
    divContainer.id = "newsletter-container"
    const img1 = document.createElement("img")
    img1.src = "img/newsletter-background.png"
    img1.alt = ""
    const img2 = document.createElement("img")
    img2.src = "img/newsletter-background.png"
    img2.alt = ""

    const newsletterBox = document.createElement("div")
    newsletterBox.id = "newsletter-box"
    const box = document.createElement("div")
    box.className = "box"
    const subscribe =  document.createElement("p")
    subscribe.textContent = "Subscribe to our newsletter"

    const div = document.createElement("div")
    div.append(subscribe)
    const discount = document.createElement("p")
    discount.className = "discount"
    discount.textContent = "Get 60% off of your next purchase"
    const emailInput = document.createElement("input")
    emailInput.type = "text"
    emailInput.placeholder = "Your email"

    box.append(div)
    box.append(discount)
    box.append(emailInput)

    newsletterBox.append(box)

    divContainer.append(img1)
    divContainer.append(img2)
    divContainer.append(newsletterBox)
    return divContainer
}

export function parallaxScrolling(){
    const parallax = document.getElementById("parallax-scrolling")
// let photo = document.querySelector('#parallax-scrolling')
// let photoOffsetTop = parallax.offsetTop
// let photoOffsetHeight = parallax.offsetHeight
    let photoYPosition = -100
    parallax.style.backgroundPositionY = photoYPosition + "px"

    window.addEventListener("scroll", function () {
        let offset = window.pageYOffset
        parallax.style.backgroundPositionY = (offset) * 0.03 + photoYPosition + "px"
    })
}