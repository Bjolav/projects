function switchTheme() {
    const bodyElement = document.getElementById("Application")
    const classNames = bodyElement.classList

    classNames.toggle

    if (classNames == "app-theme-light") {
        bodyElement.className = "app-theme-dark"
    }
    else {
        bodyElement.className = "app-theme-light"
    }
}