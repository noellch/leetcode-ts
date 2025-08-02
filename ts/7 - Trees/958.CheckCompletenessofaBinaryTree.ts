/* 
Given the root of a binary tree, determine if it is a complete binary tree.

In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
*/

/* ------------------------------------------------------------------------------- */

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

function isCompleteTree(root: TreeNode | null): boolean {
    const queue: (TreeNode | null)[] = [root];

    while (queue.length > 0) {
        const node = queue.shift();

        if (node) {
            queue.push(node.left);
            queue.push(node.right);
        } else {
            // 遇到第一個 null 之後，預期接下來的節點都要是 null。
            while (queue.length > 0) {
                if (queue.shift()) return false;
            }
        }
    }

    return true;
}

/* ------------------------------------------------------------------------------- */

/*
T.C.: O(N)
S.C.: O(2^(H-1))
取決於最後一層的節點數。在最壞情況下，空間複雜度會是O(N/2)。
*/
