import './css/home.css'

import {pizzaPhoto} from "./home.js"
import {newsletter} from "./home.js"
import {parallaxScrolling} from "./home.js"
import {navbar} from "./navbar.js"

// home.html
const content = document.getElementById("content")
content.append(navbar())

content.append(pizzaPhoto())
content.append(newsletter())
parallaxScrolling()

