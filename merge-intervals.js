/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
    const mergedIntervals = [];
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    let i = 0;
    
    while (i < intervals.length) {
        let lowerBound = intervals[i][0];
        let upperBound = intervals[i][1];
        
        let j;
        
        for (j = i + 1; j < intervals.length; j++) {
            if (upperBound < intervals[j][0])
                break;
            upperBound = Math.max(upperBound, intervals[j][1]);
        }
        
        mergedIntervals.push([lowerBound, upperBound]);
        i = j;
    }
    
    return mergedIntervals;
};

console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]));