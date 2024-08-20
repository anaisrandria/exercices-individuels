let date = "11/02/2011";

// ON VERIFIE QUE L'ANNEE EST VALIDE

function isValidYear(year) {
    const numberYear = parseInt(year);
    if (numberYear > 999 && numberYear <= 9999) {
        return true
    } else {
        return false
    }
}


// ON VERIFIE QUE LE MOIS EST VALIDE

function isValidMonth(month) {
    const numberMonth = parseInt(month);
    if (numberMonth >= 1 && numberMonth <= 12) {
        return true
    } else {
        return false
    }
}


// ON VERIFIE QUE LE JOUR EST VALIDE

function isValidDay(day, month) {
    const numberDay = parseInt(day);
    const numberMonth = parseInt(month);
    
    if (numberDay >= 1 && numberDay <= 31 && ([1, 3, 5, 7, 8, 10, 12].includes(numberMonth))) {
        return true
    } else if (numberDay >= 1 && numberDay <= 30 && ([4, 6, 9, 11].includes(numberMonth))) {
        return true
    } else if (numberDay >= 1 && numberDay <= 29 && numberMonth == 2) {
        return true
    } else { 
        return false
    }
}


// ON VERIFIE QUE LA DATE COMPLETE EST VALIDE

function isValidDate(completeDate) {
    const splitDate = completeDate.split('/');
    const day = splitDate[0];
    const month = splitDate[1];
    const year = splitDate[2];

    console.log('splitDate:', splitDate);

    if (completeDate.length == 10 && isValidDay(day, month) == true && isValidMonth(month) == true && isValidYear(year) == true) {
        return true
    } else {
        return false
    }
}

console.log('isValidDate:', isValidDate(date))


// Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen 
// qui indique si la date est un palindrome. Si la date est invalide, retourner false.
// Exemple de date palindrome: 11/02/2011. Les caractères / ne sont pas pris en compte.

function isPalindrome(completeDate) {

    let strDate = completeDate.replaceAll("/", "");
    console.log('La valeur de strDate est:', strDate)

    let splitDate = strDate.split("");
    let reverseDate = splitDate.reverse().join("");

    console.log('splitDate:', splitDate);
    console.log('reverseDate:', reverseDate);
    console.log('splitDate.reverse():', splitDate.reverse());

    if (isValidDate(completeDate) == true && strDate === reverseDate) {
        return true
    } else {
        return false
    }
}

console.log('isPalindrome:', isPalindrome("11/02/2011"))