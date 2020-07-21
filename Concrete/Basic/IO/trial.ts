// import * as js from "jsonpath";
// let a1: any = {"ID": "abc", "NAME":"bcd"};
// let b1: any = {"NAME":"bcd","ID": "abc"};

// console.log(<JSON>a1===<JSON>b1);



// let jsonString = '{"ka":"val","ha":"sao"}'; // string
// let jsonObj_01 = JSON.parse(jsonString);
// console.log(Object.keys(jsonObj_01));

let jsonObj_02 = {"ka":"val","ha":"sao"}; // Json
let arrKeys = Object.keys(jsonObj_02);
let arrValues = Object.values(jsonObj_02);

console.log(arrKeys);
console.log(arrValues);

let jp = require('JSONPath');

let cities = [
    { name: "London", "population": 8615246 },
    { name: "Berlin", "population": 3517424 },
    { name: "Madrid", "population": 3165235 },
    { name: "Rome",   "population": 2870528 }
  ];

  let names = jp.query(cities, '$..name');
  console.log(names);