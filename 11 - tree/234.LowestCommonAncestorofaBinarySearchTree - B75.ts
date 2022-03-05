/** Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has
 * both p and q as descendants (where we allow a node to be a descendant of itself).”
 */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // 必須要 return ，因為 lowest ancestor 只可能在左右其中一邊
    if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q)
    if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q)

    return root
}

/**
 * 如果 root.val 沒有比 p 和 q 的值大或小，表示 p 或 q 本身的值就是等於 root.val
 * 或是 p.val < root.val && root.val > q.val，這時 root 就是 p、q 的 lowest ancestor
 *
 */
