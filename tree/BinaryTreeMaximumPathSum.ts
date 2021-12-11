/**
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only
 * appear in the sequence at most once. Note that the path does not need to pass through the root.
 * The path sum of a path is the sum of the node's values in the path.
 * Given the root of a binary tree, return the maximum path sum of any non-empty path.
 */

// Definition for a binary tree node.
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

var maxPathSum = function (root: TreeNode): number {
    let maxPathSumNum = -Infinity

    const maxPathSumRec = function (node: TreeNode) {
        // base case。若左或右為 null，表示只需判斷 node.val。返回 0 使得 node.val 加上後不會改變值。
        if (!node) return 0

        // 若 node.left 小於 0，左邊往下都可以不需要考慮了...因為為負數的話只會使 max sum 更小。
        // 所以負數只取零，因為 0 + node.val = node.val 自身。
        let leftMax = Math.max(maxPathSumRec(node.left), 0)
        // 同理 node.right 也一樣。
        let rightMax = Math.max(maxPathSumRec(node.right), 0)

        // 更新 recursion 當下的最大 max path sum。
        maxPathSumNum = Math.max(maxPathSumNum, leftMax + rightMax + node.val)

        // 因為左右只能取一邊最大值加上 node 本身當作上一層繼續計算的依據。

        //  1
        // 2 3
        //4 5

        // 4 跟 5 只能擇一，加上 2 作為以 1 為 node 時的最大 left。
        // 這個範例的  max path sum 為 5 + 2 + 1 + 3 = 11
        return Math.max(leftMax, rightMax) + node.val
    }

    maxPathSumRec(root)
    return maxPathSumNum
}
