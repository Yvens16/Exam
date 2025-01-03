const isIsogram = require('.');

test('Le mot Dermatoglyphics renvoie True ', () => {
    expect(isIsogram("Dermatoglyphics")).toBe(true);
})

test('Le mot isIsogram renvoie True ', () => {
    expect(isIsogram("isIsogram")).toBe(false);
})

test('Le mot isogram renvoie True ', () => {
    expect(isIsogram("isogram")).toBe(true);
})

test('Le mot moOse renvoie True ', () => {
    expect(isIsogram("moOse")).toBe(false);
})

test('Le mot aba renvoie True ', () => {
    expect(isIsogram("aba")).toBe(false);
})

test('une chaine de caractere vide renvoie True ', () => {
    expect(isIsogram("")).toBe(true);
})