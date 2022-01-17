/* Q: Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false. */

//? parameter is head。判斷 linked list 內部有沒有 cycle，也就是 tail 的 next 有沒有連接到 internal node。用 pos 表示連接到的 index。

//? Follow up: Can you solve it using O(1) (i.e. constant) memory?

//* 訪問過的 node 就給個標記。如果再次訪問到，這個 linked list 就存在 cycle。
// var hasCycle = function (head) {
//     if (!head || !head.next) return false

//     let node = head

//     while (node) {
//         if (node.visited) return true

//         node.visited = true
//         node = node.next
//     }

//     return false
// }

//* 定義一快一慢的 pointer，若 linked list 就存在 cycle，這兩個 pointer 早晚會相遇。
//* 效能較好，且不用用到額外空間 space complexity O(1)

var hasCycle = function (head) {
    if (!head || !head.next) return false

    let fp = head,
        sp = head

    while (fp && fp.next) {
        fp = fp.next.next
        sp = sp.next

        if (fp === sp) return true
    }

    return false
}

//* 這題明明就很簡單，為什麼我想不到...打擊信心...