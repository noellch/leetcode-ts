/* 
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
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

function isBalanced(root: TreeNode | null): boolean {
    const dfs = (node: TreeNode | null): number => {
        if (!node) return 0;
        const left = dfs(node?.left);
        const right = dfs(node?.right);

        if (Math.abs(right - left) >= 2) return Infinity;
        return 1 + Math.max(left, right);
    };

    return dfs(root) === Infinity ? false : true;
}

/* 
一樣是 recursively 遞迴每一個 node，且計算當下 node 的高。
如果目前 node 的左右 child node 的高度相減大於等於 2，則就不是 height-balanced binary tree。
原本應該是紀錄這個 false 讓他不能被改變；等於讓最後的 dfs(root) 結果等於 false，但有點麻煩。
用返回高等於 Infinity 讓之後儘管加上其他的高也還是 Infinity 也就是讓最後的結果還是 Infinity。
因為如果沒有這段，最後會返回 tree 的高度。也就表示是 height-balanced binary tree
*/

/* ------------------------------------------------------------------------------- */
