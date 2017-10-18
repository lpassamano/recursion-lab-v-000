// Code your solution here!

function printString(myString) {
  // prints out all characters of a passed in string
  console.log(myString[0]);

  if (myString.length > 1) {
    myString = myString.substring(1, myString.length);
    printString(myString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length > 1) {
    var lastLetter = string.length - 1;
    return string[lastLetter] + reverseString(string.substring(0, lastLetter));
  } else if (string.length == 1); {
    return string[0];
  }
}
