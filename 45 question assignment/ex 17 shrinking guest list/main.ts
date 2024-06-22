// Shrinking Guest List: You just found out that your 
//new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16.
// Add a new line that prints a message saying that you
// can invite only two people for dinner.

//• Remove guests from your list one at a time until
// only two names remain in your list. Each time you
// pop a name from your list, print a message to that
// person letting them know you’re sorry you can’t invite
// them to dinner.

//• Print a message to each of the two people still
// on your list, letting them know they’re still invited.

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
//in your list

//• Remove the last two names from your list, so you have
// an empty list. Print your list to make sure you 
//actually have an empty list at the end of your program.

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
let guestList = ["umaira" , "Ayesha" , "Rehman" , "Areeba"];

// making variable for those guest who can come
let dontCome  =guestList [0];

// print the name of guest who cant come
console.log(dontCome , "nai askhti");

// add or remove values for guest list of array
guestList.splice(0 , 1 , "waseem");

// mesage print for bigger table
console.log("Goodnews! We have found a bigger table for dinner. ");

// adding a new guest at starting index of array
guestList.unshift("Ahmed");

// adding a new guest  at ending of index of array
guestList.push("Fariha")

// getting a middle index of our guest list of array
let middleIndex: number = Math.floor(guestList.length /2);  // length function //mathfloor function

// adding a middle index of our guest list of array
guestList.splice(middleIndex, 0 , "ayeasha")

// update list of our guest
console.log("updated list of our guests");

// sending a invitation message to our guest
guestList.forEach(guestlist => console.log(`Assalamoalikum ${guestlist},Would you like to dinner with me`));

// inform that two guest invited only for dinner
console.log("Unfortuately! the new dinner table wont arrive on time,  so i can invite only two guest for dinner with me")

// using while loop method to remove guest who not invite for dinner because of dinner table not arrive
while(guestList.length > 2){
    let removedGuestList = guestList.pop();
    console.log(`soory, ${removedGuestList} i cant invite you to dinner`)
}

console.log("invitation to the last 2 guest");

//printing message to the invitation of last guest those are invited for dinner
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo} you are invited for dinner`));

// removing last two guest
guestList.pop();
guestList.pop();

console.log("EmPTY! guestlist" , guestList);
