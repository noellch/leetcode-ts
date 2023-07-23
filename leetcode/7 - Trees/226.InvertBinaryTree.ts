/* 
Given the root of a binary tree, invert the tree, and return its root.
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

// DFS
// function invertTree(root: TreeNode | null): TreeNode | null {
//     if (!root) return null;

//     let current = root;

//     const temp = current.left;
//     current.left = current.right;
//     current.right = temp;

//     invertTree(current.left);
//     invertTree(current.right);

//     return root;
// }

/*
T.C.: O(N)
S.C.: O(N)
- 每個 node 訪問一次，所以 T.C. 是 O(N)。
- 遞迴在 worst case 下每次的 function call 都會佔用 stack 的位置，所以 S.C. 是 O(n)。
*/

/* ------------------------------------------------------------------------------- */

// BFS
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    const current = root;
    const queue: TreeNode[] = [current];

    while (queue.length) {
        const node = queue.shift() as TreeNode;
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);

        const temp = node?.left;
        node.left = node?.right;
        node.right = temp;
    }

    return root;
}

/* 
T.C.: O(N)
S.C.: O(N)
- 每個 node 訪問一次，所以 T.C. 是 O(N)。
- worst case 時，queue 會包含同一個 level 的所有 nodes；對於 full binary tree 來說，最後一層的 leaf 共有 N/2 個，
所以 S.C. 等於 O(N/2) => O(N)
*/

/* ------------------------------------------------------------------------------- */
