let wellPlaced = [];
let missplaced = [];
let notInWord = [];
let tentatives = [];

function guess() {
    let base = 'dictionnaire' // mot à deviner
    let word = document.getElementById("word").value // valeur de l'input 
    let result = tryWord(word, base) // fonction principale qui vérifie que l'input (base) correspond ou non au mot à devnier (word)
    
    if (result === true) {
        document.getElementById("try").innerText = `Votre mot: ${word}`
        document.getElementById("win").innerText = 'Vous avez gagné';
        document.getElementById("well").remove();
        document.getElementById("miss").remove();
        document.getElementById("not").remove();
        // document.getElementsByClassName("wrong").remove();
    } else {
        document.getElementById("word").value = ''; // valeur de 'word' par défaut
        document.getElementById("try").innerText = `Votre mot: ${word}`; // remplace le texte du paragraphe avec l'id "try" par la valeur de l'input
        document.getElementById("well").innerText = `Bien placé: ${result.wellPlaced.join(', ')}`;
        document.getElementById("miss").innerText = `Mal placé: ${result.missplaced.join(', ')}`;
        document.getElementById("not").innerText = `Pas dans le mot: ${result.notInWord.join(', ')}`;
        wellPlaced = [];
        missplaced = [];
    }
    document.getElementById("tentatives").innerText = `Tentatives précédentes : ${tentatives.join(', ')} `
}

function tryWord(word, base) {
	if (word.toLowerCase() === base) { // si la valeur de l'input = mot à deviner, retourner "true"
		return true
    } else {

  	let arrayBase = base.split(''); // array mot à deviner
    let arrayWord = word.split(''); // array input

		for (let i = 0; i < arrayBase.length; i++) { 
            if (arrayBase.includes(arrayWord[i]) && arrayBase[i] === arrayWord[i]) { // si arrayBase[1] === arrayWord[1], ajouter arrayWord[1] au tableau wellPlaced
            wellPlaced.push(arrayWord[i]);
        }	else if (arrayBase.includes(arrayWord[i])) { // sinon ajouter arrayWord[1] au tableau missPlaced
            missplaced.push(arrayWord[i])
        }
        }
    
        for (const char of arrayWord) { // pour toute lettre de arrayWord
            if (arrayBase.includes(char) === false) { // si arrayBase n'inclut pas la lettre, ajouter la lettre au tableau notInWord
            notInWord.push(char)
            }
        }

    tentatives.push(word);

    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
  }
}
