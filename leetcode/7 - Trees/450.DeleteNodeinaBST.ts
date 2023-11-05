/* 
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return root;

    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        // found key and delete it
        if (!root.left) return root.right;
        else if (!root.right) return root.left;
        else {
            // if both left and right subtree exist, replace the target node with the minimum value of right subtree
            let current = root.right;
            while (current.left) {
                current = current.left;
            }
            root.val = current.val;

            // then delete that value from right subtree by recursively calling deleteNode
            root.right = deleteNode(root.right, root.val);
        }
    }

    return root;
}

/*
T.C.: O(log(N))
S.C.: O(H)
*/

/* ------------------------------------------------------------------------------- */
