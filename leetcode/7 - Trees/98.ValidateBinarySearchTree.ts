/* 
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
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

//DFS
// function isValidBST(root: TreeNode | null): boolean {
//     function dfs(root: TreeNode | null, max: number, min: number) {
//         if (!root) return true;
//         if (root.val <= max || root.val >= min) return false;

//         return dfs(root.left, max, root.val) && dfs(root.right, root.val, min);
//     }

//     return dfs(root, -Infinity, Infinity);
// }

/*
T.C.: O(N)
S.C.: O(H)
*/

/* ------------------------------------------------------------------------------- */

//DFS 2
function isValidBST(root: TreeNode | null): boolean {
    if (!root) return false;

    const values: number[] = [];
    function dfs(root: TreeNode) {
        root?.left && dfs(root.left);
        values.push(root.val);
        root?.right && dfs(root.right);
    }

    dfs(root);

    for (let i = 0; i < values.length; i++) {
        if (values[i] >= values[i + 1]) return false;
    }

    return true;
}

/*
T.C.: O(N)
S.C.: O(H)
*/

/* ------------------------------------------------------------------------------- */
