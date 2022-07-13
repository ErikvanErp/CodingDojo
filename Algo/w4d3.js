// pages is an ordered array of integers
// they are pages in a book at which a term appears for indexing purposes
// turn 1, 2, 3, 5, 8, 9, into 1-3, 5, 8-9
// output is a string
// separators ar comma-space
// pages is not empty
function bookIndex(pages) {

    let newarr = [];
    let output = [];
  
    for(let i = 0; i < pages.length; i++){
  
      if(newarr.length == 0){
  
        newarr.push(pages[i]);
  
      }else if(newarr[newarr.length - 1] + 1 == pages[i]){
  
        newarr.push(pages[i]);
  
      }else{
  
        output.push(newarr);
        newarr = [pages[i]];
  
      }
    }
  
    output.push(newarr);
    return output;
  
  }

console.log(bookIndex([8, 11, 12, 13, 17, 19, 26, 27]))
console.log(bookIndex([8, 9]))