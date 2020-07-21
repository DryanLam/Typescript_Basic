
function hello(greeter: string){
    console.log('Hello, ' + greeter);
}

hello('Dryan');

// ------------------------- Interface
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

console.log(greeter(user));
