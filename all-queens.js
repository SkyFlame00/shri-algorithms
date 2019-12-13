function isAllowed(i, j, queens) {
  return !queens.some(({ i: iQ, j: jQ }) =>
    i === iQ || j === jQ || Math.abs(i - iQ) === Math.abs(j - jQ)
  );
}

function getAllQueensRaw(dim, i = 0, queens = [], combinations = []) {
  for (let j = 0; j < dim; j++) {
    if (!isAllowed(i, j, queens)) {
      continue;
    }

    if (i === dim - 1) {
      combinations.push([...queens, {i, j}]);
    } else {
      getAllQueensRaw(dim, i + 1, [...queens, {i, j}], combinations);
    }
  }

  return combinations;
}

function getAllQueens(dim) {
  const allQueens = getAllQueensRaw(dim);
  allQueens.forEach(board => board.sort(({ i1 }, { i2 }) => i1 - i2));

  return allQueens.map(board => board.map(queen => {
    const arr = [];
    for (let i = 0; i < dim; i++)
      arr.push(i === queen.j ? 'Q' : '.');
    return arr.join('');
  }));;
}

console.log(getAllQueens(8));

