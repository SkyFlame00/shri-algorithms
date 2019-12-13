function sudoku2(grid) {
  for (let i = 0; i < grid.length; i++) {
    const checked = {};
      
    for (let j = 0; j < grid[0].length; j++) {
			const char = grid[i][j];

			if (char === '.') continue;

			if (checked[char]) {
				return false;
			} else {
				checked[char] = true;
			}
    }
  }
  
  for (let j = 0; j < grid[0].length; j++) {
      const checked = {};
      
      for (let i = 0; i < grid.length; i++) {
		const char = grid[i][j];

		if (char === '.') continue;

		if (checked[char]) {
			return false;
		} else {
			checked[char] = true;
		}
      }
  }
  
  let upperBoundX = 0,
      upperBoundY = 0,
      lowerBoundX = 2,
      lowerBoundY = 2;
  
  while(lowerBoundX < grid.length || lowerBoundY < grid.length) {
    if (lowerBoundX >= grid.length && lowerBoundY + 3 >= grid.length) {
			break;
    }
      
      if (lowerBoundX >= grid.length) {
          upperBoundX = 0;
          lowerBoundX = 2;
          upperBoundY += 3;
          lowerBoundY += 3;
      }
      
	  const checked = {};
	  
	  // const arr = grid.slice(upperBoundY, lowerBoundY + 1);

		// arr.forEach((row, i) => {
		// 	arr[i] = arr[i].slice(upperBoundX, lowerBoundX + 1);
		// })

		// console.log(arr)
		
      
      for (let i = upperBoundY; i <= lowerBoundY; i++) {
          for (let j = upperBoundX; j <= lowerBoundX; j++) {
					const char = grid[i][j];

				if (char === '.') continue;

				if (checked[char]) {
					return false;
				} else {
					checked[char] = true;
				}
      }
    }
      
    upperBoundX += 3;
    lowerBoundX += 3;
  }

  return true;
}



// const arr = [[".",".",".","1","4",".",".","2","."], 
// [".",".","6",".",".",".",".",".","."], 
// [".",".",".",".",".",".",".",".","."], 
// [".",".","1",".",".",".",".",".","."], 
// [".","6","7",".",".",".",".",".","9"], 
// [".",".",".",".",".",".","8","1","."], 
// [".","3",".",".",".",".",".",".","6"], 
// [".",".",".",".",".","7",".",".","."], 
// [".",".",".","5",".",".",".","7","."]]

// const arr = [
// 	[".",".",".",".",".",".","5",".","."], 
// 	[".",".",".",".",".",".",".",".","."], 
// 	[".",".",".",".",".",".",".",".","."], 
// 	["9","3",".",".","2",".","4",".","."], 
// 	[".",".","7",".",".",".","3",".","."], 
// 	[".",".",".",".",".",".",".",".","."], 
// 	[".",".",".","3","4",".",".",".","."], 
// 	[".",".",".",".",".","3",".",".","."], 
// 	[".",".",".",".",".","5","2",".","."]
// ];

// const arr = [
// 	[".",".",".",".",".",".",".",".","."], 
// 	["4",".",".",".",".",".",".",".","."], 
// 	[".",".",".",".",".",".","6",".","."], 
// 	[".",".",".","3","8",".",".",".","."], 
// 	[".","5",".",".",".","6",".",".","1"], 
// 	["8",".",".",".",".",".",".","6","."], 
// 	[".",".",".",".",".",".",".",".","."], 
// 	[".",".","7",".","9",".",".",".","."], 
// 	[".",".",".","6",".",".",".",".","."]
// ]

const arr = [
	[".","4",".",".",".",".",".",".","."], 
	[".",".","4",".",".",".",".",".","."], 
	[".",".",".","1",".",".","7",".","."], 
	[".",".",".",".",".",".",".",".","."], 
	[".",".",".","3",".",".",".","6","."], 
	[".",".",".",".",".","6",".","9","."], 
	[".",".",".",".","1",".",".",".","."], 
	[".",".",".",".",".",".","2",".","."], 
	[".",".",".","8",".",".",".",".","."]
]

const res = sudoku2(arr)

console.log(res)
