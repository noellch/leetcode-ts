const getDigit = (num: number, i: number): number => {
    return ~~(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num: number): number => {
    return ~~Math.log10(Math.abs(num)) + 1;
};

const mostDigits = (nums: number[]): number => {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, digitCount(nums[i]));
    }

    return max;
};

const radixSort = (nums: number[]): number[] => {
    const max = mostDigits(nums);

    for (let k = 0; k < max; k++) {
        let bucket = Array.from({ length: 10 }, (): number[] => []);

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            bucket[digit].push(nums[i]);
        }

        let a: number[] = [];
        nums = a.concat(...bucket);
    }

    return nums;
};

console.log(radixSort([34, 65, 9, 1, 3, 13, 5, 138, 9320]));

/**
 * Best	    O(d(n+k))
 * Worst	O(d(n+k))
 * Average	O(d(n+k))
 * d 是最大的位數
 * n 是陣列長度，也就是 num 的數量
 * k 是基數，也就是 0~9 共十個。
 */
