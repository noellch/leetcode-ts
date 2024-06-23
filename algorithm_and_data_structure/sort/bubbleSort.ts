const bubbleSort = (arr: number[]): number[] => {
    let noSwap = true;

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwap = false;
            }
        }
        if (noSwap) break;
    }

    return arr;
};

console.log(bubbleSort([4, 6, 2, 7, 10, 98, -3]));

/**
 * Best	    O(n)
 * Worst	O(n^2)
 * Average	O(n^2)
 */
