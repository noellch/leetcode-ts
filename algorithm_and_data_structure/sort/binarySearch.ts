function binarySearch(arr: number[], num: number): number {
    let left = 0;
    let right = arr.length - 1;
    let mid = ~~((left + right) / 2);

    while (left < right && arr[mid] !== num) {
        if (num < arr[mid]) right = mid - 1;
        else left = mid + 1;
        mid = ~~((left + right) / 2);
    }

    return arr[mid] === num ? mid : -1;
}

console.log(binarySearch([1, 2, 3, 6, 7, 9, 10, 12, 14, 16, 20], 1));
