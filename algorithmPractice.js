// isPrime(n)
// isPrime(10) => false
// isPrime(7) => true
// isPrime(257) => true

function isPrime(n) {
  if(n < 2) return false;

  for(let i = 2; i < n; i++) {
    if(n % i === 0) return false;
  }

  return true;
}

//my solution

// function isPrime(n){
//   var divisor = 2;
//
//   while (n > divisor){
//     if(n % divisor == 0){
//      return false;
//     }
//       divisor++;
//   }
//   return true;
// }

// reverseString(str)
// reverseString("cat") => "tac"
// reverseString("couch") => "hcuoc"
// reverseString("break") => "kaerb"

// recursive

//"car"
//r
//ra
//rac


// recursive case: "" + reverse(characters from index 0 up until string length - 1)
// base step: "" => return "";

function reverseString(str) {
  if(!str.length) return str;

  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

function reverse (str) {
  if (str === "") {
      return "";
  } else {
    //"car"
    //"car".substr(1) => ("ar")
      return reverse(str.substr(1)) + str[0];
  }
}


// non-recursive

function reverseString(str) {
  let newStr = "";

  for(let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}


// isPalindrome(str)
// isPalindrome("racecar") => true
// isPalindrome("cat") => false
// isPalindrome("madam") => true
//isPalindrome('stella won no wallets'); // => true

function isPalindrome(str) {
  const newStr = str.split(" ").join("");
  const midPoint = Math.floor(str.length / 2);

  for(let i = 0; i < midPoint; i++) {
    if(str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

//racecar
// base step: if first letter is not equal to last one return false;
// recursive step: str.slice(1, str.length - 1)

function isPalindrome(str) {
  if(!str.length) return true;
  if(str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, str.length - 1));
}

function isPalindrome(str){
  //"racecar" = 7/ 2 = 3.5
  var i, len = str.length;
  for(i =0; i<len/2; i++){
    if (str[i]!== str[len -1 -i]) //7 - 1 - 3 = 3
       return false;
  }
  return true;
}

// removeDuplicates(arr)
// removeDuplicates([1,1,2,4,3,1,6,3]) => [1, 2, 4, 3, 6]
// removeDuplicates([undefined, 2, 2, 2, 1]) => [2, 1]

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function removeDuplicates(arr){
  var exists = {},
      outArr = [],
      elm;

  for(var i = 0; i< arr.length; i++){
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
    }
  }

  return outArr;
}

// Write a function `commonPrimeFactors` that takes in two numbers as arguments
// and returns an array of all prime factors that are common between the
// two numbers. A factor is a number that divides another number without
// resulting in a remainder.
//
// Examples:
//
// commonPrimeFactors(12, 50); // => [ 2 ]
// commonPrimeFactors(6, 24); // => [ 2, 3 ]
// commonPrimeFactors(11,22); // => [ 11 ]
// commonPrimeFactors(45, 60); // => [ 3, 5 ]


function commonPrimeFactors(num1, num2) {
  return [...Array(Math.min(num1, num2) + 1).keys()].slice(2).filter((elem) => {
    return num1 % elem === 0 && num2 % elem === 0 && isPrime(elem);
  });
}

// Write a function countRepeats(string) that takes in a string and returns the
// number of letters that appear more than once in the string. You may assume
// the string contains only lowercase letters. Count the number of letters that
// repeat, not the number of times they repeat in the string.
//
// Examples:
//
// countRepeats('alvin'); //=> 0
// countRepeats('aaaalvin'); //=> 1
// countRepeats('pops'); //=> 1
// countRepeats('mississippi'); //=> 3
// countRepeats('hellobootcampprep'); //=> 4

function countRepeats(str){
  let answer = 0
  const obj = {}
  for(let i = 0; i < str.length; i++){
    const char = obj[str[i]]
    if(!obj[char]){
      obj[char] = 1
    } else {
      obj[char] += 1
    }
  }
  for(const char in obj) {
    if (obj[char] > 1) answer += 1
  }
  return answer
}


// Write a function `reverseHipsterfy(sentence)` that takes in a sentence and removes
// all vowels, except the last vowels of every word.
//
// Examples:
//
// reverseHipsterfy("proper"); // => 'prper' => reporp
// reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
// reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
// reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
// reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
// reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
function searchWord(word){
  const vowels = [..."aeiou"];
  let bool = true
  for(let i = 0; i < word.length; i++){
    if(bool === true && vowels.includes(string[i]){
      bool = !bool
      return word.slice(0, i) + word.slice(i + 1)
    }
  }
}

function reverseHipsterfy(string) {
  return string.split(" ").map(word => searchWord(word)).join(" ")
}



function reverseHipsterfy(str) {
  return str.split(" ").map(ele => {
    return hipsterfy(ele);
  }).join(" ");
}

function hipsterfy(word) {
  let reversedWord = word.split("").reverse().join("");
  // reverseHipsterfy("proper"); //  reporp => 'prper'

  let isTheFirstTime = true;
  let newStr = "";
  const vowels = [..."aeiou"];

  for(let i = 0; i < reversedWord.length; i++) {
    const currentChar = reversedWord[i];

    if(isTheFirstTime && vowels.indexOf(currentChar) !== -1) {
      isTheFirstTime = false;
      newStr += currentChar;
    } else if(vowels.indexOf(currentChar) === -1){
      newStr += currentChar;
    }
  }

  return newStr.split("").reverse().join("");
}


// # Vigenere's Cipher is a tool for encrypting strings. We'll offset each character
// # according to a key sequence. For example, if we encrypt "bananasinpajamas" with the
// # key sequence [1, 2, 3], the result would be "ccqbpdtkqqcmbodt":
// #
// # Word:   b a n a n a s i n p a j a m a s
// # Keys:   1 2 3 1 2 3 1 2 3 1 2 3 1 2 3 1
// # Cipher: c c q b p d t k q q c m b o d t
// #
// # Note that offsets should wrap around the alphabet - offsetting 'z' by 1 should
// # produce 'a'
//
// # Write a method that takes a string and a key-sequence, returning
// # the encrypted word. Assume only lower-case letters are used.

//

function vigeneresCipher(string, keySeq){
  const alphabets = [..."abcdefghijklmnopqrstuvwxyz"];
  let encodedStr = "";

  for(let i = 0; i < string.length; i++){
    const indexOfLetter = alphabets.indexOf(string[i])
    const shiftBy = indexOfLetter + keySeq[i % keySeq.length];
    const newIndex = shiftBy % 26
    encodedStr += alphabets[newIndex]
  }
  return encodedStr
}

/* An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case. */

function isIsogram(str){
  var obj = {}
  var sanitizedStr = str.split(" ").join("").toLowerCase();
  for(let i = 0; i < sanitizedStr.length; i++){
    if(obj[sanitizedStr[i]]){
      obj[sanitizedStr[i]] = obj[sanitizedStr[i]] + 1
    }else {
      obj[sanitizedStr[i]] = 1
    }
  }
  var values = Object.values(obj)
  for(let i = 0; i < values.length - 1; i++){
    if(values[i] > 1){
      return false
    }
  }
   return true
}

function uni (arr) {
  var obj = new Object;
  for (let i = 0; i < arr.length; i++){
    obj[arr[i]] = "elmo"
  }
  return Object.keys(obj)
}
uni([1, 1, 3, 4, 4])


//log n steps
function step(n){
  for(let row = 0;row < n; row++){
    let holder = ""
    for(let col = 0; col < n; col++){
      if(col <= row){
        holder += '#'
      } else{
        holder += ' '
      }
    }
    console.log(holder)
  }
  return
}
