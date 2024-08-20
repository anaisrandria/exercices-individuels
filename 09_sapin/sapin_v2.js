let etoiles = "";
let espaces = "";

// MAIN FUNCTION
// function afficherEtoiles(n) {
//     afficherTriangleGauche(n);
//     etoiles = "";
//     afficherTriangleDroite(n);
// }

// afficherEtoiles(5);

// AFFICHAGE TRIANGLES
function afficherTriangleDroite(n) {
    for (let i = 0; i < n; i++) {
        console.log(`${etoiles}\\`);
        etoiles += "*";
    }
}

function afficherTriangleGauche(n) {
    for (let j = 0; j < n; j++) {
        espaces = " ".repeat(n-j);
        console.log(`${espaces}/${etoiles}`);
        etoiles += "*";
    } 

}

// AFFICHAGE POINTE SAPIN 
function afficherSapin(n) {
    for (let k = 0; k < n; k++) {
        espaces = " ".repeat(n-k);
        console.log(`1: ${espaces}/${etoiles}\\`);
        etoiles += "*";
        etoiles += "*";
    }
}

afficherSapin(5);