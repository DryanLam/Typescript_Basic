import {ZipCodeValidator as ZCV} from "./AllValidator";

let myValidator = new ZCV();
let isOK = myValidator.isAcceptable('abc');
console.log(isOK);


