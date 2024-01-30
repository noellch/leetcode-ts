/* 
You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.
*/

/* 
Connected Undirected Graph - Minimum Spanning Tree: MST
*/

/* ------------------------------------------------------------------------------- */
// Prim's Algorithm
class MinHeap {
    data: number[][];

    constructor(data: number[][]) {
        this.data = data;
    }

    insert(val: number[]) {
        this.data.push(val);
        this.bubbleUp();
    }

    private bubbleUp() {
        let idx = this.data.length - 1;
        let ele = this.data[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentEle = this.data[parentIdx];

            if (ele[0] >= parentEle[0]) break;

            this.data[parentIdx] = ele;
            this.data[idx] = parentEle;
            idx = parentIdx;
        }
    }

    extractMin() {
        let min = this.data[0];
        const last = this.data.pop() as [number, number];
        if (this.data.length > 0) {
            this.data[0] = last;
            this.sinkDown();
        }

        return min;
    }

    private sinkDown() {
        let idx = 0;
        let ele = this.data[idx];
        let len = this.data.length;

        while (true) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let leftChild: number[] | null = null;
            let rightChild: number[] | null = null;
            let swap: number | null = null;

            if (leftIdx < len) {
                leftChild = this.data[leftIdx];
                if (leftChild[0] < ele[0]) {
                    swap = leftIdx;
                }
            }

            if (rightIdx < len) {
                rightChild = this.data[rightIdx];
                if (
                    (swap === null && rightChild[0] < ele[0]) ||
                    (swap !== null && rightChild[0] < (leftChild as [number, number])[0])
                ) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;

            this.data[idx] = this.data[swap];
            this.data[swap] = ele;
            idx = swap;
        }
    }
}

function minCostConnectPoints(points: number[][]): number {
    // build all edges
    const adj: { [key: number]: number[][] } = {};

    for (let i = 0; i < points.length; i++) {
        adj[i] = [];
    }

    for (let j = 0; j < points.length; j++) {
        const [x1, y1] = points[j];
        for (let k = j + 1; k < points.length; k++) {
            const [x2, y2] = points[k];
            const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            adj[j].push([distance, k]);
            adj[k].push([distance, j]);
        }
    }

    //Prim's Algorithm
    let result = 0;
    const visit = new Set<number>();
    const heap = new MinHeap([[0, 0]]);

    while (visit.size < points.length) {
        const [cost, p] = heap.extractMin();
        if (visit.has(p)) continue;
        result += cost;
        visit.add(p);

        for (const [neiCost, nei] of adj[p]) {
            if (!visit.has(nei)) {
                heap.insert([neiCost, nei]);
            }
        }
    }

    return result;
}

/*
T.C.: O(N^2 * log(N)) // priority queue operation
S.C.: O(N) // store visited node
*/

/* ------------------------------------------------------------------------------- */

// Kruskal's Algorithm
// class UnionFind {
//     parent: number[];
//     rank: number[];

//     constructor(edges: number) {
//         this.parent = [];
//         this.rank = [];
//         for (let i = 0; i <= edges; i++) {
//             this.parent[i] = i;
//             this.rank[i] = 1;
//         }
//     }

//     // T.C. = worst O(N), general O(1)
//     find(node: number) {
//         if (node !== this.parent[node]) {
//             this.parent[node] = this.find(this.parent[node]);
//         }

//         return this.parent[node];
//     }

//     // T.C. = worst O(N), general O(1)
//     union(node1: number, node2: number) {
//         const p1 = this.find(node1);
//         const p2 = this.find(node2);

//         if (p1 === p2) return false;

//         if (this.rank[p1] < this.rank[p2]) {
//             this.parent[p1] = p2;
//             this.rank[p2] += this.rank[p1];
//         } else {
//             this.parent[p2] = p1;
//             this.rank[p1] += this.rank[p2];
//         }

//         return true;
//     }
// }

// function minCostConnectPoints(points: number[][]): number {
//     const len = points.length;
//     let result = 0;
//     const edges: number[][] = [];

//     // T.C. = O(N^2)
//     for (let i = 0; i < len; i++) {
//         const [x1, y1] = points[i];
//         for (let j = i + 1; j < len; j++) {
//             const [x2, y2] = points[j];
//             const distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
//             edges.push([i, j, distance]);
//         }
//     }

//     // T.C. = O(log(N))
//     edges.sort((a, b) => a[2] - b[2]);

//     const unionFind = new UnionFind(len);

//     // T.C. = O(N)
//     for (const [u, v, distance] of edges) {
//         if (unionFind.union(u, v)) {
//             result += distance;
//         }
//     }

//     return result;
// }

/*
T.C.: O(N^2 * log(N)) // due to the sort operation
S.C.: O(N^2) // store all the edges
*/
/* ------------------------------------------------------------------------------- */

const points = [
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
];
console.log(minCostConnectPoints(points));
