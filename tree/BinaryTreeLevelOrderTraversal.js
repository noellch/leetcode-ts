/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values.
 * (i.e., from left to right, level by level).
 */

var levelOrder = function (root) {
    const result = []
    const queue = []
    let levelNodes
    let temp
    let currentNode

    if (!root) return []

    queue.push(root)

    while (queue.length !== 0) {
        levelNodes = queue.length
        temp = []
        for (let i = 0; i < levelNodes; i++) {
            currentNode = queue.shift()

            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
            temp.push(currentNode.val)
        }
        result.push(temp)
    }

    return result
}
