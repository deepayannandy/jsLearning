// create objects
const person ={
    fullname: "Deepayan Nandy",
    age: 22,
};
console.log(person);

// get data
console.log(person.fullname)
console.log(person.age)

console.log(person["fullname"])
console.log(person["age"])

// add data
person.gender="male";
console.log(person);
person["Status"]="Single";
console.log(person);

//loop
for(let key in person){
    console.log(key,':',person[key]);
    console.log(`${key} == ${person[key]}`);
}

console.log(Object.keys(person))
