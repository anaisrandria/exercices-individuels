// ENONCÉ : On décrit le jeu des allumettes : au départ, il y a un tas de 50 allumettes. 
// Chacun à son tour, les deux joueurs ôtent obligatoirement entre 1 et 6 allumettes. Celui qui ôte la dernière allumette gagne.

// Étape 1. Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.
// Étape 2. Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas.
// Étape 3. Limiter le nombre d’allumettes à pouvoir être retirées de 1 à 6. Ajouter a votre jeu la notion de victoire.


let initialStock = 50;

function enterMatchesToRemove() {
    let nbToRemove = parseInt(prompt(`Prompt 1 : Combien d'allumettes souhaitez-vous retirer ?`));
        while (nbToRemove < 1 || nbToRemove > 6) {
            parseInt(prompt(`Prompt 1 : Veuillez entrer un nombre entre 1 et 6 :`));
        }
    return nbToRemove
    
        // if (nbToRemove >= 1 && nbToRemove <= 6) {
        //     return nbToRemove;
        // } else {
        //     parseInt(prompt(`Prompt 1 : Veuillez entrer un nombre entre 1 et 6 :`));
        // }
}

let nbMatches = (enterMatchesToRemove());

function removeMatches(nbMatchesToRemove) {
    initialStock -= nbMatchesToRemove;
    console.log(`Allumettes à retirer:`, nbMatchesToRemove);
    console.log(`Stock restant:`, initialStock);
        // while (initialStock > 0) {
        //     enterMatchesToRemove()
        //     console.log(`2. Allumettes à retirer:`, nbMatchesToRemove);
        //     console.log(`2. Stock restant:`, initialStock);
        // }
} 

removeMatches(nbMatches);



