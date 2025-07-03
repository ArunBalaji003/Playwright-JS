let string='javascript'
let frequency={}
for(let i=0;i<string.length;i++){
    let char=string[i]
    if(frequency[char]){
        frequency[char]++
    }else{
        frequency[char]=1
    }
}   
console.log("Frequency of each character in the string:", frequency);