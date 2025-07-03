let username = "Hello World"
function IndexofLastWord(str) {
    let words = str.trim().split(' ').filter(word => word.length > 0);
    return words.length > 0 ? words[words.length - 1] : '';
}   
console.log("Length of the String : " + username.length);
console.log("Last Word: " + IndexofLastWord(username)); 
console.log("Length of the Last Word: " + IndexofLastWord(username).length);


