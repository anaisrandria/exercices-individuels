// A afficher
// a
// 1a
// 111a
// 311a
// 13211a


function decritChaine() {
    let text = 'anne';
    let arrayText = text.split('');
    let count = 1; 
    let chaine = '';

    console.log(`text is: ${text}`);

    for (let i = 0; i < text.length; i++) {
        if (arrayText[i] === arrayText[i + 1]) {
            count ++ ;
        } else if (arrayText[i] !== arrayText[i + 1]) {
            chaine += `${count}${arrayText[i]}`;
            count = 1;
        }
    }
    console.log(chaine)
}

decritChaine();