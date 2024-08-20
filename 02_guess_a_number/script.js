function enterNumberToGuess() {
    let numberToGuess = parseInt(prompt("Player 1 : Please enter a number to be guessed between 10 to 50"))
    while (numberToGuess < 10 || numberToGuess > 50) {
        numberToGuess = parseInt(prompt("Player 1 : Please re-enter a number to be guessed between 10 to 50"))
    }
    return numberToGuess
}

function chooseNumber() {
    let givenNumber = parseInt(prompt("Player 2 : Choose a number")) // convertit la valeur de type string en entier
    return givenNumber
}

function didIWin(givenNumber, expectedNumber) {
    let message
    let result
    if (givenNumber < expectedNumber) {
        message = "Plus grand"
        result = false
    }
    else if (givenNumber > expectedNumber) {
        message = "Plus petit"
        result = false
    }

    else if (givenNumber === expectedNumber) {
        message = "Bravo ! Vous avez deviné le nombre."
        result = true
    }

    alert(message)
    return result

}

function gamePlay() {

    let expectedNumber = enterNumberToGuess()
    let result = false // initialise le résultat par défaut à false

    let choice = "" // le premier nombre est vide
    while (result !== true) {
        choice = chooseNumber()
        result = didIWin(choice, expectedNumber)
        console.log("choice is :", choice)
        console.log("type of is :", typeof (choice))
        console.log("expectedNumber is :", expectedNumber)
        console.log("result is :", result)
    }

}

gamePlay()