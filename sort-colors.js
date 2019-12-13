var sortColors = function(nums) {
  const count = [0, 0, 0], arr = [];
  for (let i = 0; i < nums.length; i++)
      count[nums[i]]++;
  for (let i = 0; i < count.length; i++)
      for (let j = 0; j < count[i]; j++)
          arr.push(i);
  return arr;
};

console.log(sortColors([2,0,2,1,1,0]))