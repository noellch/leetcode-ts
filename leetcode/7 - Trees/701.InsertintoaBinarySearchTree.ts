/* 
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
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

/* ------------------------------------------------------------------------------- */

// recursive
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return new TreeNode(val);

    if (root.val > val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }

    return root;
}

/*
T.C.: O(H)
S.C.: O(H)
*/

/* ------------------------------------------------------------------------------- */

// iterative
// function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
//     if (!root) return new TreeNode(val);

//     let current = root;

//     while (true) {
//         if (current.val > val) {
//             if (current.left === null) {
//                 current.left = new TreeNode(val);
//                 break;
//             }

//             current = current.left;
//         } else {
//             if (current.right === null) {
//                 current.right = new TreeNode(val);
//                 break;
//             }

//             current = current.right;
//         }
//     }

//     return root;
// }

/*
T.C.: O(H)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */
