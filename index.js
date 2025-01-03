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
    const wordLower = word.toLowerCase();
    for(let i = 0; i < wordLower.length; i++){
        for(let j = i + 1; j < wordLower.length; j++){
            
            if(wordLower[i] === wordLower[j]){
                return false;
            }
        }
    }
    return true;
}

console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram('isIsogram'))
console.log(isIsogram('isogram'))
console.log(isIsogram('moOse'))
console.log(isIsogram('aba'))
console.log(isIsogram(''))

module.exports = isIsogram


