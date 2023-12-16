/* 
Given the root of a binary tree, return the maximum width of the given tree.

The maximum width of a tree is the maximum width among all levels.

The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

It is guaranteed that the answer will in the range of a 32-bit signed integer.
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

function widthOfBinaryTree(root: TreeNode | null) {
    const queue: [TreeNode | null, bigint, number][] = [[root, 1n, 0]]; // [node, numFlag, level]
    let result = 0n;
    let currentLevel = 0;
    let currentNum = 1n;

    while (queue.length) {
        const [node, num, level] = queue.shift() as [TreeNode | null, bigint, number];

        if (level > currentLevel) {
            currentLevel = level;
            currentNum = num;
        }

        result = result > num - currentNum + 1n ? result : num - currentNum + 1n;

        node?.left && queue.push([node.left, num * 2n, level + 1]);
        node?.right && queue.push([node.right, num * 2n + 1n, level + 1]);
    }

    return result;
}

/* ------------------------------------------------------------------------------- */

/*
T.C.: O(N)
S.C.: O(N)
*/
