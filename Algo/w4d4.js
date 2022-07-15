// determine whether string_a is an anagram of string_b
// i.e., both string contain the same characters (counting w multiplicity)
// spaces are not counted; 
// the function should not be case sensitive

function isAnagram(string_a, string_b) {

  // input sanitizing
  string_a = string_a.toLowerCase().replaceAll(" ", "");
  string_b = string_b.toLowerCase().replaceAll(" ", "");

  if(string_a.length != string_b.length){
    return false;
  }

  let object_a = {}
  let object_b = {}  

  for(var i = 0; i < string_a.length; i++){
    if(object_a[string_a[i]]){
      object_a[string_a[i]]++;
    }
    else{
      object_a[string_a[i]] = 1;
    }

    if(object_b[string_b[i]]){
      object_b[string_b[i]]++;
    }
    else{
      object_b[string_b[i]] = 1;
    }
  }

  // checks for same number of keys
  if(Object.keys(object_a).length != Object.keys(object_b).length){
    return false;
  }


  // checks characters and values
  for (const character in object_a){

    if(object_a[character] != object_b[character]){
      return false;
    }
  }

