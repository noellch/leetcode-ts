/**Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:


The test cases are generated such that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Custom Judge:

The inputs to the judge are given as follows (your program is not given these inputs):

intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
listA - The first linked list.
listB - The second linked list.
skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted. */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let a = headA
    let b = headB

    // node 不相等時
    while (a !== b) {
        // 若 a 的 node 存在的話持續往下，直到 a === null，再連接上 headB。
        a = a ? a.next : headB
        b = b ? b.next : headA
    }

    // 返回 a === b 時的 node (也可返回這時的 b)
    return a
}

// 將兩個 list 個別加上對方
// headA + headB
// headB + headA
// 這樣兩個 list 的長度就會確保一樣長。 node 數一樣多。
// 接下來只要判斷哪個 node 是重複的就可以了。
