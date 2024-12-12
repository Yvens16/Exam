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


const isIsogram = str => {
  str = str.toLowerCase();
  const letters = new Set();
  for (let i = 0; i < str.length; i++) {
    if (letters.has(str[i])) {
      return false;
    }
    letters.add(str[i]);
  }
  return true;
};


module.exports = isIsogram


