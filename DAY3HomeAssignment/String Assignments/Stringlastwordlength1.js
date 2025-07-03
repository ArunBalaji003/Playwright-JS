let str1="fly me to the moon"
/*function IndexofLastWord(str1) {
    let words = str1.trim().split(' ').filter(words => words.length > 0);
    IndexofLastWord(str1);
    console.log("Input String: " + str  + " | Last Word: " + words[words.length - 1]);
    return words.length > 0 ? words[words.length - 1] : '';
}
    console.log("Length of the String : " + str1.length);        
    console.log("Last Word: " + IndexofLastWord(str1));
    console.log("Length of the Last Word: " + IndexofLastWord(str1).length);*/
    function IndexofLastWord(str1) {
    let words = str1.trim().split(' ').filter(word => word.length > 0);
    return words.length > 0 ? words[words.length - 1] : '';
}   
//console.log("Length of the String : " + str1.length);
console.log("Last Word: " + IndexofLastWord(str1)); 
console.log("Length of the Last Word: " + IndexofLastWord(str1).length);