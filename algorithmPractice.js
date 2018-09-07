// isPrime(n)
// isPrime(10) => false
// isPrime(7) => true
// isPrime(257) => true
function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
     return false;
    }
    else
      divisor++;
  }
  return true;
}

// reverseString(str)
// reverseString("cat") => "tac"
// reverseString("couch") => "hcuoc"
// reverseString("break") => "kaerb"

// recursive
function reverse (str) {
  if (str === "") {
      return "";
  } else {
      return reverse(str.substr(1)) + str.charAt(0);
  }
}

// non-recursive
function reverse(str){
var rtnStr = [];
if(!str || typeof str != 'string' || str.length < 2 ) return str;

for(var i = str.length-1; i>=0;i--){
  rtnStr.push(str[i]);
}
return rtnStr.join('');
}

// isPalindrome(str)
// isPalindrome("racecar") => true
// isPalindrome("cat") => false
// isPalindrome("madam") => true

function isPalindrome(str){
  var i, len = str.length;
  for(i = 0; i < len / 2; i++){
    if (str[i]!== str[len - 1 - i])
       return false;
  }
  return true;
}

// removeDuplicates(arr)
// removeDuplicates([1,1,2,4,3,1,6,3]) => [1, 2, 4, 3, 6]
// removeDuplicates([2, 2, 2, 2, 1]) => [2, 1]

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
