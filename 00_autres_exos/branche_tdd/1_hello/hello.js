export function sayHello(name) {
    if (!name) {
        return "Oops, veuillez entrer un prénom";
    } else if (typeof(name) !== "string") {
        return "Oops, vous devez entrer une string";
    } else if (name.length > 14) {
        return "Oops, le prénom ne doit pas excéder 14 caractères";
    } else { 
        return `Hello, ${name} !`;
    };
}