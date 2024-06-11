// Changing Guest List: You just heard that one of your guests can’t
// make the dinner, so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
var guestList = ["umaira", "Ayesha", "Rehman", "Areeba"];
var dontCome = guestList[0];
console.log(dontCome, "nai askhti");
guestList.splice(0, 1, "waseem");
guestList.forEach(function (guest) { return console.log("Assalamoalikum ".concat(guest, " , would you like to dinner with me")); });
