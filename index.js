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
  let tab = [];
  for (let index = 0; index < word.length; index++) {
    const element = word[index];
    if(!tab.includes(element)){
      tab.push(element.toLowerCase());
    }
  }
  if(word.length === 0){
    return true;
  }else{
    if(word.length === tab.length){
      return true;
    }else{
      return false;
    }
  }
 
}

module.exports = isIsogram
