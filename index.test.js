const isIsogram = require('.');

test('Tests for exercice', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true)
    expect(isIsogram('isIsogram')).toBe(false)
    expect(isIsogram('isogram')).toBe(true)
    expect(isIsogram('moOse')).toBe(false)
    expect(isIsogram('aba')).toBe(false)
    expect(isIsogram('')).toBe(true)
})
