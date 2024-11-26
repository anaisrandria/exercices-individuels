import { expect, test } from 'vitest';
import { sayHello } from './hello';

test("Cas #1 - Dire bonjour avec un prénom", () => {
    expect(sayHello("Anne")).toBe("Hello, Anne !");
});

test("Cas #2 - La fonction reçoit un nombre", () => {
    expect(sayHello(42)).toBe("Oops, vous devez entrer une string");
});

test("Cas #3 - Le prénom est trop long", () => {
	expect(sayHello("Randriamitantsoa")).toBe("Oops, le prénom ne doit pas excéder 14 caractères");
});

test("Cas #4 - La valeur est null", () => {
	expect(sayHello()).toBe("Oops, veuillez entrer un prénom");
});