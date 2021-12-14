// ****************************************************TASK 1****************************************************

const animals = ['cat', 'dog', 'wolf', 'lion', 'eagle', 'zebra'];

//animals.push('llama');
//animals.unshift('flamingo');
animals.pop('');

for (let index = 0; index < animals.length; index++) {
  const animal = animals[index];
  console.log(animal);
}




const names = ['Sarah', 'Asma', 'Jack', 'Jessica', 'Harry', 'Poppy', 'Anne', 'Phillip', 'Asia', 'Megan'];

names.sort();
console.log(names);

names.reverse();
console.log(names);

const numbers = ['5', '325', '67', '100000', '150'];

numbers.sort(function(a, b) { return a - b; });
console.log(numbers);





// ****************************************************TASK 2****************************************************











// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

people.sort(function(a,b){return a - b});
console.log (people);

people.sort ((a, b) => {
  return a.age -b.age;
}
);



//function compare(a, b) {
  //const personA = a.age;
  //const personB = b.age;
  
  //return personA > personB ? true : false;
 // }


//let sortArray = (arr) => arr.slice().sort((a, b) => a.age - b.age).map (({`t'challa'}) => 'shuri');
//console.log(sortArray([{name:'`t'challa', age:37}, {name: ''shuri', age:16} {name: 'killmonger', age:32}]));

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// Note: this helper function is using a tertiary operator instead of an if/else statement



//people.sort(function(a, b) {return a - b; });
//console.log(people);