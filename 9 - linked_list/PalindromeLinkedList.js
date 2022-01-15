/* Q: Given the head of a singly linked list, return true if it is a palindrome.
 */

var isPalindrome = function (head) {
    if (!head || !head.next) return true
    // 找出linked list 的中點。無論 list 是奇數還是偶數，m 都會剛好停在中點的下一位。
    let fp = head,
        m = head

    while (fp && fp.next) {
        fp = fp.next.next
        m = m.next
    }

    // linked list reversing，可以參考 Reverse Linked List 題目。
    function reversingList(h) {
        let nextNode = null
        let prevNode = null

        while (h) {
            nextNode = h.next
            h.next = prevNode
            prevNode = h
            h = nextNode
        }
        return prevNode
    }

    //將中點為 head 反轉後半段的 list。
    m = reversingList(m)

    // 兩段 half list 逐項比較。
    while (m) {
        if (head.val !== m.val) return false

        m = m.next
        head = head.next
    }

    return true
}

//* 主要思維：找到這個 linked list 的中點，以中點為 head 將後半段的 list 做反轉。
//* 再用這個反轉的 half list 跟前半段的 half list 逐值比較。
//* 如果都相等這個 linked list 就是 palindrome。
