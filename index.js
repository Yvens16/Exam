/**
 *
 * Un isogramme est un mot qui n’a pas de lettres qui se répète, consécutivement	ou non. Ignorez la casse des lettres.
 *
 *
 */
function isIsogram(str) {
  // Your solution
  const splitWord = str.split("");
  let oldLetters = [splitWord[0]];
  for (i = 1; i < splitWord.length; i++) {
    if (splitWord[i].toUpperCase != splitWord[i - 1].toUpperCase) {
      return false;
    } else if (splitWord[i].toUpperCase != splitWord[i - 1].toUpperCase) {
      for (i = 0; i < oldLetters.length; i++) {
        if (oldLetters[i].toUpperCase === splitWord[i].toUpperCase) {
          return false;
        }
      }
    }
    oldLetters.push(splitWord[i]);
  }

  return true;
}

isIsogram("Dermatoglyphics");

// console.log(isIsogram("Dermatoglyphics")); // true
// console.log(isIsogram("isIsogram")); // false
// console.log(isIsogram("isogram")); // true
// console.log(isIsogram("moOse")); // false
// console.log(isIsogram("aba")); // false
// console.log(isIsogram("")); // true

module.exports = isIsogram;
