/* 
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
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

// DFS
// function maxDepth(root: TreeNode | null): number {
//     if (!root) return 0;
//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// }

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// BFS
function maxDepth(root: TreeNode | null): number {
    let node = root;
    const queue = [node];
    let level = 0;

    while (queue.length) {
        let len = queue.length;

        while (len--) {
            const node = queue.shift();
            node?.left && queue.push(node.left);
            node?.right && queue.push(node.right);
        }

        level++;
    }

    return level;
}

/*
T.C.: O(N)
S.C.: O(N) for unbalanced tree (worst case)
*/

/* ------------------------------------------------------------------------------- */
