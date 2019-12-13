/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(n1, n2) {
	const buffers = [];
  for (let i = n2.length - 1; i >= 0; i--) {
  	let num = [], buffer = 0, toPush = null;
    for (let j = n1.length - 1; j >= 0; j--) {
    	let res = n1[j] * n2[i] + +buffer;
      buffer = 0;
      if (res >= 10) {
      	[buffer, toPush] = res.toString();
        num.push(toPush);
      } else {
      	num.push(res.toString());
      }
    }
    if (buffer > 0) num.push(buffer);
    buffers.push(num.reverse().join(''));
  }
  
  let i = 0, num = [], buffer = 0;
  
  while (true) {
  	let digits = [];
    
  	for (let j = 0; j < buffers.length; j++) {
    	let len = buffers[j].length;
      let digit = buffers[j][len - 1 - i + j];
      if (digit)
      	digits.push(digit);
    }
    
    if (digits.length === 0) {
    	break;
    } else {
    	let sum = [...digits, buffer].reduce((sum, n) => +sum + +n);
      buffer = 0;
      
      if (sum >= 10) {
      	sum = sum.toString();
        let len = sum.length;
        let last = sum[len - 1];
        buffer = sum.substring(0, len - 1);
        num.push(last);
      } else {
      	num.push(sum.toString());
      }
    }
    
    i++;
  }
  
  if (buffer > 0) num.push(buffer);
  
    let str = num.reverse().join('');
    
  return str[0] === '0' && str.length > 1 ? '0' : str;
};