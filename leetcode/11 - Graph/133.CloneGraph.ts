/* 
https://leetcode.com/problems/clone-graph/description/
*/

/* ------------------------------------------------------------------------------- */

class GraphNode {
    val: number;
    neighbors: GraphNode[];
    constructor(val?: number, neighbors?: GraphNode[]) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

/* ------------------------------------------------------------------------------- */

// var cloneGraph = function (node: GraphNode | null): GraphNode | null {
//     if (!node) return null;

//     const map = new Map<number, GraphNode>();
//     return (function clone(root: GraphNode) {
//         if (!map.has(root.val)) {
//             map.set(root.val, new GraphNode(root.val));
//             (map.get(root.val) as GraphNode).neighbors! = root.neighbors.map(clone);
//         }

//         return map.get(root.val) as GraphNode;
//     })(node);
// };

/* ------------------------------------------------------------------------------- */

function cloneGraph(node: GraphNode | null): GraphNode | null {
    if (!node) return null;

    const map = new Map<GraphNode, GraphNode>();

    function clone(node: GraphNode) {
        if (map.has(node)) return map.get(node) as GraphNode;

        const copy = new GraphNode(node.val);

        for (const neighbor of node.neighbors) {
            copy.neighbors.push(clone(neighbor));
        }
        map.set(node, copy);

        return copy;
    }

    return clone(node);
}

/*
T.C.: O(V + E)
- 我們需要遍歷整個圖，每個節點只訪問一次。所以遍歷圖的時間複雜度是 O(V)，其中 V 代表節點的總數。
- 此外，還需要考慮每個節點的鄰居數目。假設鄰居的平均數為 E，則每個節點的複製過程需要額外花費 O(E) 的時間。因為我們需要處理每個節點的所有鄰居。
- 整體的時間複雜度是 O(V + E)。

S.C.: O(N)
- 我們需要儲存原圖對應新圖的所有節點。我們可以使用一個雜湊表（Map）來儲存每個節點和對應的新節點，這樣空間複雜度就是 O(V)，其中 V 是節點的數量。
- 此外，因為在遞迴過程中需要維護一個遞迴調用的 stack，所以空間複雜度會變成 O(V + H)，其中 H 是遞迴的深度，最壞情況下可能是整個圖的節點數。
*/

/* ------------------------------------------------------------------------------- */
