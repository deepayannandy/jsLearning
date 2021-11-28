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

//Computed properties
const key1="First name"
const key2="Last name"

const val1="Deepayan"
const val2="Nandy"

const obj={
    [key1]: val1,
    [key2]: val2
}
console.log(obj);

// spread operater
const obj1={
    key1: "Value1",
    key2: "Value2",
    key3: "Value3",
}
console.log(obj1);

const newobj={...obj,...obj1}
console.log(newobj);

// object in array
const users=[
    {uname: "Deepayan Nandy", agr:23,userid:1},
    {uname: "Lipi Thakur", agr:21,userid:2},
    {uname: "Mrinal Singh", agr:23,userid:3},
    {uname: "Chandan Gope", agr:23,userid:4},
]
console.log(users);
for(let user of users){
    console.log(user);
}