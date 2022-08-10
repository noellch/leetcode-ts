/* Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 */

// DFS with recursion
function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// BFS
function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    let lvl = 0;
    const queue: TreeNode[] = [root];

    while (queue.length) {
        let len = queue.length;

        while (len--) {
            const node = queue.shift();
            if (node?.left) queue.push(node.left);
            if (node?.right) queue.push(node.right);
        }

        lvl += 1;
    }

    return lvl;
}

/**
 * dfs and bfs both:
 * T.C.: O(n)
 * T.C.: O(n) worst case. If the tree is unbalanced.
 */
