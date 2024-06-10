// Name Cases: Store a person’s name in a variable, and 
//then print that person’s name in lowercase, uppercase, and titlecase.

// in this exersice we use lowercase upper case and title case
// in a person name 

let personName = "Areeba Ahmed Khan";
console.log(personName.toLowerCase());  //thats called builtan method

console.log(personName.toUpperCase());

// rigix method for title case
// we use replace method
// we use regular expression
// jo string ka pehla charector ko match karta ha
 console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));