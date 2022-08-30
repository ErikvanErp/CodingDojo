nums = [1, 2, 3, 4, 5, 6, 7]
console.log(nums.sort((a,b) => a-b));  
console.log(nums.map( (x, i) => x**(i+1) ));  
console.log(nums.map( (x,i,arr) => x + arr[i+1])
                .filter((x,i,arr) => !(i == arr.length - 1)))
console.log(nums.reduce((x,y) => x * y, 2))
  