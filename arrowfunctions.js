const sum =(number1, number2) =>{
    return number1+number2;
}
console.log(sum(4,7));

const iseven= num => num%2===0;
console.log(iseven(7)); 

// function inside function
function app(){
    const sum =(number1, number2) =>{
        return number1+number2;
    }
    
    const iseven= num => num%2===0;

    console.log("inside app");
    console.log(sum(4,7));
    console.log(iseven(7)); 
}
app();