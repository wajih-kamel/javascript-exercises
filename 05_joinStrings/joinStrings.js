/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!

const Firstname="Carlos";
const LastName="Stevenson";
const thisYear=1965;
const birthYear=1947;

let greeting="Hello! My name is " + Firstname+ " "+ LastName + " and I am " + (1965-1947) +" years old.";

const fullName = Firstname + " " + LastName;
const age = thisYear - birthYear;

greeting= "Hello! My name is " + fullName + " and I am " + age + " years old.";




// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
