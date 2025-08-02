/* 
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.
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

function maxPathSum(root: TreeNode | null): number {
    let maxPathSum = -Infinity;

    function dfs(node: TreeNode | null) {
        if (!node) return 0;

        // 有可能是負數
        let leftMax = Math.max(dfs(node.left), 0);
        let rightMax = Math.max(dfs(node.right), 0);

        maxPathSum = Math.max(maxPathSum, leftMax + rightMax + node?.val);

        return Math.max(leftMax, rightMax) + node?.val;
    }

    dfs(root);

    return maxPathSum;
}

/*
T.C.: O(N)
S.C.: O(H)
*/

/* ------------------------------------------------------------------------------- */
