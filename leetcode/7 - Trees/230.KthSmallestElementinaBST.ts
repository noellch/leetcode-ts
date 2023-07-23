/* 
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
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

/* ------------------------------------------------------------------------------- */

// function kthSmallest(root: TreeNode | null, k: number): number {
//     const data: number[] = [];

//     let node = root;

//     (function traverse(node: TreeNode) {
//         if (node.left) traverse(node.left);
//         data.push(node.val);
//         if (node.right) traverse(node.right);
//     })(node);

//     return data[k - 1];
// }

/* ------------------------------------------------------------------------------- */

function kthSmallest(root: TreeNode | null, k: number): number {
    const stack: TreeNode[] = [];
    let n = 0;
    let current = root;

    while (true) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop() as TreeNode;
        n++;

        if (n === k) return current.val;
        current = current.right;
    }
}

/**
 * 使用 in-order 的順序確認第 k 個值。這個方法不需要遍歷整個 tree，找到第 k 個最小值後直接 return。
 */

/*
T.C.: O(N)
S.C.: O(H) the nodes in stack would be the height of the tree most.
*/

/* ------------------------------------------------------------------------------- */
