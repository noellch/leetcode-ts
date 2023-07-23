/* 
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.
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

function mergeLists(list1: ListNode | null, list2: ListNode | null) {
    if (!list1) return list2;
    if (!list2) return list1;

    const root = new ListNode(0);
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

/* ------------------------------------------------------------------------------- */
// divide and conquer；merge sort
// function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
//     if (!lists.length) return null;
//     if (lists.length === 1) return lists[0];

//     let mid = Math.floor(lists.length / 2);
//     const left = mergeKLists(lists.slice(0, mid));
//     const right = mergeKLists(lists.slice(mid));

//     return mergeLists(left, right);
// }

/* ------------------------------------------------------------------------------- */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists.length) return null;

    while (lists.length > 1) {
        const mergedLists: (ListNode | null)[] = [];
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = lists[i + 1] ?? null;
            const merged = mergeLists(l1, l2);
            mergedLists.push(merged);
        }
        lists = mergedLists;
    }

    return lists[0];
}

/*
T.C.: O(log(K) * N)
S.C.: O(N)
- K stands for the length of lists，N stands for the total number of nodes
*/

/* ------------------------------------------------------------------------------- */
