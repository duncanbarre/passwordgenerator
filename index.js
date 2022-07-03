const withSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const onlyLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let passWordOne = document.getElementById("passwordOne")
let passWordTwo = document.getElementById("passwordTwo")
document.getElementById("lengthInput").value = 10

function generatePasswords() {
    let tempOne = ""
    let tempTwo = ""

    let passWordLength = Number(document.getElementById("lengthInput").value)

    if (passWordLength === undefined) {
        passWordLength = 15
    }

    let characters;

    if (document.getElementById("symbolsNumbers").checked === true) {
        characters = withSymbols
    } else {
        characters = onlyLetters
    }

    for (let i = 0; i < passWordLength; i++) {
        tempOne += characters[Math.floor(Math.random() * characters.length)]
        tempTwo += characters[Math.floor(Math.random() * characters.length)]
    }

    passWordOne.textContent = tempOne
    passWordTwo.textContent = tempTwo
}

function copyPassword(event) {

    let copy = ""

    if (event.target.id === "copyBtnOne") {
        let passwordOne = document.getElementById("passwordOne")
        copy = passWordOne.textContent
    } else if (event.target.id === "copyBtnTwo") {
        let passwordTwo = document.getElementById("passwordTwo")
        copy = passWordTwo.textContent
    }

    navigator.clipboard.writeText(copy)
        .then(() => {
            console.log('Text copied to clipboard');
            window.alert("Password copied to clipboard");
        })
        .catch(err => {
            // This can happen if the user denies clipboard permissions:
            console.error('Could not copy text: ', err);
            window.alert('Could not copy text: ', err);
        });
}
