// binaryStringExpansion 
// takes a string of 0s and 1s with 0 or more ? inserted
// return an array with all strings that match the pattern
// i.e. where ? could be either 0 or 1 

function binaryStringExpansion(input, resultsArr = []){
    for( var i = 0; i<input.length; i++ ){
        if(input[i] === "?"){
            break
        }
    }

    if ( i >= input.length ){
        resultsArr.push(input);
        return resultsArr;
    }

    // branch for 0
    let input0 = input.slice(0,i) + 0 + input.slice(i+1)
    binaryStringExpansion(input0, resultsArr);

    // branch for 1
    let input1 = input.slice(0,i) + 1 + input.slice(i+1)
    binaryStringExpansion(input1, resultsArr);

    return resultsArr;
}