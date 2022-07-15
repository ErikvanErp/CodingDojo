// isanagram determines whether string_a is an anagram of string_b
// i.e., both strings contain the same characters with the same multiplicities
// Spaces are ignored, but other special characters are not; 
// The comparison is not case sensitive
function isAnagram(string_a, string_b) {
  let frequencies_a = frequenceTable(string_a.toLowerCase())
  let frequencies_b = frequenceTable(string_b.toLowerCase())

  if (Object.keys(ferquencies_a).length != Object.keys(frequencies_b).length) {
    return false;
  }

  for (const character in frequencies_a) {
    if (frequencies_a[character] != frequencies_b[character]) {
      return false;
    }
  }
  return True
}

// Count how often each character occurs in a given array
// Do not count spaces
function frequenceTable(arr) {
  var frequencies = {}
  for (var i = 0; i < arr.length; i++) {
    if (frequencies[arr[i]]) {
      frequencies[arr[i]]++;
    }
    else if (arr[i] != " "){
      frequencies[arr[i]] = 1;
    }
  }
  return frequencies
}

