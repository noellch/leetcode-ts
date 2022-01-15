/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 */

// solution 1
var isValidBST = function (root) {
    const node = []

    function traverse(root) {
        if (root.left) traverse(root.left)
        node.push(root.val)
        if (root.right) traverse(root.right)
    }

    traverse(root)

    for (let i = 0; i < node.length; i++) {
        if (node[i] >= node[i + 1]) return false
    }

    return true
}

// solution 2
var isValidBST = function (root, min = null, max = null) {
    if (!root) return true

    if (max && root.val >= max.val) return false
    if (min && root.val <= min.val) return false

    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max)
}
