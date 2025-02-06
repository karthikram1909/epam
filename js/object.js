let person = {
    name: "John",
    age: 25,
    city: "New York"
};
console.log(person.name); 
person.age = 26;
console.log(person.age); 
person.country = "USA";
console.log(person); 

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

console.log("city" in person); 