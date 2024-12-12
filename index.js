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
function isIsogram(word) {
  word = word.toLowerCase();
  const lettres = [];
  for (let i = 0; i < word.length; i++) {
    const lettre = word[i];
    if (lettres.includes(lettre)) {
      return false;
    }
    lettres.push(lettre);
  }
  return true;
}
module.exports = isIsogram;
