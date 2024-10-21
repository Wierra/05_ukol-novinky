const bodyElement = document.querySelector("body")
bodyElement.style.backgroundColor = "#e9e9e9"

const info = document.querySelector("news")
info.style.backgroundColor = "white"
info.style.width = "60rem"

const nadpis = document.querySelector("h1")
nadpis.classList.add("news__title")
nadpis.textContent = "Aktuální novinky"

const clanek1 = document.querySelector("#zprava1")
clanek1.classList.add = "post--main"

const clanek3 = document.querySelector("#zprava3")
clanek3.src = "images/zprava3-novy.jpg"