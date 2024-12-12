
 /*Un isogramme est un mot qui n’a pas de lettres qui se répète, consécutivement	ou non. Ignorez la casse des lettres.   

const isIsogram = str => {
  // Your solution
};

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('isIsogram')); // false
console.log(isIsogram('isogram')); // true
console.log(isIsogram('moOse')); // false
console.log(isIsogram('aba')); // false
console.log(isIsogram('')); // true
 
function isIsogram (word) {
  console.log('first')
}
*/

function isIsogram(word) {
  word = toLowerCase(word);

  if (word == ""){
    return true;
  }

  let i;
  let j;

  word = word.split("");

  for (i = 0; i < word.length; i++){
    for(j = i + 1; j < word.length; ++j) {
      if(word[i] === word[j]) {
        return false;
      }
    }
  }
  return true;
}

export default isIsogram;


console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('isIsogram')); // false
console.log(isIsogram('isogram')); // true
console.log(isIsogram('moOse')); // false
console.log(isIsogram('aba')); // false
console.log(isIsogram('')); // true

