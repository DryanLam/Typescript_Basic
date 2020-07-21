import fetch from "node-fetch";


/*
THEN keyword
    RETURN to continue transfer data from current then block to the next for handling the data
*/

function fetchAPI() {
    // const api = 'http://dummy.restapiexample.com/api/v1/employees'
    const api = 'https://randomuser.me/api/?results=10'
    return fetch(api)
        .then(resp => {
            if (resp.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log(resp.status <= 400);
            return resp.json()
        })
        .then(data => { console.log(data.results); })
        .catch(error => { console.log(error); });
}


/*
ASYNC/AWAIT keyword
    ASYNC 
        + return a promise >> Use then to get result
        + use Promise.all([(function),(function)]) to run as asynchronous but still keep synchronous
*/

//-----------
async function fAwesomeFunction() {
    setTimeout(() => {}, 100, "A description");
}

const result_01 = fAwesomeFunction();
console.log(result_01); // returns Promise { undefined }

//-----------
function normalFunction(){
    setTimeout(() => {}, 100);
    console.log(1);
    return 1;
}
async function ndFunction(x: number) {
    setTimeout(() => {}, 100);
    console.log(2);
    return 2 + x;
}

async function rdFunction(x: number) {
    setTimeout(() => {}, 100);
    console.log(3);
    return 3 + x;
}

const fourthFunction = async (x:number) => {
    console.log(4);
    return 4 + x;
}

async function myAwesomeFunction() {
    let startingValue = normalFunction();
    let firstResult = await ndFunction(startingValue);
    let secondResult = await rdFunction(firstResult);
    let finalResult = await fourthFunction(secondResult);
    return finalResult;
}

// let promise = myAwesomeFunction();
// console.log(promise); // Promise pending
// promise.then(result => console.log(result)); // 10
// Promise.all([normalFunction(),rdFunction(1),ndFunction(1),fourthFunction(1)]); // Always 1,3,2,4

async function myAsyncFunction(input: number) {
    // the internal part of our async function
    // will still be executed synchronously thanks
    // to the await keyword
    let result = await setTimeout(() => {
        console.log("Function: %d executed", input);
    }, 1000 * input);
}

Promise.all([ myAsyncFunction(2), myAsyncFunction(3), myAsyncFunction(1)]); // Always 1,2,3


// interface Employee {
//     id: number
//     employee_name: string
//     employee_salary: number
//     employee_age: number
//     profile_image: string
// }
// const fetchEmployees = async (): Promise<Array<Employee> | string> => {
//     const api = 'http://dummy.restapiexample.com/api/v1/employees'
//     try {
//         const response = await fetch(api)
//         const { data } = await response.json()
//         return data
//     } catch (error) {
//         if (error) {
//             return error.message
//         }
//     }
// }

// let res = fetchEmployees();
// console.log(res);


