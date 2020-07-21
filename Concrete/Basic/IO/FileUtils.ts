import * as fs from "fs";
// Refer https://github.com/Microsoft/TypeScript-Node-Starter

// // Read path from root
// fs.readFile("temp.txt", function(err, data) {
//     console.log(data.toString());
//     console.log('------');

// });

// // Write file
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

let prjPath = process.cwd();
let filePathFolder = __dirname;
let filePath = __filename;

console.log(prjPath);
console.log(filePathFolder);
console.log(filePath);

// fs.readFile(path.resolve(__dirname, 'settings.json'), 'UTF-8', callback);
function readFromProject() {
    fs.readFile(process.cwd() + "/temp.txt", function (err, data) {
        if (err)
            console.log(err)
        else
            console.log(data.toString());
    });
}

// Fail
// let readData = async () => {
//     var results: any;
//     results = fs.readFile(__dirname + "/data.json", 'utf8', (err, data) => {
//         if (err)
//             console.log(err)
//         else
//             // console.log(data.toString());
//             data.toString();
//     });
// }

// Cool
// var obj = JSON.parse(fs.readFileSync(__dirname + "/data.json", 'utf8'));
// console.log(obj.members);


// Cast JSON
const readJson = ():JSON => {
    return JSON.parse(fs.readFileSync(__dirname + "/data.json", 'utf8'));
}

let o1 = readJson();
console.log(o1['members'][0]);

// Without casting
const readJsonFile = () => {
    return JSON.parse(fs.readFileSync(__dirname + "/data.json", 'utf8'));
}
let o2 = readJsonFile();
console.log(o2.members[0]);




