// pages is an ordered array of integers
// they are pages in a book at which a term appears for indexing purposes
// turn 1, 2, 3, 5, 8, 9, into 1-3, 5, 8-9
// output is a string
// separators are comma-space
// pages is not empty

function bookIndex(pages) {
    var output = "";
    var sequence = [];
    var sequence_list = [];
  
    for(let i = 0; i < pages.length; i++){
      if(sequence.length != 0 && sequence[sequence.length - 1] + 1 != pages[i]){
        sequence_list.push(sequence);
        sequence = [];
      }
      sequence.push(pages[i]);
    }
    sequence_list.push(sequence);

    for(let j=0; j < sequence_list.length; j++){
      if (sequence_list[j].length == 1){
        output += sequence_list[j];
      }
      else{
        output += sequence_list[j][0] + "-" + sequence_list[j][sequence_list[j].length - 1];
      }

      if (j != sequence_list.length - 1){
        output += ", ";
      }
    }
    
    return output;
  
  }

console.log(bookIndex([8, 11, 12, 13, 17, 19, 26, 27]))
console.log(bookIndex([8, 11, 12, 13, 17, 19, 26, 27, 31, 99]))
console.log(bookIndex([8, 9]))
console.log(bookIndex([8]))
console.log(bookIndex([8, 9, 10, 11, 12]))