/* Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value. */

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

/* ------------------------------------------------------------------------------- */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

/* 
recursively 遍歷兩顆 tree 的每個 node。
若 node 同時不存在 return true。
若 node 同時存在但值不同 return false。
若 node 不同時存在 return false。
*/

/**
 * T.C.: O(n)
 * n 是 tree 的 node 結點數，因為會造訪每個 node 一次。
 *
 * S.C.: O(logn) in best case and O(n) in worst case。
 * best case 是兩邊的 subtree 平衡的狀況。這時 call stack 會佔用 tree 的高度是 logn。
 * worst case 是完全不平衡的 tree。這時 call stack 會佔用 tree 的高度是 n。
 *
 */

/* ------------------------------------------------------------------------------- */
