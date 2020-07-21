let num_01 = 6.4321125;
console.log(num_01.toPrecision(1));
console.log(num_01.toPrecision(3));

let num_02 = 3;
console.log(num_02.toExponential(2));

// Foreach
[1,2,3].forEach(function(el){console.log(el)});

let arrTest_01 = [9,6,1,7,8];
arrTest_01.forEach((el) => {console.log(el)});

console.log(arrTest_01);
arrTest_01.sort();
console.log(arrTest_01);
arrTest_01.reverse();
console.log(arrTest_01);


arrTest_01.forEach((item, index) => {
    console.log(`Item: ${item} - Index: ${index}`)
});

arrTest_01.forEach((item, index, arr) => {
    console.log(`Item: ${item} - Index: ${index} - Arr: ${arr}`)
});

// Foreach condition
arrTest_01.forEach((item, index) => {
    if(index >= 2){
        console.log(`Item: ${item} - Index: ${index}`)
        return;
    }
});

// For of
console.log('---------------- For of');
for (let i of arrTest_01){
    console.log(i);
    if(i <= 5){
        break;
    }
}

// For in - Restrict to use this
console.log('---------------- For in');
for (let x in arrTest_01){
    console.log(x);
    // Can NOT use equal in 'for in'
    // if(x <= 0){
        //     break;
        // }
    }
    
    // Some - Return true if the array satisfy the testing function
    function isPositive(el, idx){
        return el > 0;
    }
    
console.log('---------------- some');
console.log(arrTest_01.some(isPositive));

