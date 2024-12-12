const isIsogram = require('.');
let tableIso = ['Dermatoglyphics','isogram', ]
let tableNotIso = ['isIsogram','moOse','aba' ]

test('Tests for exercice', () => {
    tableIso.map((word)=>{expect(isIsogram(word)).toBe(true)})
    tableNotIso.map((word)=>{expect(isIsogram(word)).toBe(false)})

})
