const selectSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        if (i !== smallest) {
            const temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;
        }
    }

    return arr;
};

console.log(selectSort([0, 2, 34, 5, 12, 65, 4, 31, -1, 10, -2]));

/**
 * T.C:
 * Best	    O(n^2)
 * Worst	O(n^2)
 * Average	O(n^2)
 */
