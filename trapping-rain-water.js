// Leetcode

/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(h) {
//     if (!h || h && h.length < 2) return 0;
    
//     const maxes = [];
//     h[0] >= h[1] && maxes.push(0);
//     for (let i = 1; i < h.length - 1; i++)
//         if (h[i] >= h[i - 1] && h[i] >= h[i + 1])
//             maxes.push(i);
//     h[h.length - 1] >= h[h.length - 2] && maxes.push(h.length - 1);
    
//     return calcMaxWater(h, maxes);
// };

// function calcMaxWater(h, m, cache={}) {
//     let maxWater = 0;
//     // console.log(m)
    
//     for (let i = 1; i < m.length; i++) {
//         let leftPart = 0, rightPart = 0,
//             leftIndex = m[0] + ':' + m[i],
//             rightIndex = m[i] + ':' + m[m.length - 1];

//         // if (Number.isInteger(cache[leftIndex])) {
//         //     leftPart = cache[leftIndex];
//         // } else {
//         //     const min = Math.min(h[m[0]], h[m[i]]);
//         //     let obst = 0;
//         //     for (let k = m[0] + 1; k < m[i]; k++)
//         //         obst += h[k] < min ? h[k] : min;
//         //     leftPart = (m[i] - m[0] - 1) * min - obst;
//         //     cache[leftIndex] = leftPart;
//         // }

//         const min = Math.min(h[m[0]], h[m[i]]);
//             let obst = 0;
//             for (let k = m[0] + 1; k < m[i]; k++)
//                 obst += h[k] < min ? h[k] : min;
//             leftPart = (m[i] - m[0] - 1) * min - obst;
//             cache[leftIndex] = leftPart;
        
//         if (Number.isInteger(cache[rightIndex])) {
//             rightPart = cache[rightIndex];
//             // if (m[0] === 0 && m[i] === 13) {
//             //     console.log(rightIndex, rightPart);
//             // }
//         } else {
//             rightPart = i === m.length - 1 ? 0 : calcMaxWater(h, m.slice(i), cache);

//             // if (m[0] === 0 && m[i] === 13) {
//             //     console.log(rightPart);
//             // }
//         }
        
//         const water = leftPart + rightPart;

//         // if (m[0] === 13 && m[i] === 23) {
//         //     console.log(leftPart, rightPart, water, maxWater)
//         // }

//         maxWater = water > maxWater ? water : maxWater;
//         // console.log(m[0], m[i],cache)
        
//         // if (m[0] === 0 && m[i] === 13) {
//         //     console.log();
//         // }
//     }
    
//     cache[m[0] + ':' + m[m.length - 1]] = maxWater;

//     return maxWater;
// }

const trap = h => {
    let sum = 0;
    for (let i = 0; i < h.length; i++) {
        const leftPartRaw = h.slice(0, i > 0 ? i : 0);
        const rightPartRaw = h.slice(i + 1);
        const leftPart = leftPartRaw.length > 0 ? leftPartRaw : [0];
        const rightPart = rightPartRaw.length > 0 ? rightPartRaw : [0];
        const minMax = Math.min(
            Math.max(...leftPart),
            Math.max(...rightPart)
        );
        // console.log(leftPartRaw, rightPartRaw);
        sum += minMax > h[i] ? minMax - h[i] : 0;
    }
    return sum;
}

console.log(trap([0,1,0,1]));

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))

console.log(trap([5,2,1,2,1,5]))

