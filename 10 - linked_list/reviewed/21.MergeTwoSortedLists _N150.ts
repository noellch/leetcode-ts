/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. */

/* ------------------------------------------------------------------------------- */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/* ------------------------------------------------------------------------------- */

// recursion solution
function mergeTwoLists_1(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists_1(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists_1(list2.next, list1);
        return list2;
    }
}

/* ------------------------------------------------------------------------------- */

function mergeTwoLists_2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;

    const root = new ListNode(0, null);
    let current = root;

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

/**
 * T.C.: O(m + n)
 * S.C.: O(m + n) 建立新的 list
 */

/* ------------------------------------------------------------------------------- */
