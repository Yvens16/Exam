/**
 * 
 * Un isogramme est un mot qui n’a pas de lettres qui se répète, consécutivement	ou non. Ignorez la casse des lettres.   

x
console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('isIsogram')); // false
console.log(isIsogram('isogram')); // true
console.log(isIsogram('moOse')); // false
console.log(isIsogram('aba')); // false
console.log(isIsogram('')); // true

 * 
 * 
 */

function isIsogram (word) {
    const letter = [];
    for (let i = 0; i < word.length; i++){
        const lowerCase = word[i].toLowerCase()
        if (letter.includes(lowerCase)) {
            return false;
        } else {
                letter.push(lowerCase);
            }
    }
    return true;
}
// console.log(isIsogram('aba'));


module.exports = isIsogram


