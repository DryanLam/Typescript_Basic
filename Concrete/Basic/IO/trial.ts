let obj1 = [ { t: 1, d: 'AAA', v: 'yes' },
         { t: 2, d: 'BBB', v: 'yes' }]

let obj2 = [ { t: 3, d: 'CCC', v: 'yes' },
        { t: 4, d: 'DDD', v: 'yes' }]


let obj3 = obj1.concat(obj2);
console.log(JSON.stringify(obj3));