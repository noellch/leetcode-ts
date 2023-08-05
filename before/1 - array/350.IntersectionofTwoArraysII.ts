/* Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order. */

/* Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once? */

function intersect_1(nums1: number[], nums2: number[]): number[] {
    // element: count
    const table: { [key: string]: number } = {}
    const result: number[] = []

    for (const num of nums1) {
        table[num] = (table[num] ?? 0) + 1
    }

    for (const num of nums2) {
        if (table[num]) {
            result.push(num)
            table[num]--
        }
    }

    return result
}

console.log(intersect_1([4, 9, 9, 5], [9, 4, 9, 8, 4]))

/**
 * T.C.: O(n)
 * S.C.: O(n)
 */

// What if the given array is already sorted? How would you optimize your algorithm?
function intersect_2(nums1: number[], nums2: number[]): number[] {
    const result: number[] = []
    let p1 = 0,
        p2 = 0

    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] === nums2[p2]) {
            result.push(nums1[p1])
            p1++
            p2++
        } else {
            if (nums1[p1] > nums2[p2]) {
                p2++
            } else {
                p1++
            }
        }
    }

    return result
}

console.log(intersect_1([1, 2, 3, 4, 5], [2, 4, 5, 6, 7]))

/**
 * T.C.: O(n)
 * S.C.: O(1)
 */
