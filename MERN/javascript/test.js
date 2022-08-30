// here we have a function called "Outer"
const counter = (() => {
  let count = 0; 
  return () => {
    count++;
    return count;
  }
})();

console.log(counter());              
console.log(counter());              
console.log(counter());              
console.log(counter());              
    

