/*
HOW TO USE
    1. npm install
*/

/*
    Shift + Cmd + K          : Delete line
    Opt + up/down            : Move line
    Opt + Shift + up/down    : Duplicate line

*/

/*
Compile:
    tsc --target ES5
*/

/*
Save lib to package.json
    Install with: npm install <packagename> --save
    OR
    Install with: npm install <packagename> --save-dev
*/

/*
THEN promises.
    RETURN to next function use the upward data
*/

/*
Namespace:
    + Must use the namespace keyword & export keyword
    + To use namespace >> ///<reference path="path to namespace file" />
    + Compile option: --outFile
    + Must compile to js before executing
    Ex:
        sc --outFile File.js File1.ts File2.ts File3.ts.. FileN.ts

Module:
    + Use export keyword to expose module functionalities
    + Compile option: --module
    + Able to directly execute
    Note: At runtime the module loader is responsible for locating and executing all dependencies of a module before executing it. 
        In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module.
*/

