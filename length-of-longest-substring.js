
//Leetcode
/**
 * @param {string} s
 * @return {number}
 */

// My old solution

// var lengthOfLongestSubstring = function(s) {
// 	if (s.length === 0) return 0;
  
// 	let map = {};
// 	let maxLen = 0;
// 	let i = 0;
  
// 	while (i < s.length) {
// 		const index = map[s[i]];
		
// 		if (Number.isInteger(index)) {
// 			const newLen = Object.keys(map).length;
// 			maxLen = newLen > maxLen ? newLen : maxLen;
// 			map = {};
// 			i = index;
// 		} else {
// 			map[s[i]] = i;
// 		}
      
//     	i++;
//   	}
  
// 	const newLen = Object.keys(map).length;
// 	maxLen = newLen > maxLen ? newLen : maxLen;

// 	return maxLen;
// };

// With sliding window optimized

var lengthOfLongestSubstring = function(s) {
	let ans = 0, map = {};
	
	for (let i = 0, j = 0; j < s.length; j++) {
			if (map[s[j]]) {
					// zabcalmz -> i = 0 when second a is encountered
					// z is encountered when i = 2 and map['z'] = 1
					i = Math.max(i, map[s[j]]);
			}
			ans = Math.max(ans, j - i + 1);
			map[s[j]] = j + 1;
	}
	
	return ans;
};

console.log(lengthOfLongestSubstring('bbbb'));
