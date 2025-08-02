/* 
Given a n * n matrix grid of 0's and 1's only. We want to represent grid with a Quad-Tree.

Return the root of the Quad-Tree representing grid.

A Quad-Tree is a tree data structure in which each internal node has exactly four children. Besides, each node has two attributes:

val: True if the node represents a grid of 1's or False if the node represents a grid of 0's. Notice that you can assign the val to True or False when isLeaf is False, and both are accepted in the answer.
isLeaf: True if the node is a leaf node on the tree or False if the node has four children.
class Node {
    public boolean val;
    public boolean isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;
}
We can construct a Quad-Tree from a two-dimensional area using the following steps:

If the current grid has the same value (i.e all 1's or all 0's) set isLeaf True and set val to the value of the grid and set the four children to Null and stop.
If the current grid has different values, set isLeaf to False and set val to any value and divide the current grid into four sub-grids as shown in the photo.
Recurse for each of the children with the proper sub-grid.
*/

/* ------------------------------------------------------------------------------- */

class Node {
    val: boolean;
    isLeaf: boolean;
    topLeft: Node | null;
    topRight: Node | null;
    bottomLeft: Node | null;
    bottomRight: Node | null;
    constructor(
        val?: boolean,
        isLeaf?: boolean,
        topLeft?: Node,
        topRight?: Node,
        bottomLeft?: Node,
        bottomRight?: Node
    ) {
        this.val = val === undefined ? false : val;
        this.isLeaf = isLeaf === undefined ? false : isLeaf;
        this.topLeft = topLeft === undefined ? null : topLeft;
        this.topRight = topRight === undefined ? null : topRight;
        this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
        this.bottomRight = bottomRight === undefined ? null : bottomRight;
    }
}

function construct(grid: number[][]): Node | null {
    function dfs(n: number, r: number, c: number) {
        let allSame = true;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[r][c] !== grid[r + i][c + j]) {
                    allSame = false;
                    break;
                }
            }
        }

        if (allSame) {
            return new Node(!!grid[r][c], true);
        }

        n = Math.floor(n / 2);

        const topLeft = dfs(n, r, c);
        const topRight = dfs(n, r, c + n);
        const bottomLeft = dfs(n, r + n, c);
        const bottomRight = dfs(n, r + n, c + n);

        return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
    }

    return dfs(grid.length, 0, 0);
}

/* ------------------------------------------------------------------------------- */

/*
T.C.: O(N^2log(N))
S.C.: O(log(N))
*/
