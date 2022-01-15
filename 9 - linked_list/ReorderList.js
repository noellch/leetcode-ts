/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

//solution1
var reorderList = function (head) {
    if (!head || !head.next || !head.next.next) return head

    // 取得 list 的終點
    let slow = head
    let fast = head

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    // 這時候 slow 會在 list 的中點。

    // 反轉 list 後半段
    let prev = null
    // 後半段 list 的尾巴
    let node = slow.next
    let next = null

    while (node !== null) {
        next = node.next
        node.next = prev
        prev = node
        node = next
    }

    // 重新組合兩半的 list
    let secondHalf = prev
    slow.next = null
    let firstHalf = head

    while (secondHalf !== null) {
        firstHalfNext = firstHalf.next
        secondHalfNext = secondHalf.next

        firstHalf.next = secondHalf
        secondHalf.next = firstHalfNext
        firstHalf = firstHalfNext
        secondHalf = secondHalfNext
    }

    return head
}

//solution2
var reorderList = function (head) {
    const queue = []
    let node = head

    // 將所有 node 放進 queue
    while (node) {
        queue.push(node)
        node = node.next
    }

    let secondHalf = true
    let lp = 1,
        rp = queue.length - 1
    let next
    node = head

    while (lp <= rp) {
        next = secondHalf ? queue[rp--] : queue[lp++]
        node.next = next
        node = node.next
        secondHalf = !secondHalf
    }

    node.next = null
    return head
}
