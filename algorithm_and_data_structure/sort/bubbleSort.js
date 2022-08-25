const bubbleSort = (arr) => {
    let noSwap = true;

    for (let i = arr.length - 1; i > 0; i--) {
        noSwap = true;

        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
        }
        // 表示這一輪已經完全沒有元素交換，可能是所有元素都已經就定位。
        if (noSwap) break;
    }

    return arr;
};

console.log(bubbleSort([4, 6, 2, 7, 10, 98, -3]));

/**
 * T.C:
 * Best	    O(n)
 * Worst	O(n^2)
 * Average	O(n^2)
 */
