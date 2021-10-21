/* Q: Given the head of a linked list, remove the nth node from the end of the list and return its head. */

var removeNthFromEnd = function (head, n) {
    // 因為 n 不會比 list的長度長，如果只存在 head，也只能刪除 head，所以返回 null (因為 head 被刪除了)
    if (!head.next) return null

    // 設定一個 fast pointer 指向頭
    let fp = head

    // 跑 n 步。
    while (n-- > 0) {
        fp = fp.next
    }

    // 再設定一個 slow pointer，以及一個 prev。都指向頭
    let sp = head
    let prev = sp

    // 將 fast pointer 再次跑到底變成 null。這時 slow pointer 會剛好指在倒數第 n 個 node 上。
    while (fp !== null) {
        // 不斷往下直到 fp = fp.next = null，也就是說下一輪會直接跳出。
        fp = fp.next
        // prev 會比 slow pointer 慢一步。
        prev = sp
        // 不斷往下直到 倒數第 n 個 node 停止。這時 prev 會是它的前一個 node。
        sp = sp.next
    }

    // edge case: 如果 [1,2], 2 時，上面那個 while 根本不會跑，因為 fp 已經等於 null。
    // 這時 prev 跟 sp 就無法移動，但要刪除的卻是目前指的這個 node，也就是 head。
    // 所以直接返回 head 的下一個 node。
    if (prev === sp) {
        return head.next
    }

    // 其他狀況時就將 prev 的 next 指向 slow pointer (removes node) 的 next。
    prev.next = sp.next
    // 將 slow pointer 完全脫離。
    sp.next = null

    // 返回 head
    return head
}

removeNthFromEnd([1, 2, 3, 4, 5], 2)

//* 思維：先設定一個 fast pointer 跑 n 部。再設定一個 slow pointer 指向 head。
//* 再次將 fast pointer 跑到等於 null，這時 slow pointer 就會剛好指在倒數第 n 個 node 上。

//* 這題的 edge case 需特別注意，像是 [1,2] n = 2。
