/* 
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

 
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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;

    const dfs = (node: TreeNode | null | undefined): number => {
        // 如果 node 不存在就返回高度為 -1 讓 parent node 的高度為 -1 + 1 = 0
        if (!node) return -1;

        // 每一輪都取得目前 node 的 children node 個別的高度。
        const left = dfs(node?.left);
        const right = dfs(node?.right);

        //取得左右 children node 個別的高度後，自己本身的 diameter 就等於左高度+右高度+2
        //若這個 node 是 leaf，則 diameter 會是 -1+-1+2=0。
        diameter = Math.max(diameter, left + right + 2);

        // 返回本身 node 的高度（等於左右 child 高度的最大值加一）
        return 1 + Math.max(left, right);
    };

    dfs(root);

    return diameter;
}

/* 
每一次的 recursion 都計算一次當下 tree 的高度。
而當下 node 的最大 diameter 就是左邊 node 的高度 + 右邊 node 的高度 + 2
維護一個最大 diameter 的變數，且不斷去更新它。
*/

/*
T.C.: O(n)
S.C.: O(n)
*/

/* ------------------------------------------------------------------------------- */
