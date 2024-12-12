/**
 * 
 * Un isogramme est un mot qui n’a pas de lettres qui se répète, consécutivement	ou non. Ignorez la casse des lettres.   

const isIsogram = str => {
  // Your solution
};

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
  let letters = []
  for (let i = 0; i < word.length; i++) {
    if (letters.includes(word[i].toLowerCase())) {
      return false
    }
    letters.push(word[i].toLowerCase())
  }
  return true
}

module.exports = isIsogram
