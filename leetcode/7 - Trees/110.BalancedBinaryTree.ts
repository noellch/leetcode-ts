/* 
Given a binary tree, determine if it is height-balanced.
*/

/* 
A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
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

function isBalanced(root: TreeNode | null): boolean {
    function dfs(root: TreeNode | null) {
        if (!root) return [true, 0];
        const [balancedLeft, HeightLeft] = dfs(root.left);
        const [balancedRight, HeightRight] = dfs(root.right);
        const balanced = balancedLeft && balancedRight && Math.abs(HeightLeft - HeightRight) <= 1;

        return [balanced, Math.max(HeightLeft, HeightRight) + 1];
    }

    return dfs(root)[0];
}

/*
T.C.: O(N)
S.C.: O(H)
*/

/* ------------------------------------------------------------------------------- */
