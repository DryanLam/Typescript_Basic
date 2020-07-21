import * as fs from "fs";

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

//
let a: any = {"ID": "abc", "NAME":"bcd"};
let b: any = {"NAME":"bcd","ID": "abc"};

console.log(a===b);