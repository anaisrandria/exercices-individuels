function fizz(n) {
	if (n % 3 == 0) {
		return "fizz";
	}
    else {
        return ""
    }
}

function buzz(n) {
	if (n % 5 == 0) {
		return "buzz";
	}
    else {
        return ""
    }
}

function capitalize(m){
    return m.charAt(0).toUpperCase() + m.slice(1);
}

const fizzbuzz = (number) => {
    let message = "";
    message += fizz(number);
    message += buzz(number);
    if (!message){
        return number
    }
    else return capitalize(message);
};

module.exports = { fizzbuzz };
