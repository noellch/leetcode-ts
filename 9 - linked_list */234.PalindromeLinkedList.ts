/* Q: Given the head of a singly linked list, return true if it is a palindrome.
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}
// O(n) time and O(1) space
function isPalindrome(head: ListNode | null): boolean {
    let fast = head,
        slow = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    let prev: ListNode | null = null

    while (slow) {
        let next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }
    // 這時 prev 會是後半段 list 的頭
    // 因為 slow = next 若 next = null 跳出迴圈，prev 在這邊等於 slow 還沒 next 時

    let left = head,
        right = prev

    while (right) {
        if (left.val !== right.val) return false

        left = left.next
        right = right.next
    }

    return true
}

/**
 * 找到這個 linked list 的中點。以中點為 head 將後半段的 list 做反轉。
 * 再用這個反轉的 half list 跟前半段的 half list 逐值比較。
 * 如果都相等這個 linked list 就是 palindrome。
 */

// O(n) time and O(n) space
function isPalindrome(head: ListNode | null): boolean {
    const nums: number[] = []

    while (head) {
        nums.push(head.val)
        head = head.next
    }

    let l = 0,
        r = nums.length - 1
    while (l < r) {
        if (nums[l] !== nums[r]) return false

        l++
        r--
    }

    return true
}
