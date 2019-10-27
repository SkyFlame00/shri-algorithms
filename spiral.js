function getSpiral(n) {
  const matrix = [];
  let c = 1;

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(c++);
    }
    matrix.push(row);
  }

  let midRow, midCol;

  if (n % 2 === 0) {
    midRow = n/2;
    midCol = n/2 - 1;
  } else {
    midRow = midCol = Math.floor(n/2);
  }

  let rowStart = colStart = curCol = curRow = 0;
  let rowEnd = colEnd = n - 1;
  let direction = 'right';
  let view = 'col';
  const spiral = [];

  while (curRow !== midRow || curCol !== midCol) {
    spiral.push(matrix[curRow][curCol]);
    
    if (view === 'col' && direction === 'right') {
      if (curCol === colEnd) {
        view = 'row';
        direction = 'down';
        rowStart++;
        curRow++;
      } else { curCol++; } 
      continue;
    }

    if (view === 'row' && direction === 'down') {
      if (curRow === rowEnd) {
        view = 'col';
        direction = 'left';
        colEnd--;
        curCol--;
      } else { curRow++; }
      continue;
    }

    if (view === 'col' && direction === 'left') {
      if (curCol === colStart) {
        view = 'row';
        direction = 'top';
        rowEnd--;
        curRow--;
      } else { curCol--; }
      continue;
    }

    if (view === 'row' && direction === 'top') {
      if (curRow === rowStart) {
        view = 'col';
        direction = 'right';
        colStart++;
        curCol++;
      } else { curRow--; }
    }
  }
  
  spiral.push(matrix[midRow][midCol]);

  return spiral;
}

console.log(getSpiral(3));
console.log(getSpiral(4));
console.log(getSpiral(5));