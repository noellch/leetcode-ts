/* 
A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.
*/

/* ------------------------------------------------------------------------------- */

class LNode {
    val: number;
    next: LNode | null;
    random: LNode | null;
    constructor(val?: number, next?: LNode, random?: LNode) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}

function copyRandomList(head: LNode | null): LNode | null {
    const hashMap = new Map<LNode | null, LNode | null>([[null, null]]);

    let current = head;

    while (current) {
        const val = current.val;
        const newNode = new LNode(val);
        hashMap.set(current, newNode);
        current = current.next;
    }

    current = head;

    while (current) {
        const newNode = hashMap.get(current)!;
        newNode.next = hashMap.get(current.next)!;
        newNode.random = hashMap.get(current.random)!;
        current = current.next;
    }

    return hashMap.get(head)!;
}

/* 
我們可以依序複製節點；問題點在於，若 random 指向比當下節點更前面的節點時，會無法處理。
建立一下 hashmap 來保存複製的節點，並遍歷舊的 list 兩次。一次將新舊節點 map 到 hashmap 上，一次建立新的 list。
*/

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */
