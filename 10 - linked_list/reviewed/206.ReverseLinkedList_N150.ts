/* Given the head of a singly linked list, reverse the list, and return the reversed list. */

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

function reverseList(head: ListNode | null): ListNode | null {
    let current = head;
    let prev: ListNode | null = null;
    let next: ListNode | null = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

/**
 *        1  ->  2  ->  3  ->  4
 *       node   next
 *    <-  1      2  ->  3  ->  4
 * prev  node   next
 *    <-  1      2  ->  3  ->  4
 *       prev   node   next
 *    <-  1  <-  2      3   ->  4
 *       prev   node   next
 *    <-  1  <-  2      3   ->   4
 *              prev   node     next
 *   因為最後 head = null 時 while loop 會停止。
 *   這時 prev 會指向這個 list 的最後一個 node，也就是原本的 tail，aka 新的 head。
 */

/* ------------------------------------------------------------------------------- */
