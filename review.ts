const pivot = (arr: number[], l: number, r: number) => {
    const swap = (arr: number[], l: number, r: number) => {
        const temp = arr[l]
        arr[l] = arr[r]
        arr[r] = temp
    }

    let pivot = arr[l]
    let swapIdx = l

    for (let i = l + 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }

    swap(arr, l, swapIdx)

    return swapIdx
}

const quickSort = (arr: number[], left = 0, right = arr.length - 1): void => {
    if (left < right) {
        const pivotIdx = pivot(arr, left, right)
        quickSort(arr, left, pivotIdx - 1)
        quickSort(arr, pivotIdx + 1, right)
    }

    console.log(arr)
}

console.log(quickSort([3, 1, 4, 12, 9, 6, 32, 54]))
