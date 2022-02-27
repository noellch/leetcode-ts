/**
 * 
 * You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

/**
 Do not return anything, modify head in-place instead.
 */

//solution1
function reorderList(head: ListNode | null): void {
    let fast = head,
        slow = head

    // 找出 list 的中點
    while (fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
    }

    // 定義後半部的 list
    // slow.next 是後半段 list 的尾巴
    let second = slow.next
    let prev = null
    slow.next = null

    // 翻轉後半段list
    while (second) {
        const next = second.next
        second.next = prev
        prev = second
        second = next
    }

    // 前後兩段 list
    let first = head
    second = prev

    // 合併
    while (second) {
        let firstNext = first.next
        let secondNext = second.next
        first.next = second
        second.next = firstNext
        first = firstNext
        second = secondNext
    }
}

//solution2
// function reorderList(head: ListNode | null): void {
//     const queue: ListNode[] = []
//     let node = head

//     // 將所有 node 放進 queue
//     while (node) {
//         queue.push(node)
//         node = node.next
//     }

//     let secondHalf = true
//     let lp = 1,
//         rp = queue.length - 1
//     let next: ListNode

//     node = head

//     while (lp <= rp) {
//         next = secondHalf ? queue[rp--] : queue[lp++]
//         node.next = next
//         node = node.next
//         secondHalf = !secondHalf
//     }

//     node.next = null
// }
