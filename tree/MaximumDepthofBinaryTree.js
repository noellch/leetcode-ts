/* Q: Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. */

var maxDepth = function (root) {
    if (!root) return 0

    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right))
}

//* 這題不爭氣的直接看了解答...
//* 使用 recursion。

/* A:  */
// 1. node.left 跟 node.right 一直往最底找。找到 node.left 跟 node.right 都不存在的節點會返回 1 + Math.max(0, 0) 也就是 1 + 0 = 1
// 2. 每往上一層返回的值都會 + 1。
// 3. 最後 root 比較的是 root.left 跟 root.right 哪一個返回得值較大。然後再加 1。
