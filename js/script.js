// document.addEventListener("DOMContentLoaded", function(event) {
//     console.log(document.getElementById("Theme").firstElementChild)
// })

function switchTheme() {
    const bodyElement = document.getElementById("Application");
    const classNames = bodyElement.classList;
    // let siteThemeBtn = document.getElementById("Theme")
    // let siteTheme = siteThemeBtn.firstElementChild
    let siteTheme = document.getElementById("Theme").firstElementChild;
    // siteThemeBtn.className = "theme-slider-active"

    classNames.toggle;

    if (classNames == "app-theme-light") {
        bodyElement.className = "app-theme-dark";
        siteTheme.src="../public/sun.png";
    }
    else {
        bodyElement.className = "app-theme-light";
        siteTheme.src="../public/full-moon.png";
    }
}

console.log(document.getElementById("Theme"));
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

// int.toFixed(x) = Specifiserer hvor mange decimaler som inkluderes
// Domain manipulation, event listeners
// HTML: Label(atb. for), input(atb. type, placeholder), button, ul
// CSS: 
// JS:  variabler, functions, if / else if, operators, DOM manipulation


// DOM Manipulasjon
// document.getElementById()
// document.querySelectorAll()

// Lage elementer:
// document.createElement()

// Legge til elementer til DOM:
// element.appendChild()

// Fjerne elementer:
// element.remove()

// Sette verdier til innhold
// element.textContent = ny verdi
// element.className = nye klasser
// element.className.toggle


// Event Listeners and Handlers
// Lytter til hendelser
// element.addEventListener("click", eventHandler)

// Håndterer hendelser
// function updateApp(event) {
//  Gjør det du ønsker her   
// }

// pseudo-selectors:
// hover
// focus