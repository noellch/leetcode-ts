function merge(arr1, arr2) {
    const result = [];
    let i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const leftMerge = mergeSort(arr.slice(0, mid));
    const rightMerge = mergeSort(arr.slice(mid));
    return merge(leftMerge, rightMerge);
}

console.log(mergeSort([6, 1, 13, 98, 23, 56, 77]));

function merge(arr1, arr2) {
    let i = 0,
        j = 0;
    const result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function M(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = M(arr.slice(0, mid));
    const right = M(arr.slice(mid));
    return merge(left, right);
}

console.log(M([6, 1, 13, 98, 23, 56, 77]));

/*
T.C.:
Best/Worst/Avg.：O(N logN)
每次都把陣列對半分，總共要分 log2(N) 層
每一層都要比較 N 個元素（每一片都要比大小）

S.C.: O(N)
*/
