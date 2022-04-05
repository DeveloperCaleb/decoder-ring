// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, subAlphabet, encode = true) {
    // your solution code here
    //if the sub alphabet is missing or the length is not exactly 26 return false.
    if (!subAlphabet || subAlphabet.length !== 26) return false;

    let substitutionString = ""; //return string
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split(""); //turns the alphabet into an array
    const subAlphabetArray = subAlphabet.split(""); //turns the subAlphabet into an array
    //if every character of the subAlphabet is not unique return false
    for (let j = 0; j < subAlphabetArray.length - 1; j++) {
      const sortedSubAlphabetArray = subAlphabet.split("").sort();
      if (sortedSubAlphabetArray[j] == sortedSubAlphabetArray[j + 1]) {
        return false;
      }
    }

    //loop through the array
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        //if the charcter in the string is a space add a space to the string
        if (input.charCodeAt(i) == 32) {
          substitutionString += input[i];
        } else {
          //find the index of the chracter in the alphabetArray that is the same as the current character of the string
          const alphaIndex = alphabetArray.findIndex(
            (index) => index == input[i].toLowerCase()
          );

          //add the character of the subAlphaArray at the same index as the alphaIndex to the return string
          substitutionString += subAlphabetArray[alphaIndex];
        }
      }
      return substitutionString;
    }
    if (!encode) {
      //if the charcter in the string is a space add a space to the string
      for (let i = 0; i < input.length; i++) {
        if (input.charCodeAt(i) == 32) {
          substitutionString += input[i];
        } else {
          //find the index of the character in the subAlphabetArray that is the same as the current character of the string
          const subAlphaIndex = subAlphabetArray.findIndex(
            (index) => index == input[i].toLowerCase()
          );
          //add the character of the alphaArray at the same index as the subAlphaIndex to the return string
          substitutionString += alphabetArray[subAlphaIndex];
        }
      }
      return substitutionString;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
