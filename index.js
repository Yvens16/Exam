// const uniqueString = 'abcdefg'
// const repeatedString = 'abcdaefg'

// function hasUniqueCharacters (text) {
//   const obj = {};
//   for(i=0; i < text.length; i++){
//     if(!obj[text[i]]){
//       obj[text[i]]=1
//     }
//     else{
//       //obj[text[i]]+=1
//       return false
//     }
//   }
//   return true
// }

// function hasUniqueCharacters (text) {
//   for (i = 0; i < text.length; i++) {
//     for (j = 0; j < text.length; j++) {
//       if(i != j){
//         if(text[i] == text[j]){
//           return false
//         }
//       }
//     }
//   }
//   return true // false;
// }

// module.exports = isIsogram

// console.log(hasUniqueCharacters(repeatedString))

// const personne = {
//   name: 'Yvens',
//   age: 24,
//   isAdult: true,
//   friends: ['Victor, Rayan']
// }
const countries_cities = [
  { country: 'FR', habitants: 28_000, city: 'Nice' },
  { country: 'ES', habitants: 54_000, city: 'Madrid' },
  { country: 'FR', habitants: 24_000, city: 'Paris' },
  { country: 'EN', habitants: 200_000, city: 'Londres' },
  { country: 'EN', habitants: 16_000, city: 'Manchester' },
  { country: 'FR', habitants: 100_000, city: 'Lyon' },
  { country: 'ES', habitants: 24_000, city: 'Barcelone' }
]

// const ExampleResult = {
//   FR: [
//     { country: 'FR', habitants: 24_000, city: 'Paris' },
//     { country: 'FR', habitants: 28_000, city: 'Nice' },
//     { country: 'FR', habitants: 100_000, city: 'Lyon' }
//   ],
//   EN: [
//     { country: 'EN', habitants: 200_000, city: 'Londres' },
//     { country: 'EN', habitants: 16_000, city: 'Manchester' }
//   ],
//   ES: [
//     { country: 'ES', habitants: 54_000, city: 'Madrid' },
//     { country: 'ES', habitants: 24_000, city: 'Barcelone' }
//   ]
// }

// function groupByCountry (cities) {
//   // return an object like {
//   // "FR": [ { country: 'FR', habitants: 24_000, city: 'Paris' },{ country: 'FR', habitants: 28_000, city: 'Nice' }]
//   //}
//   const group ={}

//   for(i=0; i < cities.length; i++){
//     const countryKey= cities[i].country
//     if(!group[countryKey]){
//         group[countryKey] = [cities[i]];
//       }else{
//         group[countryKey].push(cities[i]);
//       }

//   }
//   console.log(group)

// }

// groupByCountry(countries_cities);

// function groupByHabitant (cities) {
//   const group = {
//     group1: [],
//     group2: []
//   }

//   for (i = 0; i < cities.length; i++) {
//     if (cities[i].habitants > 55000) {
//       group.group1.push(cities[i])
//     } else {
//       group.group2.push(cities[i])
//     }
//   }
//   console.log(group)
// }

// groupByHabitant(countries_cities)

const array = [1, 3, 7, 9, 17, 6, 7, 3, 2]

function findMax (arr) {
  //return Max;
  let max = 0
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  console.log(max)
}

function findMax2 (arr) {
  //return Max;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      arr[0] = arr[i]
    }
  }
  console.log(arr[0])
}
// findMax2(array)

const duplicates = [1, 2, 2, 3, 4, 5, 2, 4, 1]

function removeDuplicates (arr) {
  const unique = []
  const seen = {}
  for (i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true
      unique.push(arr[i])
    }
  }
  return unique
}
// console.log(removeDuplicates(duplicates))

let person = {
  name: 'Alice Smith',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Springfield',
    zipCode: '12345'
  }
}

function toArray (obj) {
  const arrToReturn = []

  // ############## With desctructuring
  for (let [key, value] of Object.entries(obj)) {
    if (key !== 'address') {
      arrToReturn.push(key, value)
    } else {
      for ([addressKey, addressValue] of Object.entries(obj[key])) {
        arrToReturn.push(addressKey, addressValue)
      }
    }
  }

  // ########### With keys
  // for (key in obj) {
  //   console.log(`For key ${key} the value is ${obj[key]}`)

  //   if (key !== 'address') {
  //     arrToReturn.push(key, obj[key])
  //   }
  //   if (key === 'address') {
  //     const addressObj = obj[key]
  //     for (adressKey in addressObj) {
  //       arrToReturn.push(adressKey, addressObj[adressKey])
  //     }
  //   }
  // }

  // ############## basic
  // Object.entries(obj).forEach(([key, value]) => {
  //   if (key !== 'address') {
  //     arrToReturn.push(key, value);
  //   }
  //   if (key === 'address') {
  //     Object.entries(value).forEach(([key, value]) => {
  //       arrToReturn.push(key, value);
  //     })
  //   }
  // });
  return arrToReturn
}

console.log(toArray(person))
