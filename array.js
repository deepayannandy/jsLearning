const frouts=["Apple","Mango","Grapes"]
let numbers=[1,2,3,4,5,6,7,8]
let mixed=["Apple",1,2,3,3.2,11.56]

console.log(frouts)
console.log(numbers)
console.log(mixed)
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}
// insert data
numbers[5]="six"
frouts.push("Banana")

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}
for(let i=0;i<frouts.length;i++){
    console.log(frouts[i])
}
// array copy
let arr2= numbers.slice(0)
console.log(arr2)
let arr3= [].concat(frouts)
console.log(arr3)

// spread operator 
let array4=[...mixed]
console.log(array4)

//marge 
let arr5=[...arr3,...arr2]
console.log(arr5)
let arr6=[].concat(arr3,arr2)
console.log(arr6)

//loop in array
for(let frout of frouts){
    console.log(frout.toUpperCase())
}
for(let index in frouts){
    console.log(frouts[index].toLowerCase())
}

//array destructuring
const myArray=["value1","value2","value3","value4"]
let myNewArray = myArray.slice(2)

let [myvar1,myvar2,...myNewArray1]=myArray

console.log(myvar1)
console.log(myvar2)
console.log(myNewArray)
console.log(myNewArray1)