// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement 
//to the end of your program informing people that you found a bigger
// dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array.
// • Use append()
// to add one new guest to the end of your list.
// • Print a new set 
//of invitation messages, one for each person 
//in your list.
// creating a guest list array
var guestList = ["umaira", "Ayesha", "Rehman", "Areeba"];
// making variable for those guest who can come
var dontCome = guestList[0];
// print the name of guest who cant come
console.log(dontCome, "nai askhti");
// add or remove values for guest list of array
guestList.splice(0, 1, "waseem");
// mesage print for bigger table
console.log("Goodnews! We have found a bigger table for dinner. ");
// adding a new guest at starting index of array
guestList.unshift("Ahmed");
// adding a new guest  at ending of index of array
guestList.push("Fariha");
// getting a middle index of our guest list of array
var middleIndex = Math.floor(guestList.length / 2); // length function //mathfloor function
// adding a middle index of our guest list of array
guestList.splice(middleIndex, 0, "ayeasha");
// update list of our guest
console.log("updated list of our guests");
// sending a invitation message to our guest
guestList.forEach(function (guestlist) { return console.log("Assalamoalikum ".concat(guestlist, ",Would you like to dinner with me")); });
