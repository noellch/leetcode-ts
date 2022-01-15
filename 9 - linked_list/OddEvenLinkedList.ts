/**Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity. */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head) return head

    let odd: ListNode | null = head
    let even: ListNode | null = head.next
    let evenHead: ListNode = even

    while (odd.next && even.next) {
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    }

    odd.next = evenHead
    return head
}

// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
// odd  even
