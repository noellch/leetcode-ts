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

/* ------------------------------------------------------------------------------- */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    const isSame = (node1: TreeNode | null, node2: TreeNode | null) => {
        if (!node1 && !node2) return true;
        if (!node1 || !node2 || node1.val !== node2.val) return false;
        return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
    };

    const dfs = (node: TreeNode | null) => {
        if (!node) return false;
        if (isSame(node, subRoot)) return true;
        return dfs(node.left) || dfs(node.right);
    };

    return dfs(root);
}

/*
T.C.: O(m * n)
S.C.: O(n)
每個 root 的節點都要去比對一次是不是跟 subRoot 完全相同，所有 T.C. 是 O(m*n)；m 是 root 節點數，n 是 subRoot 節點數。
recursion 每個節點 stack 最多會有 n 個 stack frame；n 是 subRoot 的節點數。 
*/

/* ------------------------------------------------------------------------------- */
