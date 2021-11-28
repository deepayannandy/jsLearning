function sayIloveYou(){
    console.log("I love you Lipi")
}
sayIloveYou()

function sum(number1, number2){
    return number1+number2;
}
console.log(sum(4,7));

// function iseven(num){
//     if (num%2===0){
//         return true
//     }
//     return false
// }
function iseven(num){
    return num%2===0;
}
console.log(iseven(7)); 

function firstChar(string){
    return string[0];
}
console.log(firstChar("abc")); 

function findkry(arr,kry){
    for(let index in arr){
        if (arr[index]===kry){
            return index
        }
    }
    return -1
}
console.log(findkry ("abc","b")); 
