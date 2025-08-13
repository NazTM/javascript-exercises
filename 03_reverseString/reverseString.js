const reverseString = function(s) {
  let arr = s.split("");
  let string = "";
  for (let i = arr.length - 1; i >= 0; i--){
    string += arr[i];
  }
  return string;
};

// Do not edit below this line
module.exports = reverseString;
