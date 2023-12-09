/* 
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    let node = root;
    const queue: TreeNode[] = [node];
    const result: number[][] = [];

    while (queue.length) {
        let len = queue.length;
        const levelValues: number[] = [];
        while (len--) {
            const node = queue.shift() as TreeNode;
            levelValues.push(node.val);

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        if (result.length % 2) levelValues.reverse();
        result.push(levelValues);
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */
