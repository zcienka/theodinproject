import {navbar} from "./navbar"
// import './css/home.css'


const contactContainer = document.querySelector(".contact-container")

function contactInfo() {
    let content = document.getElementById("content")
    content.appendChild(navbar())

    let contactBox = document.createElement("div")
    contactBox.className = "contact-box"
    let contactUs = document.createElement("p")
    contactUs.textContent = "Contact us"
    contactBox.appendChild(contactUs)

    let contactInformation = document.createElement("div")
    contactInformation.className = "contact-information"
    let telephoneNumber = document.createElement("p")
    telephoneNumber.textContent = "Telephone number: 666 666 666"
    let location = document.createElement("p")
    location.textContent = "Paris"
    let avenue = document.createElement("p")
    avenue.textContent = "2000 Some Avenue"
    let googleMaps = document.createElement("iframe")
    googleMaps.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33336.970478881165!2d2.3620211495954337!3d48.85588600484503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2zUGFyecW8LCBGcmFuY2ph!5e0!3m2!1spl!2spl!4v1626447766959!5m2!1spl!2spl"
    googleMaps.width = "800"
    googleMaps.height = "600"
    googleMaps.style.border = "0"
    googleMaps.allowFullscreen = ""
    googleMaps.loading = "lazy"

    contactInformation.appendChild(telephoneNumber)
    contactInformation.appendChild(location)
    contactInformation.appendChild(avenue)
    contactInformation.appendChild(googleMaps)

    contactContainer.appendChild(contactBox)
    contactContainer.appendChild(contactInformation)
}

contactInfo()
