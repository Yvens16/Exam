const isIsogram = require('.');

test('Test unitaire', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
    expect(isIsogram('isIsogram')).toBe(false);
    expect(isIsogram('isogram')).toBe(true);
    expect(isIsogram('moOse')).toBe(false);
    expect(isIsogram('aba')).toBe(false);
    expect(isIsogram('')).toBe(true);
    expect(isIsogram('test unitaire')).toBe(false);
    expect(isIsogram('examen')).toBe(false);
    expect(isIsogram('anticonstitutionellement')).toBe(false);
})
