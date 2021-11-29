// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
let a = 5;
const b = 10;
let c = a + b;
console.log(c);

a = 20;

console.lpg('after a has been updated ' + c);

c = a + b;

console.log('after a has been updated with thr new a value ' + c);

function sayHey() {
    console.log("Hey!");
}

function conversation() {
    sayHey();
    console.log("how are you?");
    console.log("Goodbye");
}

conversation();

function addTwoNumbers(x, y) {
    const answer = x + y;
    return "Hi Mary! You will be 29 years old in 5 years!" + answer;
}
console.log(addTwoNumbers(24 + 5))