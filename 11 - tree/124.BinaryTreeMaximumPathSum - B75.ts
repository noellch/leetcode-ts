/**
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only
 * appear in the sequence at most once. Note that the path does not need to pass through the root.
 * The path sum of a path is the sum of the node's values in the path.
 * Given the root of a binary tree, return the maximum path sum of any non-empty path.
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

function maxPathSum(root: TreeNode | null): number {
    let maxPathSumNum = -Infinity
    let node = root

    function dfs(node: TreeNode): number {
        // base case。若 node === null，表示已經到達 tree 底部，返回 0 讓 parent node.val 加上後不會改變值
        if (!node) return 0

        // 若 node.left 這半邊返回的 max 小於 0，左邊往下都可以不需要考慮了...因為為加上負數只會使 max sum 更小。
        // 所以遇到負數只取零，因為 0 + node.val = node.val
        const maxLeft = Math.max(dfs(node.left), 0)
        // 同理 node.right
        const maxRight = Math.max(dfs(node.right), 0)
        // 若考慮 node 為頂端的 parent，這個 sub-tree 的 max path sum為 maxLeft + node.val + maxRight
        // 不斷更新 maxPathSumNum
        maxPathSumNum = Math.max(maxPathSumNum, maxLeft + node.val + maxRight)

        // 返回左右兩邊其中的最大的值加上當下所在的 node.val，以此返回為向上一層的 maxLeft 或 maxRight
        return node.val + Math.max(maxLeft, maxRight)
    }

    dfs(node)

    return maxPathSumNum
}
