// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope


  /*const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const shiftedAlphabet = "";
 function caesar2(input, shift, encode = true) {
  for(let i = 0; i < alphabet.length; i++) {
    const index = (i + n) % alphabet.length;
    shiftedAlphabet += alphabet[index];
  }
  //for 
  let newINdex = alphabet.indexOf(input[i])
let output += shiftedAlphabet[newIndex];
 }*/


  function caesar(input, shift, encode = true) {
    // your solution code here
    let shiftedString = "";

    if (shift == 0 || shift > 25 || shift < -25) return false;

    if (encode) {
      for (let i = 0; i < input.length; i++) {
        const utfCode = input.toLowerCase().charCodeAt(i);
        if (utfCode > 96 && utfCode < 123) {
          const shiftedCode = utfCode + shift;
          if (shiftedCode > 122) {
            const newCode = 96 + (shiftedCode - 122);
            shiftedString += String.fromCharCode(newCode);
          } else if (shiftedCode < 97) {
            const newCode = 123 - (97 - shiftedCode);
            shiftedString += String.fromCharCode(newCode);
          } else shiftedString += String.fromCharCode(shiftedCode);
        } else shiftedString += input[i];
      }
      return shiftedString;
    }

    if (!encode) {
      for (let i = 0; i < input.length; i++) {
        const utfCode = input.toLowerCase().charCodeAt(i);
        if (utfCode > 96 && utfCode < 123) {
          const shiftedCode = utfCode - shift;
          if (shiftedCode > 122) {
            const newCode = 96 + (shiftedCode - 122);
            shiftedString += String.fromCharCode(newCode);
          } else if (shiftedCode < 97) {
            const newCode = 123 - (97 - shiftedCode);
            shiftedString += String.fromCharCode(newCode);
          } else shiftedString += String.fromCharCode(shiftedCode);
        } else shiftedString += input[i];
      }
      return shiftedString;
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
