/* Given the head of a linked list, remove the nth node from the end of the list and return its head. */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // head 不存在或是只有 head 這一個 node
    if (!head.next) return null;

    let f = head;
    // 建立一個新的 list，是以新的 node 為 head，它的 next 為原本的 head
    // root => 原本的 head => ...
    let root = new ListNode(0, head);
    let s = root;

    // f 跑 n 步
    while (n--) f = f!.next;

    // f 跑到 list 的底。
    // 同時 s 會停在以 root 為頭的 list 的倒數第 n-1 個 node 上
    while (f) {
        s = s.next;
        f = f.next;
    }

    // 刪除第 n 個 node
    s.next = s.next?.next;

    // 返回新建立的 list 的 head.next
    // 也就是原本 list 的 head
    return root.next;
}

/**
 * T.C.: O(n)
 * S.C.: O(n) 建立新的 list
 */
