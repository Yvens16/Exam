/**
 * 
 * Un isogramme est un mot qui n’a pas de lettres qui se répète, consécutivement	ou non. Ignorez la casse des lettres.   

x
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
    const tableau = [];

    for (let i = 0; i < word.length; i++){
        tableau.push(word[i]);
    }

    const lettresVues = [];

    for (let i = 0; i < tableau.length; i++){
        const lettreActuelle = tableau[i];
        let isDuplicate = false;

        for (let j = 0; j < lettresVues.length; j++){
            if (lettreActuelle.toLowerCase() === lettresVues[j].toLowerCase()){
                isDuplicate = true;
            } 
            if(isDuplicate){
            return false;
        }
       
        }
        lettresVues.push(lettreActuelle);
    }
    return true;
}


module.exports = isIsogram