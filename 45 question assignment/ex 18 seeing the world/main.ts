// Seeing the World: Think of at least five places in the world you’d
// like to visit.
//• Store the locations in a array. Make sure the array is not
// in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing 
//the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order
// has changed.

//• Reverse the order of your list again. Print the list to show it’s back
// to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array 
//to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order.
// Print the list to show that its order has changed.


// making an array with conries name with no case  and print in orignal order
let countriesToVisit:string[] =["Brazil", "Oman", "Germany", "Canada", "Turkey"];
console.log("original order:" ,countriesToVisit);

// print the array in alhabatical order without modifying the actual array list
console.log("alphabatical order" , [...countriesToVisit].sort());

// show that the array still in original state
console.log("still in orignal state:", countriesToVisit);

// print the array in reverse order without modefying the orginal list
console.log("reverse order ", [...countriesToVisit].reverse);