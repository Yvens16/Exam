const isIsogram = require('./index');

// describe('Tests for exercice', () => {
// })

describe('Tests for exercice', () => {
    test('Dermatoglyphics est un isogram', () => {
        expect(isIsogram("Dermatoglyphics")).toBe(true);
      });

      test('isIsogram n\'est pas un isogram', () => {
        expect(isIsogram("isIsogram")).toBe(false);
      });

      test('isogram est un isogram', () => {
        expect(isIsogram("isogram")).toBe(true);
      });

      test('moOse n\'est pas un isogram', () => {
        expect(isIsogram("moOse")).toBe(false);
      });

      test('aba n\'est pas un isogram', () => {
        expect(isIsogram("moOse")).toBe(false);
      });

      test('aba n\'est pas un isogram', () => {
        expect(isIsogram("moOse")).toBe(false);
      });

      test('"" renvoie true', () => {
        expect(isIsogram("")).toBe(true);
      });
  });
