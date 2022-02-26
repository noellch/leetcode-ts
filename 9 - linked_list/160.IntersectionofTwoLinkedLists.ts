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

//      1 -> 2 -> 3 -> 4   : A
// 5 -> 6 -> 2             : B

//
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 2 -> 3 -> 4   :A + B
// 5 -> 6 -> 2 -> 3 -> 4 -> 1 -> 2 -> 3 -> 4   :B + A
//                               i => 相交處

/**
 * 兩個長度不等的 list 互相串聯時，長度相等
 * 若 a 長度 5，b 長度 6
 * a+b = b+a 長度 11
 * 若中間有交會點，必會在每一處相交
 * 若沒有，則到底時兩者同時為 null
 */

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

    // 若 a＋b, b+a list 到底時， null === null 表示沒有交會點
    while (a !== b) {
        a = a ? a.next : headB
        b = b ? b.next : headA
    }

    return a
}
