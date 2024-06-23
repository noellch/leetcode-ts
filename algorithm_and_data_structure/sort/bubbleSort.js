function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let swap = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }
        if (!swap) break;
    }

    return arr;
}
console.log(bubbleSort([4, -1, 6, 2, 7, 10, 98, -3]));

function B(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let swap = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }
        if (!swap) break;
    }

    return arr;
}

console.log(B([4, -1, 6, 2, 7, 10, 98, -3]));

/*
T.C.:
Best：O(N)，如果陣列已經排好序，只要跑一輪檢查就好
Worst/Avg.：O(N^2)，因為有兩個巢狀迴圈，外層跑 N 次，內層平均也要跑 N/2 次
S.C.: O(1)
*/
