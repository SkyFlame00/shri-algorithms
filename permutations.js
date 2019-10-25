function getAllPermutations(start, end) {
  if (start === end) {
    return [ [start] ];
  }

  const diff = end - start;
  const childPerms = getAllPermutations(start + 1, end);
  const perms = [];

  childPerms.forEach(childPerm => {
    for (let i = 0; i <= diff; i++) {
      const perm = [...childPerm];
      perm.splice(i, 0, start);
      perms.push(perm);
    }
  });

  return perms;
}

console.log(getAllPermutations(1, 3));