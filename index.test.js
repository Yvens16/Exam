const isIsogram = require('.');
test('Si le mot est Dermatoglyphics renvoie true', () => {
    expect(isIsogram("Dermatoglyphics")).toBe(true);
  });
  test('Si le mot est isIsogram renvoie false', () => {
    expect(isIsogram("isIsogram")).toBe(false);
  });
  test('Si le mot est isogram renvoie true', () => {
    expect(isIsogram("isogram")).toBe(true);
  });
  test('Si le mot est moOse renvoie false', () => {
    expect(isIsogram("moOse")).toBe(false);
  });
  test('Si le mot est aba renvoie false', () => {
    expect(isIsogram("aba")).toBe(false);
  });
  test('Si le mot est une chaine de caractere vide renvoie true', () => {
    expect(isIsogram('')).toBe(true);
  });

test('Tests for exercice', () => {})
