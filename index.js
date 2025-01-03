/**
 * 
 * Un isogramme est un mot qui n’a pas de lettres qui se répète, consécutivement	ou non. Ignorez la casse des lettres.   

x


 * 
 * 
 */

function isIsogram(word) {
  const str = word.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
}

module.exports = isIsogram;

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("isogram")); // true
console.log(isIsogram("moOse")); // false
console.log(isIsogram("aba")); // false
console.log(isIsogram("")); // true
