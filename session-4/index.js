// ****************************************************TASK 1 - OBJECTS****************************************************




const personA = {
Name: "Karen",
Age: "21",
Location: "NewYork",
Likes: "Food"

};

const personB = {
    Name: "Julia",
    Age: "16",
    Location: "London",
    Likes: "IceSkating",
    
    };

    const personC = {
        Name: "Gina",
        Age: "29",
        Location: "Bristol",
        Likes: "Travelling",
        
        };

        const personD = {
            Name: "Asma",
            Age: "34",
            Location: "NewCastle",
            Likes: "Coding"
            
            };

//*console.log(personA);

function whoIsOlder(A, B) {
    const personAIsOlder = A.Age > B.Age;
    console.log(personAIsOlder); // true
    const resultPersonAIsOlder = A.Name + " is older than " + B.Name + " by " + (A.Age - B.Age) + " years. "
    const resultPersonBIsOlder = B.Name + " is older than " + A.Name + "  by " + (B.Age - A.Age) + " years. "
    
    if (personAIsOlder == true) return resultPersonAIsOlder; 
    return resultPersonBIsOlder;
}

console.log(whoIsOlder(personA, personB))


function biography(person) {
    return "Hi, " + " my name is " + person.Name + ". I am " + person.Age + " years old. " + " I live in " + person.Location + " ,and I like " + person.Likes;
}


console.log(biography(personA))

const person = 24;
const drivingage = 18;

const isdrivingage = person > drivingage;

console.log('Is person of Driving Age?' + isdrivingage);

console.log('Is personB.Age of Driving Age?' + personB.Age > drivingage);









// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

const addition = x + y;

console.log("Addition: x + y " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y " + multiplication);

const division = x / y;

console.log("Division: x / y " + division);

const additionand = x + y - y;

console.log("additionand: x + y - y" + additionand);















// ****************************************************TASK 3****************************************************















