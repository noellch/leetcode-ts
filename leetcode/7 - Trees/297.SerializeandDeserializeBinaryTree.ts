/* 
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
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

// pre-order traversal

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    let result: string[] = [];

    function dfs(node: TreeNode | null) {
        if (!node) {
            result.push('N');
            return;
        }

        result.push(node.val + '');
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return result.join(',');
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const values = data.split(',');
    let i = 0;

    function dfs() {
        if (values[i] === 'N') {
            i++;
            return null;
        }

        const node = new TreeNode(+values[i]);
        i++;
        node.left = dfs();
        node.right = dfs();
        return node;
    }

    return dfs();
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/* ------------------------------------------------------------------------------- */
