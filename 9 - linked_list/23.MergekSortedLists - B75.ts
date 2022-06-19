/* Q: You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it. */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

// merge with divide and conquer solution
const merge = (a: ListNode, b: ListNode) => {
    if (!a) return b
    if (!b) return a

    const root = new ListNode()
    let cur = root

    while (a && b) {
        if (a.val < b.val) {
            cur.next = a
            a = a.next
        } else {
            cur.next = b
            b = b.next
        }
        cur = cur.next
    }

    cur.next = a ? a : b

    return root.next
}

// var mergeKLists = function (lists: Array<ListNode | null>): ListNode | null {
//     if (!lists.length) return null

//     // base case
//     if (lists.length <= 1) return lists[0]

//     const mid = ~~(lists.length / 2)
//     // 不斷切分至長度等於 1
//     const left = mergeKLists(lists.slice(0, mid))
//     const right = mergeKLists(lists.slice(mid))

//     return merge(left, right)
// }

// or

var mergeKLists = function (lists: Array<ListNode | null>): ListNode | null {
    if (!lists.length) return null

    while (lists.length > 1) {
        const mergedList: ListNode[] = []
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i]
            const l2 = i + 1 < lists.length ? lists[i + 1] : null
            const merged = merge(l1, l2)
            mergedList.push(merged)
        }
        lists = mergedList
    }
    return lists[0]
}

/**
 * 用到 merge sort 的觀念
 * 將 lists 不斷拆分至 長度等於 1，再兩兩 merge 回去。
 * Time complexity : O(Nlogk) where k is the number of linked lists.
 * Space complexity : O(1)
 */
