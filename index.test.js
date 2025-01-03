const isIsogram = require('.');

test('return true for Dermatoglyphics', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });

test('return false for isIsogram', () => {
    expect(isIsogram('isIsogram')).toBe(false);
});

test('return true isogram', () => {
    expect(isIsogram('isogram')).toBe(true);
  });

test('return false moOse', () => {
    expect(isIsogram('moOse')).toBe(false);
  });

test('return false aba', () => {
    expect(isIsogram('aba')).toBe(false);
  });

test('return true  " ', () => {
    expect(isIsogram('')).toBe(true);
});

test('Tests for exercice', () => {})