function gcd(x, y){

    if (x % y == 0){
        return y
    } else if (y % x == 0) {
        return x
    }
    
    if (x > y){
        x = x % y
    } else {
        y = y % x
    }
    return gcd(x,y)
}

console.log(gcd(123456, 98674))
console.log(gcd(140, 43))