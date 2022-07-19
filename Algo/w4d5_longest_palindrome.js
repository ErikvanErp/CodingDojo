// longestPalindrome is a function that accepts one parameter (a string). 
// Return the longest substring that is a palindrome 
// - i.e., that reads the same forwards and backwards. 
// All characters (including spaces) are treated the same.

// problem with the solution below: it is O(n^3), and basically brute force.
// There is an O(n^2) solution that does not need to call isPalindrome

function longestPalindrome(input){
    if (input.length == 0){
        return "";
    }
    var longest_palindrome = input[0];
    var teststr = "";

    for(var len=input.length; len > longest_palindrome.length; len--){
        for (var i=0; i <= input.length - len; i++){
            teststr = input.substr(i,len);
            if(isPalindrome(teststr)){
                longest_palindrome = teststr;
                break;
            }
        }

    }
    return longest_palindrome

}

function isPalindrome(str){
    for(var i=0; i < str.length / 2; i++){
        if(str[i] != str[str.length - 1 - i]){
            return false;
        }
    }
    return true
}


console.log(longestPalindrome("The racecar exploded unexpectedly, noooo!"))
// console.log(isPalindrome("ss"))

