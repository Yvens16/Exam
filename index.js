/**
 * 
 * Un isogramme est un mot qui n’a pas de lettres qui se répète, consécutivement	ou non. Ignorez la casse des lettres.   

const isIsogram = str => {
  // Your solution
};


- tout mettre dans un tableau
- la même lettre qu'elle soit miniscule ou majuscule = même chose // ~ upperCaseLow 
- filtrer (.filter) le tableau pour chercher les mots avec les mêmes lettres (majuscule & minuscule confondus) en mettant une boucle "for" (ou "switch") 
- retourner la fonction/tableau (il faut que ça retourne un boléen)


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
  //tableaux de chaque lettre de la varible word
  const tabWord = word.toLowerCase().split("")
  // tableaux qui stockera les lettres une par une du mot qui n'appraissent pas 2 fois
  let letterInWord = [] 

  // boucle pour verifier que les lettres n'apparaissent pas eux fois dans le tableaux tabWord
  for (let index = 0; index < tabWord.length; index++) {
    if(letterInWord.includes(tabWord[index])){
      //return false si le mot n'est pas un isograme
      return false
    }else{
      letterInWord.push(tabWord[index])
    }
  }
  //sinon renvoie true
  console.log(true, word)
  return true

}

module.exports = isIsogram


