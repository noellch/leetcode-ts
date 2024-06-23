const merge = (arr1: number[], arr2: number[]): number[] => {
    let p1 = 0,
        p2 = 0,
        result: number[] = [];

    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] < arr2[p2]) {
            result.push(arr1[p1]);
            p1++;
        } else {
            result.push(arr2[p2]);
            p2++;
        }
    }

    while (p1 < arr1.length) {
        result.push(arr1[p1]);
        p1++;
    }

    while (p2 < arr2.length) {
        result.push(arr2[p2]);
        p2++;
    }

    return result;
};

const mergeSort = (arr: number[]): number[] => {
    if (arr.length === 1) return arr;
    let mid = ~~(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

console.log(mergeSort([6, 1, 13, 98, 23, 56, 77, 0, 8, 11, 34]));
/**
 * Best	    O(n*log n)
 * Worst	O(n*log n)
 * Average	O(n*log n)
 * 長度為 n 的陣列 divide 成長度為 1 的陣列需要 O(n-1) 的時間複雜度。（切 n-1 刀）
 * 所有長度為 1 的陣列要 merge 並 sort 成原本長度的陣列。高度為 logn，每一層都要跑 n 次，所以是 O(nlogn)
 * O(n-1) + O(nlogn) = O(nlogn)
 *
 */
