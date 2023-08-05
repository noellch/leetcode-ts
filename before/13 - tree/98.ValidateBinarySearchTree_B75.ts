/* Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 */

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

// solution1
// BST left subtree 的 nodes，一定全都小於 root.val，大於 -Infinity；
// right subtree 的 nodes，一定全都大於 root.val，小於 Infinity
function isValidBST1(root: TreeNode | null): boolean {
    function isValid(node: TreeNode, left: number, right: number) {
        if (!node) return true;
        if (node.val <= left || node.val >= right) return false;

        return isValid(node.left!, left, node.val) && isValid(node.right!, node.val, right);
    }

    return isValid(root!, -Infinity, Infinity);
}

/**
 * T.C.: O(n)
 * S.C.: O(n)
 */

// solution2
function isValidBST2(root: TreeNode | null): boolean {
    const data: number[] = [];

    function DFS(node: TreeNode) {
        if (node.left) DFS(node.left);
        data.push(node.val);
        if (node.right) DFS(node.right);
    }

    DFS(root!);

    for (let i = 0; i < data.length; i++) {
        if (data[i] >= data[i + 1]) return false;
    }

    return true;
}

/**
 * T.C.: O(n)
 * S.C.: O(n)
 */
