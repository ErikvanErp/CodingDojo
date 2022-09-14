
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";


function rehash(s) {
    let frequencies = hashToFrequencies(s);
    return frequenciesToHash(frequencies);
}

function isLetter(s){
    return s.match("[a-zA-Z]+$");
}

function hashToFrequencies(s){
    const frequencies = {};
    let letter = "";
    let num = "";
    for (let i = 0; i < s.length; i++){
        if( isLetter(s[i])){
            letter = s[i];
            num = "";
            if (!(s[i] in frequencies)){
                frequencies[letter] = 0;
            } 
        } else {
            num += s[i];
            if(i == s.length - 1 || isLetter(s[i + 1])){
                frequencies[letter] += parseInt(num);
            }
        }
    }
    return frequencies;
}

function frequenciesToHash(f){
    let output = "";
    const items =  Object.entries(f).sort();
    for ([key, val] of items){
        output += key + val;
    }
    return output;
}

function frequenciesToHash2(f){
    return Object.entries(f).sort().reduce((prev, [key, val]) => prev + key + val, "");
}

console.log(rehash(str1));


