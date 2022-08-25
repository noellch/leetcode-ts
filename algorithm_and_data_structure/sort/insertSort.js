const insertSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        const cur = arr[i];
        for (let j = i - 1; j >= -1; j--) {
            if (arr[j] > cur) {
                arr[j + 1] = arr[j];
            } else {
                arr[j + 1] = cur;
                break;
            }
        }
    }

    return arr;
};

console.log(insertSort([40, 1, 5, 32, 30, 14, 9]));

/**
 * Best	    O(n)
 * Worst	O(n^2)
 * Average	O(n^2)
 */
