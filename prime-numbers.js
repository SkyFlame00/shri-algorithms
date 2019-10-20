function getPrimeNums(num) {
  if (num < 3) return [];

  const primeNums = [2];

  for (let i = 3; i < num; i++) {
    if (i % 2 === 0) continue;
    
    let isPrime = true;

    for (let j = 3; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) primeNums.push(i);
  }

  return primeNums;
}

console.log(getPrimeNums(1000))