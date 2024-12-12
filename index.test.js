const isIsogram = require(".");

test("Tests for exercice", () => {
  //   console.log(isIsogram("Dermatoglyphics")); // true
  //   console.log(isIsogram("isIsogram")); // false
  //   console.log(isIsogram("isogram")); // true
  //   console.log(isIsogram("moOse")); // false
  //   console.log(isIsogram("aba")); // false
  //   console.log(isIsogram("")); // true

  expect(isIsogram("Dermatoglyphics")).toBe(true);
});
