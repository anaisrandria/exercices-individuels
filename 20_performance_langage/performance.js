function now() {
    return Date.now();
}

let temps_initial = now();
console.log("Coucou");

let temps_final = now();
let temps_ecoule = temps_final - temps_initial;

console.log("L'exécution a duré", temps_ecoule, "millisecondes.");