// const pivot = (arr, start = 0, end = arr.length - 1) => {
//     const swap = (arr, i, j) => {
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     };

//     let pivot = arr[start];
//     let swapIndex = start;

//     for (let i = start + 1; i <= end; i++) {
//         if (arr[i] < pivot) {
//             swapIndex++;
//             swap(arr, swapIndex, i);
//         }
//     }
//     swap(arr, start, swapIndex);
//     return swapIndex;
// };

// // console.log(pivot([4, 1, 6, 12, 9, 3, 32, 54]))

// const quickSort = (arr, left = 0, right = arr.length - 1) => {
//     if (left < right) {
//         let pivotIndex = pivot(arr, left, right);

//         quickSort(arr, left, pivotIndex - 1);
//         quickSort(arr, pivotIndex + 1, right);
//     }
//     return arr;
// };

// console.log(quickSort([3, 1, 55, 4, 12, 9, 6, 32, 54]));

function pivot(arr, start, end) {
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIdx += 1;
            [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
        }
    }
    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
    return swapIdx;
}

function Q(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIdx = pivot(arr, left, right);
        Q(arr, left, pivotIdx - 1);
        Q(arr, pivotIdx + 1, right);
    }

    return arr;
}

console.log(Q([3, 1, 55, 4, 12, 9, 6, 32, 54]));
