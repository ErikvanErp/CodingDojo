Number.prototype.isPrime = function() {
    for( let i=2; i * i <= this; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

let { performance } = require('perf_hooks');
let start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is not considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
    primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
// The 1,000,000th prime number is 15476717
// This took 198624.390625 milliseconds to run


// iterative
let { performance } = require('perf_hooks');
start = performance.now();
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
console.log(`The 100th Fibonacci number is ${iFib(100)}`);
console.log(`Iteratively, this took ${performance.now() - start} milliseconds to run`);
// The 100th Fibonacci number is 354224848179262000000
// Iteratively, this took 1.3692499995231628 milliseconds to run
// recursivly, without memoization, it did not complete in 12 minutes

let { performance } = require('perf_hooks');
start = performance.now();
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(`String reversal took  ${performance.now() - start} milliseconds to run`);
console.log(reversed1);
// the performance is not constant:
// String reversal took  0.03654199838638306 milliseconds to run
// String reversal took  0.03966701030731201 milliseconds to run

let perf = require('perf_hooks').performance;
let begin = perf.now();
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed2 = myReverse(story);
let end = perf.now();
console.log(`String reversal took  ${end - begin} milliseconds to run`);
console.log(reversed2);
function myReverse(string) {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--){
        newString += string[i];
    }
    return newString;
}
// only slightly faster
// String reversal took  0.029292002320289612 milliseconds to run
