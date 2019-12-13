/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let strArr = s.split('')
      .filter(c => ![' ', '(', ')'].includes(c));
  
  if (s.length === 1) return s;
  
  let symbols = [], num = [];
  console.log(strArr)
  for (let i = 0; i < strArr.length; i++) {
      switch (strArr[i]) {
          case '+':
          case '-':
              if (num.length > 0) {
                  symbols.push(num.join(''));
                  num = [];
              }
              symbols.push(strArr[i]);
              break;
          default:
              num.push(strArr[i]);
      }
  }
  
  if (num.length > 0) symbols.push(num.join(''));
  console.log(symbols)
  let ans = +symbols[0];
  
  for (let i = 1; i < symbols.length; i += 2) {
      switch (symbols[i]) {
          case '+':
              ans += +symbols[i + 1];
              break;
          case '-':
              ans -= +symbols[i + 1];
              break;
      }
  }
  
  return ans;
};

console.log(calculate('1 + 1'));
// console.log(calculate(" 2-1 + 2 "));
// console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
