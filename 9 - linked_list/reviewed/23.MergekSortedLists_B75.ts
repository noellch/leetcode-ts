/* You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it. */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// merge with divide and conquer solution

const mergeList = (a: ListNode, b: ListNode): ListNode | null => {
    if (!a) return b;
    if (!b) return a;

    const root = new ListNode();
    let cur = root;

    while (a && b) {
        if (a.val < b.val) {
            cur.next = a;
            a = a.next;
        } else {
            cur.next = b;
            b = b.next;
        }

        cur = cur.next;
    }

    cur.next = a ? a : b;

    return root.next;
};

var mergeKLists1 = function (lists: Array<ListNode | null>): ListNode | null {
    if (!lists.length) return null;
    if (lists.length === 1) return lists[0];

    let mid = ~~(lists.length / 2);
    const left = mergeKLists1(lists.slice(0, mid));
    const right = mergeKLists1(lists.slice(mid));

    return mergeList(left as ListNode, right as ListNode);
};

/**
 * 用到 merge sort 的觀念
 * 將 lists 不斷拆分至 長度等於 1，再兩兩 merge 回去。
 */

/**
 * T.C.: O(nlogn)
 * S.C.: O(1)
 */

var mergeKLists2 = function (lists: Array<ListNode | null>): ListNode | null {
    if (!lists.length) return null;

    while (lists.length > 1) {
        const mergedList: ListNode[] = [];
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = i + 1 < lists.length ? lists[i + 1] : null;
            const merged = mergeList(l1 as ListNode, l2 as ListNode);
            mergedList.push(merged as ListNode);
        }
        lists = mergedList;
    }
    return lists[0];
};
