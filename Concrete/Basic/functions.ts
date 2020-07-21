
// Ways of function
// 01 - normal
function userInfo_w1(name: string, age: number): string {
	return `My name is ${name}, ${age} year`;
}

// 02 - anonymous function
let userInfo_w2 = function(name: string, age: number): string {
	return `My name is ${name}, ${age} year`;
}

// 03 - arrow function
let userInfo_w3: (name: string, age: number) => string = 
	function(name, age){
		return `My name is ${name}, ${age} year`;
	}

console.log(userInfo_w1("John",69));
console.log(userInfo_w2("John",69));
console.log(userInfo_w3("John",69));

//------------------------
// Optional
function buildName(firstName = "Will", lastName: string) {
	return firstName + " " + lastName;
}

let result4 = buildName(undefined, "Adams");
  
//------------------------
// Arrow function extensive
let f1 = function(i: number) : number{return i*i;};
let f2 = function(i: number) {return i*i;};
let f3 = (i: number): number => {return i*i;};
let f4 = (i: number) => {return i*i;};
let f5 = (i: number) => i*i;

let f6 = (b: string) => console.log(b);
f6('hi');

//------------------------
// Overloads
function funcAbc(x: string): number;

function funcAbc(x: number): string;

function funcAbc(x: any): any{
	if(typeof x == "string"){
		return "is string!";
	} else if(typeof x == "number"){
		return "is number!"
	}
}

console.log(funcAbc(''));
console.log(funcAbc(123));

//------------------------
// Ex1
function multiParamOptions(x:(string | any[]), y:(string | string[])): number{
    return x.length + y.length;
}

console.log(multiParamOptions('abc', ['123']));
console.log(multiParamOptions([1,"abc",true], ["123"]));

//------------------------
// Ex2
function userInfo(name: string = "John", age?: number): string{
	if(age == null){
		return `My name is ${name}`;
	} else{
		return `My name is ${name}, ${age} year old`;
	}
}

console.log(userInfo());
console.log(userInfo('Dryan'));
console.log(userInfo('Dryan',18));

//------------------------
// Ex3 - Rest params
function funcRestParams(name: string, ...course: string[]): string{
	return name + " studies " + course.join(", ");
}

console.log(funcRestParams("John", "ES6", "HTML", "CSS"));




