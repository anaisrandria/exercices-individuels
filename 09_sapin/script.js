let etoiles = "";
let espaces = "";

// MAIN FUNCTION
function afficherEtoiles(n) {
    afficherTriangleDroite(n);
    etoiles = "";
    afficherTriangleGauche(n);
}

afficherEtoiles(5);

// SECONDARY FUNCTIONS
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
