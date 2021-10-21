/* Q: Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists. */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
    // 定義一個新的 node，作為一個新的 list 的開頭。
    let l = new ListNode(0)
    // 定義一個 current pointer
    let c = l

    // 讓 l1 的值 跟 l2 的值不斷比較。直到其中一個 list 結束。
    while (l1 && l2) {
        if (l1.val > l2.val) {
            // 當下若 l1.val > l2.val，新的 node 的第二項變成 l2
            c.next = l2
            // 假設 l2 = [1,2,3,4]，l2.next = [2,3,4]
            l2 = l2.next
        } else {
            c.next = l1
            l1 = l1.next
        }
        // c 往下
        c = c.next
    }

    // 若 l1 或 l2 其中一個 list 結束，c 這個 list 的 next，會是另一個 list 剩下的部分
    c.next = l1 ? l1 : l2

    // 因為 object 是 call by reference，所以 l 會等於 c 的全部。
    // 但因為 l 的開頭是 0，一開始 c 是從第二項開始的。所以新的 list 應該會是 l.next。
    //ex: 若 l1 = [1, 2, 3], l2 = [ 1, 3, 4]
    // l = [0 ,1 ,1, 2, 3, 3, 4 ]
    //l.next = [1 ,1, 2, 3, 3, 4]
    return l.next
}

//* 這題也可以用 recursion 解。

// recursion solution
// const mergeTwoLists = function (l1, l2) {
//     if (l1 === null) {
//         return l2
//     }

//     if (l2 === null) {
//         return l1
//     }

//     if (l1.val < l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2)
//         return l1
//     } else {
//         l2.next = mergeTwoLists(l1, l2.next)
//         return l2
//     }
// }
