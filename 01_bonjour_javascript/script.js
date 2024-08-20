let firstname = prompt(`Quel est votre prénom ?`)
let hour = 11

function sayHello(firstname, hour) { 
    let message;
    if (hour < 18) {
    message = `Bonjour ${firstname} ! Il est ${hour} heures.`
    // document.querySelector('h1').innerText = message;
    }

    else {
    message = `Bonsoir ${firstname} ! Il est ${hour} heures.`
    // document.query/Selector('h1').innerText = message;
    }
    return message
}

document.querySelector('h1').innerText = sayHello(firstname, hour)
