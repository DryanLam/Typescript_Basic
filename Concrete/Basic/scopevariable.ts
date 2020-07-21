// i IS NOT known here
// j IS NOT known here
// k IS known here, but undefined
// l IS NOT known here

const arr = [1,2,3,4];

function loop(arr: any) {
    // var i,k know here but undefined
    // let j,l not know
    // k IS known here, but has a value only the second time loop is called

    for( var i = 0; i < arr.length; i++ ) {
        // var i has value
        // let j,l IS NOT known here
        // k IS known here, but has a value only the second time loop is called
    };

    // var i IS known here, and has a value
    // let j,l IS NOT known here
    // k IS known here, but has a value only the second time loop is called

    for( let j = 0; j < arr.length; j++ ) {
        // var i IS known here, and has a value
        // let j IS known here, and has a value
        // k IS known here, but has a value only the second time loop is called
        // l IS NOT known here
    };

    // var i IS known here, and has a value
    // let j IS NOT known here
    // var k IS known here, but has a value only the second time loop is called
    // let l IS NOT known here
}

loop(arr);

for( var k = 0; k < arr.length; k++ ) {
    // i,j inside function IS NOT known here
    // k IS , has a value
    // let l IS NOT known here
};

for( let l = 0; l < arr.length; l++ ) {
    // var i IS NOT known here
    // let j IS NOT known here
    // var k IS known here, and has a value
    // let l IS known here, and has a value
};

loop([1,2,3,4]);

// var i IS NOT known here
// let j IS NOT known here
// var k IS known here, and has a value
// let l IS NOT known here

//-----------

console.log(i);

var i = 'i';
var j = 'j';

console.log(i);

function trialScope(){
    console.log(i);

    var k = 'k';
}

trialScope();
// console.log(k);