const insertSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let curVal = arr[i];

        for (let j = i - 1; j >= -1; j--) {
            if (arr[j] > curVal) {
                arr[j + 1] = arr[j];
            } else {
                arr[j + 1] = curVal;
                break;
            }
        }
    }

    return arr;
};

console.log(insertSort([40, 1, 5, 32, 30, 14, 9]));

function I(arr) {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        for (let j = i - 1; j >= -1; j--) {
            if (arr[j] > current) {
                arr[j + 1] = arr[j];
            } else {
                arr[j + 1] = current;
                break;
            }
        }
    }

    return arr;
}

console.log(I([40, 1, 5, 32, 30, 14, 9]));

/*
T.C.:
Best：O(N)，如果陣列已經排好序，內層迴圈都不用跑
最差/平均情況：O(N^2)，因為外層迴圈跑 N 次，內層迴圈平均跑 N/2 次
S.C.: O()
*/
