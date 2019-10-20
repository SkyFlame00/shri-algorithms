function checkParenthesesBalance(str) {
  const arr = str.split('');
  const stack = [];
  const opening = ['(', '[', '{'];
  const closing = [')', ']', '}'];

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    const oIdx = opening.findIndex(par => par === char);
    const cIdx = closing.findIndex(par => par === char);

    if (oIdx > -1) {
      stack.push(char);
      continue;
    }

    if (cIdx > -1 && stack.length === 0) return false;

    const lastPar = stack.pop();
    const lastParIdx = opening.findIndex(par => par === lastPar);

    if (cIdx !== lastParIdx) return false;
  }

  if (stack.length > 0) return false;

  return true;
}

console.log(checkParenthesesBalance('()(){]]['));
console.log(checkParenthesesBalance('[]{}()'));
console.log(checkParenthesesBalance('(){[[]]}'));
console.log(checkParenthesesBalance('([)]'));
console.log(checkParenthesesBalance('{}}'));
console.log(checkParenthesesBalance('('));
console.log(checkParenthesesBalance(')'));
console.log(checkParenthesesBalance('}'));
console.log(checkParenthesesBalance('{}'));