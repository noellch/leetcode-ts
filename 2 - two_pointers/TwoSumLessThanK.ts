function TwoSumLessThanK(arr: number[], k: number): number[][] {
    let res: number[][] = [];

    arr.sort((a, b) => a - b);

    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let sum = arr[i] + arr[j];

        if (sum < k) {
            res.push([arr[i], arr[j]]);
            while (arr[i++] === arr[i]) i++;
        } else j--;
    }

    return res;
}

// T.C.: O(nlogn) + n = O(nlogn)
// S.C.: O(1)
