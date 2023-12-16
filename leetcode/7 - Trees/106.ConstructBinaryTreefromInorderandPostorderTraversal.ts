/* 
Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const map = inorder.reduce((a, c, i) => {
        return { ...a, [c]: i };
    }, {});

    function helper(l: number, r: number) {
        if (l > r) return null;

        const root = new TreeNode(postorder.pop());
        const idx = map[root.val];

        root.right = helper(idx + 1, r);
        root.left = helper(l, idx - 1);

        return root;
    }

    return helper(0, inorder.length - 1);
}

/* ------------------------------------------------------------------------------- */

/*
T.C.: O(N)
S.C.: O(H + N)
*/
