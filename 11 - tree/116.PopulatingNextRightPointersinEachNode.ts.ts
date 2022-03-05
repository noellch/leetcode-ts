/** You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
    int val;
    Node *left;
    Node *right;
    Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 */

class Node {
    val: number
    left: Node | null
    right: Node | null
    next: Node | null

    constructor(val?: number, left?: Node, right?: Node, next?: Node) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
        this.next = next === undefined ? null : next
    }
}

function connect(root: Node | null): Node | null {
    return
}
