/* 
Given the root of a binary tree, return all duplicate subtrees.

For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with the same node values.
*/

/* ------------------------------------------------------------------------------- */

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

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
    const hashMap = new Map<string, TreeNode[]>();

    const result: TreeNode[] = [];

    function dfs(node: TreeNode | null) {
        if (!node) return 'null';

        const s = [node.val.toString(), dfs(node.left), dfs(node.right)].join(', ');

        if (!hashMap.has(s)) {
            hashMap.set(s, [node]);
        } else {
            if (hashMap.get(s)?.length === 1) result.push(node);
            hashMap.set(s, [...(hashMap.get(s) as TreeNode[]), node]);
        }

        return s;
    }

    dfs(root);

    return result;
}

/* ------------------------------------------------------------------------------- */

/*
T.C.: O(N^2)
S.C.: O(N)
*/
