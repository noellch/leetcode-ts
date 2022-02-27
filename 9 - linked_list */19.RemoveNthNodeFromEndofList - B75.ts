/* Q: Given the head of a linked list, remove the nth node from the end of the list and return its head. */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // 因為 n 不會比 list的長度長，如果只存在 head，也只能刪除 head，所以返回 null (因為 head 被刪除了)
    if (!head.next) return null

    let fast = head

    // 設定一個新的 node ，它的 next 等於 head
    // 也就是這個 node 是 head 前一個 node
    // 為了取到刪除目標的前一個 node
    const root = new ListNode(0, head)
    let slow = root

    while (n-- > 0) fast = fast.next

    while (fast) {
        fast = fast.next
        slow = slow.next
    }

    // 在這邊時，fast 到了 list 的底 (null)，而 slow 會停在 list 的倒數第 n 的 node 的前一個

    slow.next = slow.next.next

    return root.next
}

//                             X
//           1   ->   2   ->   3   ->   4          ,n = 2
// fast                                      f
// root  r
// slow               s

//           X
//           1   ->   2             ,n = 2
// fast                     f
// root  r
// slow  s
