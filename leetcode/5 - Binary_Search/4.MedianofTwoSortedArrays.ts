/* 
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

/* ------------------------------------------------------------------------------- */

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let A = nums1,
        B = nums2;

    if (A.length > B.length) {
        A = nums2;
        B = nums1;
    }

    const total = A.length + B.length;
    const half = Math.floor((A.length + B.length) / 2);

    let l = 0,
        r = A.length - 1;

    while (true) {
        let Amid = Math.floor((r + l) / 2);
        let Bmid = half - Amid - 2;

        const ALeft = A[Amid] ?? -Infinity;
        const ARight = A[Amid + 1] ?? Infinity;
        const BLeft = B[Bmid] ?? -Infinity;
        const BRight = B[Bmid + 1] ?? Infinity;

        if (ALeft <= BRight && BLeft <= ARight) {
            if (total % 2) {
                return Math.min(ARight, BRight);
            } else {
                return (Math.min(ARight, BRight) + Math.max(ALeft, BLeft)) / 2;
            }
        } else if (ALeft > BRight) {
            r = Amid - 1;
        } else {
            l = Amid + 1;
        }
    }
}

/* 
題目提到時間複雜度必須要 O(log(M + N))，所以無法先 merge 兩個 array

我們知道中位數會將 merge 後的 array 分成對等的左右兩部分，
若 merged array 共有 13 個 item，則中位數會將之分為兩個長度為 6 的 subarray。
找到較短 array 中位數的 index，再用 subarray 的長度減去它，就可以在不 merge 的情況下找到兩個 array 在 merge 後中位數可能的位置。
例如，[1, 2, 3, 4, 5, 6, 7] 和 [3, 4, 5, 6, 7]
找到較短 array 中位數為 index2，用 merge 後 array 長度的一半減去它 (6 - 2 - 2 = 4。 會多減一個 2 是因為兩個 array 的 index 都是從 0 開始) 
所以較長 array 的中位數可能位於 index4。

接著要驗證找到的兩個中位數是否無誤，
因為我們知道兩個 array 都 sorted，所以找到的兩個中位數一定會小於自身 array 的下一個 index。
那就要判斷這兩個中位數是否也小於等於對方的下一個 index。
如果沒錯，則看 merge 後的 array 的長度是奇數還是偶數；
若是奇數，則將找到兩個中位數的最小值返回；
若是偶數，則取兩個中位數的最大值，以及個別的下一個數的最小值的平均，並返回。

若驗證失敗，則表示較短長度 array 的中位數過大或過小，依照情況改變左右指針的位置，並從新開始整個循環。
*/

/*
T.C.: O(log(MIN(M, N)))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const nums1 = [1, 3],
//     nums2 = [2];
// const nums1 = [1, 2],
//     nums2 = [3, 4];
const nums1 = [1, 2, 3, 4, 5, 6, 7],
    nums2 = [3, 4, 5, 6, 7];

console.log(findMedianSortedArrays(nums1, nums2));
