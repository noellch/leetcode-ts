/* 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/

/* ------------------------------------------------------------------------------- */

function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;

    const set = new Set<number>(nums);
    let longest = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let length = 1;
            let cur = num;

            while (set.has(cur + 1)) {
                cur++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
}

/*
T.C.: O(N * 1)
S.C.: O(N)
- the time complexity of set.has method is O(1) and for loop is O(N)
*/

/* ------------------------------------------------------------------------------- */

// const nums = [100, 4, 200, 1, 3, 2];
const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums));
