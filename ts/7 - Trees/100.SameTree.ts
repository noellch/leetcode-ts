/* 
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/

/* ------------------------------------------------------------------------------- */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true;
    if (!p || !q) return false;

    const isSameLeft = isSameTree(p.left, q.left);
    const isSameRight = isSameTree(p.right, q.right);

    return isSameLeft && isSameRight && p.val === q.val;
}

/*
T.C.: O(N)
S.C.: O(H)
*/

/* ------------------------------------------------------------------------------- */
