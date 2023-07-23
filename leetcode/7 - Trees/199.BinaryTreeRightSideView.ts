/* 
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
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

// BFS
// function rightSideView(root: TreeNode | null): number[] {
//     if (!root) return [];
//     const node = root;
//     const queue = [node];
//     const result: number[] = [];

//     while (queue.length) {
//         let len = queue.length;

//         for (let i = 0; i < len; i++) {
//             const node = queue.shift();
//             if (node) {
//                 if (i === len - 1) result.push(node.val);
//                 node.left && queue.push(node.left);
//                 node.right && queue.push(node.right);
//             }
//         }
//     }

//     return result;
// }

/*
T.C.: O(N)
S.C.: O(W)
*/

/* ------------------------------------------------------------------------------- */

// DFS
function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];
    let result: number[] = [];

    function dfs(node: TreeNode | null, h: number) {
        if (!node) return null;

        result[h] = node.val;

        dfs(node.left, h + 1);
        dfs(node.right, h + 1);
    }

    dfs(root, 0);
    return result;
}

/*
T.C.: O(N)
S.C.: O(H)
*/

/* ------------------------------------------------------------------------------- */
