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

function isIsogram(str) {
  // console.log('Début de chaque test :', str);

  const mot = str.toLowerCase();
  for (let i = 0; i < mot.length; i++) {
    if (mot.indexOf(mot[i]) !== mot.lastIndexOf(mot[i])) {
      return false;
    }
  }
  return true;
}

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('isIsogram')); // false
console.log(isIsogram('isogram')); // true
console.log(isIsogram('moOse')); // false
console.log(isIsogram('aba')); // false
console.log(isIsogram('')); // true
console.log(isIsogram('test unitaire')); // true
console.log(isIsogram('examen')); // true
console.log(isIsogram('anticonstitutionellement')); // true

module.exports = isIsogram
