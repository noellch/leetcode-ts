/* 
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    function isSameTree(root: TreeNode | null, subRoot: TreeNode | null) {
        if (!root && !subRoot) return true;
        if (!root || !subRoot || root.val !== subRoot.val) return false;

        return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right);
    }

    function dfs(root: TreeNode | null) {
        if (!root) return false;
        if (!subRoot) return true;

        if (isSameTree(root, subRoot)) return true;
        return dfs(root.left) || dfs(root.right);
    }

    return dfs(root);
}

/*
T.C.: O(M * N)
S.C.: O(N)
每個節點都要比對一次是不是跟 subRoot 完全相同；M 是節點總數，N 是 subRoot 節點數。
recursion：每個節點最多有 N 個 stack frame；N 是 subRoot 節點數。
*/

/* ------------------------------------------------------------------------------- */
