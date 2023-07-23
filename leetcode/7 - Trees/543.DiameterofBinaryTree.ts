/* 
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    function dfs(node: TreeNode | null) {
        if (!node) return 0;

        const leftMaxHeight = dfs(node.left);
        const rightMaxHeight = dfs(node.right);
        diameter = Math.max(diameter, leftMaxHeight + rightMaxHeight);

        return Math.max(leftMaxHeight, rightMaxHeight) + 1;
    }

    dfs(root);

    return diameter;
}

/*
T.C.: O(N)
S.C.: O(H)
H stands for the height of the tree cause the max number of function calls in the stack will equal the height of the tree.
*/

/* ------------------------------------------------------------------------------- */
