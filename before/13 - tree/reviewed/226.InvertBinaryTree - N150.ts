/** Given the root of a binary tree, invert the tree, and return its root. */

// Definition for a binary tree node.

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

// dfs
function invertTree_dfs(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    let node = root;

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    invertTree_dfs(node.left);
    invertTree_dfs(node.right);

    return root;
}

/* 
T.C.: O(n)
S.C.: O(n)
每個 node 都會被訪問過一次，所以 T.C. 是 O(n)。
因為使用了遞迴，在 worst case 下每次的 function call 都會佔用 stack 的位置，所以 S.C. 是 O(n)。
*/

/* ------------------------------------------------------------------------------- */

//bfs
function invertTree_bfs(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    let node = root;
    const queue: TreeNode[] = [node];

    while (queue.length) {
        node = queue.shift()!;
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);

        const temp = node.left;
        node.left = node.right;
        node.right = temp;
    }

    return root;
}

/* 
T.C.: O(n)
S.C.: O(n)
每個 node 都會被訪問過一次，所以 T.C. 是 O(n)。
在 worst case 下，queue 會包含同一個 level 的所有 nodes；對於 full binary tree 最後一層的 leaf 共有 n/2 個，
所以 S.C. 等於 O(n/2) => O(n)
*/

/* ------------------------------------------------------------------------------- */
