import * as fs from "fs";

// https://github.com/dchester/jsonpath#readme

const readJsonFile = () => {
    let data = fs.readFileSync(__dirname + "/data.json", 'utf8')
    return JSON.parse(data);
}

const prettyJson = (v:any) => {
    // 2 is spacing level
    return JSON.stringify(v,null,2)
}
let o1 = readJsonFile();
console.log(o1.members[0]);
console.log(prettyJson(o1.members[0]));


// Cast to object
export class CPerson{
    public id: number;
    public name: string;
    private status: string;
}

interface IPerson{
    id: number;
    name: string;
    status: string;
}

let personClass = <CPerson>o1.casting;
let personInterface = <IPerson>o1.casting;
console.log(personClass[0].id);
console.log(personInterface[1].id);

/*
// @Type decorator
import {Type, plainToClass} from "class-transformer";

export class Album {

    id: number;

    name: string;

    @Type(() => Photo)
    photos: Photo[];
}

export class Photo {
    id: number;
    filename: string;
}

let album = plainToClass(Album, albumJson);
// now album is Album object with Photo objects inside
*/



let jsonString = '{"ka":"val","ha":"sao"}'; // string
let jsonObj_01 = JSON.parse(jsonString);
console.log(Object.keys(jsonObj_01));

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


let jsonData =  {
    "store": {
      "book": [ 
        {
          "category": "reference",
          "author": "Nigel Rees",
          "title": "Sayings of the Century",
          "price": 8.95
        }, {
          "category": "fiction",
          "author": "Evelyn Waugh",
          "title": "Sword of Honour",
          "price": 12.99
        }, {
          "category": "fiction",
          "author": "Herman Melville",
          "title": "Moby Dick",
          "isbn": "0-553-21311-3",
          "price": 8.99
        }, {
           "category": "fiction",
          "author": "J. R. R. Tolkien",
          "title": "The Lord of the Rings",
          "isbn": "0-395-19395-8",
          "price": 22.99
        }
      ],
      "bicycle": {
        "color": "red",
        "price": 19.95
      }
    }
  }

let authors = jp.query(jsonData, '$..author'); //['Nigel Rees', 'Evelyn Waugh', 'Herman Melville', 'J. R. R. Tolkien']
let paths = jp.paths(jsonData, '$..author');
var nodes = jp.nodes(jsonData, '$..author');

console.log(authors);

// Apply new change
let nodes02 = jp.apply(jsonData, '$..author', (value:any) => { return value.toUpperCase() });
let authors02 = jp.query(jsonData, '$..author'); //['NIGEL REES', 'EVELYN WAUGH', 'HERMAN MELVILLE', 'J. R. R. TOLKIEN']
console.log(authors02);

// Parse path
let pathExpression = jp.stringify(['$', 'store', 'book', 0, 'author']); // "$.store.book[0].author"


// Concat
let obj1 = [ { t: 1, d: 'AAA', v: 'yes' },
         { t: 2, d: 'BBB', v: 'yes' }]

let obj2 = [ { t: 3, d: 'CCC', v: 'yes' },
        { t: 4, d: 'DDD', v: 'yes' }]


let obj3 = obj1.concat(obj2);
console.log(JSON.stringify(obj3));