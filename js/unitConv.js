function convertPxToEm() {
    const pxInput = document.getElementById("pxInput").value;
    const emOutput = pxInput / 16;
    document.getElementById("emInput").value = emOutput.toFixed(2);
}

function convertEmToPx() {
    const emInput = document.getElementById("emInput").value;
    const pxOutput = emInput * 16;
    document.getElementById("pxInput").value = pxOutput.toFixed(2);
}


// const fromOption = document.getElementById("from");
// const toOption = document.getElementById("to");
// const convButton = document.getElementById("convert")

// function unitConverter() {
//     const input = parseFloat(document.getElementById("input".value));
//     const fromValue = fromOption.value;
//     const toValue = toOption.value;

//     let output;

//     if (fromValue === "pixels") {
//         if (toValue === "em") {
//             output = input / 16;
//         }
//     }
//     else if (fromValue === "em") {
//         if (toValue === "pixels") {
//             output = input * 16;
//         }
//     }
//     else {
//         output = console.log("Invalid input");
//     }
// }

// convButton.addEventListener("click", unitConverter);
// fromOption.addEventListener("change", unitCheck);
// toOption.addEventListener("change", unitCheck);

// function unitCheck() {
    
//     if (fromValue.value === toValue.value) {
//         convButton.disabled = true;
//     }
//     else {
//         //pass
//     }

    // try {
    //     const inputValue = parseFloat(document.getElementById("input".value));
    // } catch ({ name, message }) {
    //     console.log(name);
    //     console.log(message);
    // }
// }

// convButton.addEventListener("click", unitConverter);
// fromOption.addEventListener("change", unitCheck);
// toOption.addEventListener("change", unitCheck);


// Gjøremål:
// Sortere unit valg i kategorier
// Basert på valg, begrens valg i andre select til samme kategori
// Legg til feilmelding hvis dem gir ugyldig input


// Finner alle elementene
// const formElement = event.target
// const userInput = formElement[0]
// const multiply = formElement[2]
// const addition = formElement[3]

// Finner alle elementene
/// const formElement = event.target;
/// const inputValue = formElement.inputValue.value;
/// const fromUnit = formElement.fromUnit.value;
/// const toUnit = formElement.toUnit.value;

// Finner alle elementene
// const formElement = document.getElementById("formElement")
// const userInput = document.getElementById("userInput")
// con