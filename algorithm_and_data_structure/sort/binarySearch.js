function binarySearch(arr, num) {
    let l = 0,
        r = arr.length - 1;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (arr[mid] === num) return mid;
        else if (num > arr[mid]) l = mid + 1;
        else r = mid - 1;
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 5, 6, 7, 9, 10, 12, 14, 16, 20], 5));
