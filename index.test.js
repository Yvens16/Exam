const isIsogram = require('.');

test('Tests for exercice', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
    expect(isIsogram('isIsogram')).toBe(false);
    expect(isIsogram('moOse')).toBe(false);
    expect(isIsogram('aba')).toBe(false);
    expect(isIsogram('')).toBe(false);
})


