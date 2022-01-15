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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry: boolean = false): ListNode | null {
    // 是否進位
    let c: boolean = carry

    // 新的 list
    let newList: ListNode | null = null

    if (l1 || l2) {
        // 當下 node 的 val。若 l1 或 l2 其中一個 node 不存在，讓 val 等於 0。
        // l1: 1 -> 2 -> 3
        // l2: 5 -> 6
        // newList: 6 -> 8 -> 3 (3 + 0)
        const l1Val = l1?.val ?? 0
        const l2Val = l2?.val ?? 0

        const l1Next = l1 ? l1.next : null
        const l2Next = l2 ? l2.next : null
        // carry 為 true 時 l1.val 及 l2.val 的和要加 1
        const sum = c ? l1Val + l2Val + 1 : l1Val + l2Val
        // 新 list 的 node 的值取 l1.val 及 l2.val 和的個位數
        newList = new ListNode(sum % 10)
        // sum >= 10 判斷和是否大於 10（是否需要進位）
        newList.next = addTwoNumbers(l1Next, l2Next, sum >= 10)
    } else {
        // l1 跟 l2 都不存在時，判斷 carry 是否為 true。
        // l1: 1 -> 2 -> 3
        // l2: 5 -> 6 -> 7
        // newList: 6 -> 8 -> 10(進位 carry = true)
        // l1 和 l2 都不存在時，最後一次判斷 carry 是否需要進位
        // newList: 6 -> 8 -> 0 -> 1
        if (carry) {
            newList = new ListNode(1, null)
        }
    }

    return newList
}
