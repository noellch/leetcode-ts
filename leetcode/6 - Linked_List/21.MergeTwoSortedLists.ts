/* 
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
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

/* ------------------------------------------------------------------------------- */

// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     if (!list1) return list2;
//     if (!list2) return list1;

//     if (list1.val < list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergeTwoLists(list2.next, list1);
//         return list2;
//     }
// }

/* ------------------------------------------------------------------------------- */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const list = new ListNode();
    let current = list;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    current.next = list1 !== null ? list1 : list2;

    return list.next;
}

/*
T.C.: O()
S.C.: O()
*/
