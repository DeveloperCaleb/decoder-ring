// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let polybiusString = ""; //The encoded or decoded string to be returned

    //Square grid array, array indexs will be used to find x, y coordinates
    let square = [
      ["A", "B", "C", "D", "E"],
      ["F", "G", "H", "I/J", "K"],
      ["L", "M", "N", "O", "P"],
      ["Q", "R", "S", "T", "U"],
      ["V", "W", "X", "Y", "Z"],
    ];
    //let square = {A: 11}, try it out?

    //if encode is true use this code
    if (encode) {
      //loop through each letter of the input string
      for (let i = 0; i < input.length; i++) {
        let letter = input[i].toUpperCase();
        //push spaces to the string
        if (input.charCodeAt(i) == 32) {
          polybiusString += input[i];
          //account for I and J being the same coordinate
        } else if (letter == "I" || letter == "J") {
          polybiusString += 42;
          //find the coordinate
        } else {
          let column = 0;
          let row = 0;
          //return the index of the row that has an array object that is the same as the letter
          row = square.findIndex((row) =>
            row.find((rowNumber) => rowNumber == letter)
          );
          //On the found row find the index number of the column whose array object is equal to the letter
          column = square[row].findIndex(
            (columnNumber) => columnNumber == letter
          );
          //Add 1 as the return string should not include 0
          let xVar = `${column + 1}`;
          let yVar = `${row + 1}`;
          //push the combined coordinate to the return string
          polybiusString += `${xVar}${yVar}`;
        }
      }
      return polybiusString;
    }

    //if encode is false use this code
    if (!encode) {
      //if the length of the string excluding spaces is odd return false
      if (input.replace(/ /g, "").length % 2 !== 0) return false;
      //incremented by 2 since each coordinate is two numbers
      for (let i = 0; i < input.length; i += 2) {
        //push spaces to the return string, increment i by 1 since there is no yVar for a space
        if (input.charCodeAt(i) == 32) {
          polybiusString += input[i];
          i++;
        }
        /*vars have a -1 as encoded messages are not set to return a coordinate of 0. 
        However, 0 index is used.*/
        let xVar = input[i] - 1;
        let yVar = input[i + 1] - 1;
        //adds the letter at the coordinate to the return string
        polybiusString += square[yVar][xVar];
      }
      return polybiusString.toLowerCase();
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
