const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..',
	' ':' '
}

const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H",
	'/':" "
  }


// Prend du texte en paramètre et retourne un tableau contenant chaque caractère individuellement
function getLatinCharacterList(text) {
    let result = text.split("");
    return result;
}

// Prend du morse en paramètre et retourne un tableau contenant chaque caractère individuellement
function getMorseCharactersList(text) {
	let result = text.split(" ");
	console.log(result)
	return result
}

// Prend une lettre en paramètre et renvoie sa correspondance en morse
function translateLatinCharacter(character) {
    // 1) Trouver dans le dictionnaire la valeur qui correspond à la lettre (clé) qu'on veut
    let morse = latinToMorse[character];
    // 2) Retourner l'équivalent en morse
    return morse;
}

function translateMorseCharactere(morse) {
	let latinCharacter = morseToLatin[morse]
	return latinCharacter
}


function encode(text) {
	let morseText = ""
	let separateText = getLatinCharacterList(text)
	console.log(separateText)
	
	for (let i=0; i < separateText.length; i++) {
		morseText += translateLatinCharacter(text[i]) + " "
	}
	
	return morseText
}

console.log(encode("HELLO WORLD"))


function decode(morse) {
	let latinText = ""
	let morseText = getMorseCharactersList(morse)
	// console.log(morseText)

	for (let i=0; i < morseText.length; i++) {
		latinText += translateMorseCharactere(morseText[i]) + ""
	}

	return latinText
}

console.log(decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."))
