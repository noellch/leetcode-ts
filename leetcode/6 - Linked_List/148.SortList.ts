/* 
Given the head of a linked list, return the list after sorting it in ascending order.
*/

/* ------------------------------------------------------------------------------- */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeList(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const root = new ListNode(0);
    let current = root;

    if (!list1) return list2;
    if (!list2) return list1;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    current.next = list1 ? list1 : list2;

    return root.next;
}

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head?.next) {
        return head;
    }

    let left: ListNode | null = head;
    let fast: ListNode | null = head.next,
        right: ListNode | null = head;
    while (fast && fast.next) {
        fast = fast.next.next as ListNode;
        right = right.next as ListNode;
    }

    const temp = right.next;
    right.next = null;
    right = temp;

    left = sortList(left);
    right = sortList(right);
    return mergeList(left, right);
}

/*
T.C.: O(Nlog(N))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */
