let name = "Will";
const lastName = "Henderson";
let address="2301 Vanderbilt Place";
let age = "20";
let uniqueKey=Symbol("key");
let uniqueKey2=Symbol("key");

console.log(address);

let person = {
    firstName: "William",
    lastName: "Henderson",
    address: {
        number: 2301,
        street: "Vanderbilt Place",
        city: "Nashville"
    },
    getFullName: ()=>{
        return person.firstName + " " + person.lastName;
    },
};

console.log(person);
console.log(person.getFullName());

let fruits = ["apple", "pear", "strawberry", "banana"];

const filterFunction = ()=>{
    
}

fruits.filter(filterFunction);