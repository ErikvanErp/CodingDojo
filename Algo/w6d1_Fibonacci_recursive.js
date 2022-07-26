// Memoization in recursion

// Without the memo, 
// the branching (2 calls) at each recursion results in an exponentially growing call stack

// The reason the memo works is that at each call to Fibonacci
// a pointer to the SAME memo is passed around
// As soon as memo contains the return value of Fibonacci(n), 
// this function will not be called again with argument n

function Fibonacci(n, memo={}){
    if (n == 0 || n==1){
        return n;
    }
    
    if (n in memo){
        return memo[n];
    }
    else {
        memo[n] = Fibonacci(n - 1, memo) + Fibonacci(n - 2, memo); 
        return memo[n];
    }
}

console.log(Fibonacci(100))
