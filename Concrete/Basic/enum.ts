// ------------------------- Enum
enum MyDay{
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4
}

console.log(MyDay.WEDNESDAY);
// 3

let weekday: string = MyDay[2];
console.log(weekday); 
// TUESDAY

// type any
let notSure: any = "ABC";
console.log(notSure);
notSure = 1;
console.log(notSure);

// Status enum
enum STATUS { 
    SUCCESS1 = 200, 
    FAILED2 = 404
};

let todoStatus03: STATUS = STATUS.SUCCESS1;


// // Use never for never touching this method. Used to throw exception
// function error(message: string): never {
//     throw new Error(message);
// }

// error('Qang exception thu xem!!!');

// // Object by a declare function
// declare function create(o: object | null): void;
// create({ prop: 0 }); // OK
// create(null); // OK

// Type
let someValue1: any = "this is a string cast by angle bracket";
let strLength1: number = (<string>someValue1).length;
console.log(strLength1);

let someValue2: any = "this is a string cast by as type";
let strLength2: number = (someValue2 as string).length;
console.log(strLength2);


/* WRONG  + Don’t write several overloads that differ only in trailing parameters */
interface Example1 {
    diff(one: string): number;
    diff(one: string, two: string): number;
    diff(one: string, two: string, three: boolean): number;
}

/* OK >> Do use optional parameters whenever possible */
interface Example2 {
    diff(one: string, two?: string, three?: boolean): number;
}

//-----
/* WRONG + Don’t write overloads that differ by type */
interface Moment {
    utcOffset(): number;
    utcOffset(b: number): Moment;
    utcOffset(b: string): Moment;
}

/* OK >> Do use union types whenever possible */
interface Moment {
    utcOffset(): number;
    utcOffset(b: number|string): Moment;
}

