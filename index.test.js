const isIsogram = require('.');
const { testMatch } = require('./jest.config');

test('Test if word Dermatoglyphics is isogram', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true)
})

test('Test if word isIsogram is NOT isogram', () => {
    expect(isIsogram('isIsogram')).toBe(false)
})

test('Test if word isogram is isogram', () => {
    expect(isIsogram('isogram')).toBe(true)
})

test('Test if word moOse is NOT isogram', () => {
    expect(isIsogram('moOse')).toBe(false)
})

test('Test if word Dermatoglyphics is NOT isogram', () => {
    expect(isIsogram('aba')).toBe(false)
})

test('Test if empty string is isogram', () => {
    expect(isIsogram('')).toBe(true)
})

test('Test if word Artacalan is NOT isogram', () => {
    expect(isIsogram('Artacalan')).toBe(false)
})

test('Test if word anticonstitutionellement is NOT isogram', () => {
    expect(isIsogram('anticonstitutionellement')).toBe(false)
})

test('Test if word aAbBbC is NOT isogram', () => {
    expect(isIsogram('aAbBbC')).toBe(false)
})