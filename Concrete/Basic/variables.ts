// Basic
let free: boolean = true;
let score: number = 10;
let elm: string = "abc";


elm = `Free: ${free} - Score: ${score}`;
console.log(elm);

// Array
let arr1Number: Array<number> = [1,3,5];
let arr1String: Array<string> = ["a","b"];

let arr2Number: number[] = [1,3,5];
let arr2String: string[] = ["a","b"];

console.log(arr1String.push("c"));                      // >> Return array size : 3
console.log(arr1String);                                // >> ["a","b","c"]

let mVar1: any = 4;
mVar1 = "ABC"
console.log(mVar1);                                      // "ABC"

let mArr2: any[] = [1,true,"abc"]
console.log(mArr2);

// Enum
enum STATUS { SUCCESS = 200, FAILED = 404};
let todoStatus: STATUS = STATUS.SUCCESS;                
console.log(todoStatus);                                // 200


// Function
function showInfo(): void{
	console.log("hello void");
}

showInfo();

// Create object
let objOne: any = {};

// Using interface object
interface Course{
	name: string;
	time: string;
	free?: boolean;
}

// Using interface array
interface CourseList {
	[index: number]: string;
}

let courses: CourseList = ["Math","Chemical"];





