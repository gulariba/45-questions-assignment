// Stripping Names: Store a person’s name, and include some
// whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", 
//at least once. Print the name once, so the whitespace around the 
//name is displayed. Then print the name after striping the white spaces.
// "\t" for using space in typescript
// "\n"  making for new line
var whitespaceName = "\n \t Areeba Ahmed Khan \t \n";
console.log(whitespaceName);
var withoutWhitespaceName = whitespaceName.trim();
// using trim function
console.log(withoutWhitespaceName);
