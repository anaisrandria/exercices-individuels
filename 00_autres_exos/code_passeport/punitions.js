const consonnes = ['b', 'c', 'ç', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

function countConsonants(text) {
    let counter = 0;
    let arrayText = text.split("");

    for (let i = 0; i < text.length; i++) {
        if (consonnes.includes(arrayText[i].toLowerCase())) {
            counter++
        }
    }
    console.log(counter);
}

countConsonants("L'école ouvre à 8H30, je dois arriver à l'heure");