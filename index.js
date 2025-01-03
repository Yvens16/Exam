// Un isogramme est un mot qui n’a pas de lettres qui se répète, consécutivement	ou non. Ignorez la casse des lettres.

const isIsogram = (str) => {
  str = str.toLowerCase();

  const lettres = str.split("");

  for (let index = 0; index < lettres.length; index++) {
    for (let j = index + 1; j < lettres.length; j++) {
      if ((lettres[index] === lettres[j])) {
        return false;
      }
    }
  }
  return true;
};

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("isogram")); // true
console.log(isIsogram("moOse")); // false
console.log(isIsogram("aba")); // false
console.log(isIsogram("")); // true

module.exports = isIsogram;
