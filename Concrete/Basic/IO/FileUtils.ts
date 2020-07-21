import * as fs from "fs";
// Refer https://github.com/Microsoft/TypeScript-Node-Starter

// Read path from root
fs.readFile("temp.txt", function(err, data) {
    console.log(data.toString());
    console.log('------');
    
});

// Write file
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});