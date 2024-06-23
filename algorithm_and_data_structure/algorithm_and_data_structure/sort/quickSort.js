const pivot = (arr, start = 0, end = arr.length - 1) => {
    const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    const pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);

    return swapIndex;
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
    if (start < end) {
        const pivotIndex = pivot(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }

    return arr;
};

console.log(quickSort([3, 1, 55, 4, 12, 9, 6, 32, 54]));

/**
 * 最好的情況是，每次 pivot 都選中中位數，完美地將陣列切成接近相等的左右兩半。這樣只需要跑 logn 輪，每一輪都要跑 O(n)。
 * Best	    O(n*log n)
 * 最差情況是，每次 pivot 都選到最極端的值（最大獲最小），所以每次都要遍歷整個陣列。常發生於已排序完成或接近排序完成的數列。
 * Worst	O(n^2)
 * Average	O(n*log n)
 */
