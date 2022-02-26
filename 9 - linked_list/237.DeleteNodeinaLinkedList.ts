/* Q: Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.

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
 Do not return anything, modify it in-place instead.
 */
function deleteNode(root: ListNode | null): void {
    root.val = root.next.val
    root.next = root.next.next
}

// 刪除 node3，但其實是將 node 3 複製成 node 4，然後刪除 node4。
