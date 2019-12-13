var addBinary = function(a, b) {
  let ans = [], carry = 0, len = Math.max(a.length, b.length);
  for (let i = 0; i < len; i++) {
      let c1 = a[a.length - 1 - i] || 0;
      let c2 = b[b.length - 1 - i] || 0;
      let sum = +c1 + +c2 + carry;
      if (sum > 1) carry = 1;
      else carry = 0;
      ans.push(sum % 2);
  }
  if (carry > 0) ans.push(carry % 2);
  return ans.reverse().join('');
};

console.log(addBinary('11', '1'))