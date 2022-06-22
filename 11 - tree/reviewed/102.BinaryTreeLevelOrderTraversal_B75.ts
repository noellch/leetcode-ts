/* Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level). */

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

var levelOrder = function (root: TreeNode | null): number[][] {
    if (!root) return [];

    let node = root;
    const data: number[][] = [];
    const queue = [node];

    while (queue.length) {
        const lvl: number[] = [];
        let len = queue.length;

        while (len--) {
            node = queue.shift()!;
            lvl.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        data.push(lvl);
    }

    return data;
};

/**
 * T.C.: O(n)
 * S.C.: O(n)
 */
