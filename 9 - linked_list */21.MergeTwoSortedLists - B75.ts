/* Q: Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists. */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const root = new ListNode()
    let cur = root

    if (!list1) return list2
    if (!list2) return list1

    while (list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = list1
            list1 = list1.next
        } else {
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
    }
    // 若 l1 或 l2 其中一個 list 結束，c 這個 list 的 next，會是另一個 list 剩下的部分
    cur.next = list1 ? list1 : list2

    // 因為 object 是 call by reference，所以 root 會等於 cur 的全部。
    // 但因為 root 的開頭是 0，一開始 cur 是從第二項開始的。所以新的 list 應該會是 root.next。
    //ex: 若 l1 = [1, 2, 3], l2 = [ 1, 3, 4]
    // l = [0 ,1 ,1, 2, 3, 3, 4 ]
    //l.next = [1 ,1, 2, 3, 3, 4]
    return root.next
}

// recursion solution
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2
    if (!list2) return list1

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list2.next, list1)
        return list2
    }
}
