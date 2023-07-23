/* 
Given the root of a binary tree, 
return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    let node = root;
    const queue = [node];
    const result: number[][] = [];

    while (queue.length) {
        let len = queue.length;
        const nodeValues: number[] = [];

        while (len--) {
            const node = queue.shift() as TreeNode;
            if (node) {
                nodeValues.push(node.val);
                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
            }
        }
        result.push(nodeValues);
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */
