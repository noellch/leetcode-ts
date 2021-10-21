/* A: Given the head of a singly linked list, reverse the list, and return the reversed list.*/

var reverseList = function (head) {
    // edge cases: 如果 head 不存在返回 null
    if (!head) return null
    // edge cases: 如果 head 只有一個 node 返回自己
    if (!head.next) return head

    // node 是即將遍歷所有 node 的變數
    let node = head
    // next 是暫存當前 node 的 next
    let next
    // prev 是為了暫存當前 node，作為下個 node 的 next。
    let prev = null

    while (node) {
        // 首先先將當前 node 的 next 暫存至 next 這個變數。
        next = node.next
        // 再將當前 node 的 next 更改指派為 prev (第一輪 prev = null，因為第一個 node 是 head，也就是 reverse 之後的 tail，而 tail 不會有 next。)
        node.next = prev
        // 將 prev 指派為當前的 node，也就是說下一輪的 node.next 會指向這個 node。
        prev = node
        // 將 node 更改為原本的 node.next
        node = next
    }

    //   1  ->  2  -> 3 -> 4
    // node   next

    //     <-   1     2  -> 3 -> 4
    // prev   node  next

    //  <-  1     2  ->  3 -> 4
    //    prev  node   next

    //  <-  1 <-  2     3   -> 4
    //    prev  node   next

    //  <-  1 <-  2     3   ->   4
    //          prev   node     next

    // 因為最後 node = null 時 while loop 會停止。
    // 這時 prev 會指向這個 list 的最後一個 node，也就是原本的 tail，aka 新的 head。
    return prev
}

//* 聽說這題面試很常考？？
