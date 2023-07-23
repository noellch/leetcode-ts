/* 
Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.
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

// DFS
function goodNodes(root: TreeNode | null): number {
    if (!root) return 0;
    function dfs(root: TreeNode | null, maxVal: number) {
        if (!root) return 0;
        maxVal = Math.max(maxVal, root.val);
        return dfs(root?.left ?? null, maxVal) + dfs(root?.right ?? null, maxVal) + (root.val >= maxVal ? 1 : 0);
    }

    return dfs(root, root.val);
}

/*
T.C.: O(N)
S.C.: O(H) (O(N) for worst case)
*/

/* ------------------------------------------------------------------------------- */
