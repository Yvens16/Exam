const isIsogram = require(".");

test("Tests for exercice", () => {
  expect(isIsogram("Dermatoglyphics")).toBe(true); // true
  expect(isIsogram("isIsogram")).toBe(false); // false
  expect(isIsogram("isogram")).toBe(true); // true
  expect(isIsogram("moOse")).toBe(false); // false
  expect(isIsogram("aba")).toBe(false); // false
  expect(isIsogram("")).toBe(true); // true
});
