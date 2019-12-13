/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let str = s.split('').filter(s => s != '');
  let arr = [], num = [];
  
  for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
          case '+':
          case '-':
          case '*':
          case '/':
              if (num.length > 0) {
                  arr.push(num.join(''));
                  num = [];
              };
              arr.push(str[i]);
              break;
          default:
              num.push(str[i]);
      }
  }
  
  if (num.length > 0) arr.push(num.join(''));
  if (arr.length === 1) return arr[0];

  console.log(arr)
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
          case '*':
              newArr[newArr.length - 1] = (+newArr[newArr.length - 1] * +arr[i + 1]);
              i += 1;
              break;
          case '/':
              newArr[newArr.length - 1] = Math.trunc(+newArr[newArr.length - 1] / +arr[i + 1]);
              i += 1;
              break;
          default:
              newArr.push(arr[i]);
      }
  }
  console.log(newArr)
  let ress = [];
  for (let i = 0; i < newArr.length; i++) {
      switch (newArr[i]) {
          case '+':
              ress[ress.length - 1] = (+ress[ress.length - 1] + +newArr[i + 1]);
              i += 1;
              break;
          case '-':
              ress[ress.length - 1] = (+ress[ress.length - 1] - +newArr[i + 1]);
              i += 1;
              break;
          default:
              ress.push(newArr[i]);
      }
  }
  return ress[ress.length - 1];
};

// console.log(calculate("3+2*2"))
// console.log(calculate(" 3 / 2 "))
// console.log(calculate(" 3+5 / 2 "))
// console.log(calculate('0'))
console.log(calculate('1 + 1'))