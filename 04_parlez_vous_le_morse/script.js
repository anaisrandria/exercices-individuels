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
};

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
  };

const inputEncode = document.getElementById("input-encode");
const inputDecode = document.getElementById("input-decode");
const buttonEncode = document.getElementById("button-encode");
const buttonDecode = document.getElementById("button-decode");

let valueEncode = "";
let valueDecode = "";

// ---------- ENCODE FUNCTION ---------- // 

function getLatinCharacterList(input) {
	let result = input.split("");
	return result;
};

function translateLatinCharacter(character) {
	let morse = latinToMorse[character];
	return morse;
};

function encode(input) {
	let morseText = "";
	let separateText = getLatinCharacterList(input.toUpperCase());

	for (let i = 0; i < separateText.length; i++) {
		if (separateText[i] == " ") {
			morseText += "/ ";
		} else {
			morseText += translateLatinCharacter(input[i].toUpperCase()) + " ";
		}
	}
	return morseText;
};

inputEncode.addEventListener("input", () => {
	encode(inputEncode.value);
	valueEncode = inputEncode.value;
	if (inputEncode.value.length == 0) {
		document.getElementById("output-encode").innerHTML = null;
	}
}); 

buttonEncode.addEventListener("click", () => {
	document.getElementById("output-encode").innerHTML = encode(valueEncode);
});


// ---------- DECODE FUNCTION ---------- //

// Prend du morse en paramètre et retourne un tableau contenant chaque caractère individuellement
function getMorseCharactersList(input) {
	let result = input.split(" ");
	return result;
};

function translateMorseCharactere(morse) {
	let latinCharacter = morseToLatin[morse];
	return latinCharacter;
};

function decode(morse) {
	let latinText = "";
	let morseText = getMorseCharactersList(morse);

	for (let i=0; i < morseText.length; i++) {
		if (morseText[i] == "/") {
			latinText += " ";
		} else {
			latinText += translateMorseCharactere(morseText[i]) + "";
		}
	}
	return latinText;
};

inputDecode.addEventListener("input", () => {
	encode(inputDecode.value);
	valueDecode = inputDecode.value;
	if (inputDecode.value.length == 0) {
		document.getElementById("output-decode").innerHTML = null;
	};
});

buttonDecode.addEventListener("click", () => {
	document.getElementById("output-decode").innerHTML = decode(valueDecode);
});