// 1.
function PrintOdds(max){
    for (var i=1; i < max + 1; i++){
        if (i % 2 == 1){
            console.log(i);
        }
    }
}
//PrintOdds(20);

// 2.
function DivisibleByThree(start){
    for (var i=start; i>=0; i--){
        if(i % 3 == 0){
            console.log(i);
        }
    }
}
//DivisibleByThree(100);

// 3.
function PrintSequence(start, length, difference){
    var num = start; 
    for(var i=0; i<length; i++){
        console.log(num);
        num += difference;
    }
}
//PrintSequence(4,6,-1.5);

// 4.
function SumAllIntegers(N){
    // return 1 + 2 + ... + N
    var sum = 0;
    for(var i = 1; i < N + 1; i++){
        sum += i;
    }
    return sum;
}
console.log("Sum: "+SumAllIntegers(100));

// 5.
function factorial(N){
    var product = 1;
    for(var i = 1; i < N + 1; i++){
        product *= i;
    }
    return product;
}
console.log("Factorial: "+factorial(12));
