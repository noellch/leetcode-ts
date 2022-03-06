/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

/**
 * node.left 跟 node.right 一直往最底找。找到 node.left 跟 node.right 都不存在的節點會返回 1 + Math.max(0, 0) 也就是 1 + 0 = 1
 * 每往上一層返回的值都會 + 1。
 * 最後 root 比較的是 root.left 跟 root.right 哪一個返回得值較大。然後再加 1。
 */
