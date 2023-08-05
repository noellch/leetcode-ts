/** You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const newList = new ListNode()
    let cur = newList
    let carry = false

    // l1 或 l2 其中一個存在時，要做 node 值的相加
    // || carry 為了判斷 l1 跟 l2 都不存在時，最後一次的進位
    // l1: 1 -> 2 -> 3
    // l2: 5 -> 6 -> 7
    // newList: 6 -> 8 -> 10(進位 carry = true)
    // l1 和 l2 都不存在時，最後一次判斷 carry 是否需要進位
    // newList: 6 -> 8 -> 0 -> 1
    while (l1 || l2 || carry) {
        // 其中一個不存在時，不存在者的值為 0
        const l1Val = l1?.val ?? 0
        const l2Val = l2?.val ?? 0

        // 需進位或不用
        // 若 l1Val, l2Val 都不存在， newVal = 1 + 0 + 0
        const newVal = carry ? 1 + l1Val + l2Val : l1Val + l2Val

        const digit = newVal % 10
        carry = newVal >= 10

        cur.next = new ListNode(digit)

        cur = cur.next
        l1 = l1.next ?? null
        l2 = l2.next ?? null
    }

    return newList.next
}
