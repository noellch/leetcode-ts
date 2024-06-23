const pivot = (arr: number[], start = 0, end = arr.length - 1): number => {
    function swap(arr: number[], i: number, j: number): void {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, swapIdx, start);

    return swapIdx;
};

const quickSort = (arr: number[], left = 0, right = arr.length - 1): number[] => {
    if (left < right) {
        const pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }

    return arr;
};

console.log(quickSort([3, 55, 1, 4, 12, 9, 6, 32, 54]));

/**
 * 最好的情況是，每次 pivot 都選中中位數，完美地將陣列切成接近相等的左右兩半。這樣只需要跑 logn 輪，每一輪都要跑 O(n)。
 * Best	    O(n*log n)
 * 最差情況是，每次 pivot 都選到最極端的值（最大獲最小），所以每次都要遍歷整個陣列。常發生於已排序完成或接近排序完成的數列。
 * Worst	O(n2)
 * Average	O(n*log n)
 */
