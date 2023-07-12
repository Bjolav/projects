// document.addEventListener("DOMContentLoaded", function(event) {
//     console.log(document.getElementById("Theme").firstElementChild)
// })

function switchTheme() {
    const bodyElement = document.getElementById("Application")
    const classNames = bodyElement.classList
    // let siteThemeBtn = document.getElementById("Theme")
    // let siteTheme = siteThemeBtn.firstElementChild
    let siteTheme = document.getElementById("Theme").firstElementChild
    // siteThemeBtn.className = "theme-slider-active"

    classNames.toggle

    if (classNames == "app-theme-light") {
        bodyElement.className = "app-theme-dark"
        siteTheme.src="../public/sun.png"
    }
    else {
        bodyElement.className = "app-theme-light"
        siteTheme.src="../public/full-moon.png"
    }
}

console.log(document.getElementById("Theme"))
// console.log(document.getElementById("Application"))

// let listOfPersons = [
//     "Bjørn André",
//     "Maria",
//     "Leon",
//     "Grete",
//     "Lars Gunnar",
//     "Julie"
// ]

// for (const x in listOfPersons) {
//     const newGreeting = `Greetings ${listOfPersons[x]}`
//     console.log(newGreeting)
// }