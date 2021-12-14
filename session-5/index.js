const person = {
    name: 'Fiona',
    likes: 'pizza',
    age: "28"
}

console.log(person.name == 'Fiona' || person.age == 30); //true
console.log(person.name == 'Fiona' || person.age == 28); //true 
console.log(person.name == 'Jack' || person.age == 30); //false

if (person.age > 18) {
    console.log (" This person is over 18 years old");
} else if (person.age >= 13 && person.age <= 19) {
    console.log( "This person is a teenager ")
} else {
    console.log(" This person is under 18 years old");
}