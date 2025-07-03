const { Console } = require("console");

let string="Madam"
let reversedString=""
for(let i=string.length-1;i>=0;i--)
{
    reversedString+=string[i] // Reversing the string
    // console.log(string[i]) // Printing each character in reverse order
    
}
console.log("Original String: " + string); // Output: Original String: Madam
console.log("Reversed String: " + reversedString); // Output: Reversed String: madaM
if(string.toLowerCase()===reversedString.toLowerCase()){
    console.log("The string is a palindrome."); // Output: The string is a palindrome.
}else{
    console.log("The string is not a palindrome."); // Output: The string is not a palindrome.
}       
// Function to check if a string is a palindrome
function isPalindrome(input) {
    let reversedStr = input.split('').reverse().join('');
    return input === reversedStr;
}       
console.log(isPalindrome("madam")); // true
  