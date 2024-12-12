const { SearchSource } = require('jest');
const isIsogram = require('./index');

test('Tests for Dermatoglyphics', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true)
})

test('Tests for isIsogram', () => {
    expect(isIsogram('isIsogram')).toBe(false)
})

test('Tests for isogram', () => {
    expect(isIsogram('isogram')).toBe(true)
})

test('Tests for moOse', () => {
    expect(isIsogram('moOse')).toBe(false)
})

test('Tests for aba', () => {
    expect(isIsogram('aba')).toBe(false)
})

test('Tests for nothing', () => {
    expect(isIsogram('')).toBe(true)
})

