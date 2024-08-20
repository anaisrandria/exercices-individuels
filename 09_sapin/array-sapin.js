
function afficherPointeSapin(n) {
    let triangleDroite = afficherTriangleDroite(n);
    let triangleGauche = afficherTriangleGauche(n);

    let espaces = "";
    espaces = " ".repeat(n+1);
    console.log(`${espaces}+`);

    for (let i = 0; i < n; i++) {
        console.log(`${triangleGauche[i]}|${triangleDroite[i]}`);
    }
}

// afficherPointeSapin(4);


function afficherTriangleDroite(n) {
    let etoiles = "";
    let array = [];

    for (let i = 0; i < n; i++) {
        array.push(`${etoiles}\\`);
        etoiles += "*";
    }
    return array;
}

console.log(afficherTriangleDroite(5))


// for (let i = 0; i < 5; i++) {
//     console.log(triangleDroite[i])
// }

function afficherTriangleGauche(n) {
    let etoiles = "";
    let espaces = "";
    let array = [];

    for (let j = 0; j < n; j++) {
        espaces = " ".repeat(n-j);
        array.push(`${espaces}/${etoiles}`);
        etoiles += "*";
    }
    return array;

}

// for (let i = 0; i < 5; i++) {
//     console.log(triangleGauche[i])
// }

