const selectSort = (arr: number[]): number[] => {
    let smallest = 0;
    for (let i = 0; i < arr.length; i++) {
        smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }

        if (i !== smallest) [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    }

    return arr;
};

console.log(selectSort([0, 2, 34, 5, 12, 100, 65, 4, 31, 10]));

/**
 * T.C:
 * Best	    O(n^2)
 * Worst	O(n^2)
 * Average	O(n^2)
 */
