const repeatString = function(s, x) {
  if (x <= 0) return "error";
  let string = "";
  for (let i = 0; i <= x; i++) {
    string += s;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
