function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) smallest = j;
        }

        if (smallest !== i) {
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;
        }
    }

    return arr;
}

console.log(selectSort([0, 2, 34, 5, 12, 65, 4, 31, 10]));

function S(arr) {
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
}

console.log(S([0, 2, 34, 5, 12, 65, 4, 31, 10]));

/*
T.C.:
Best/Worst/Avg. (N^2)，因為外層迴圈跑 N 次，內層迴圈平均跑 N/2 次
S.C.: O()
*/
