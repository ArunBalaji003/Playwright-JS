let input='function'
let vowelsCount=0
let vowels=['a','e','i','o','u']
for(let i=0;i<input.length;i++){
    let char=input[i].toLowerCase() // Convert character to lowercase for case-insensitive comparison
    if(vowels.includes(char)){
        vowelsCount++ // Increment count if character is a vowel
    }
}
console.log("Number of vowels in the string:", vowelsCount); // Output: Number of vowels in the string: 3