/**
 * Given a reference of a node in a connected undirected graph.
 * Return a deep copy (clone) of the graph.
 * Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
 * class Node {
 *  public int val;
 *  public List<Node> neighbors;
 * }
 *
 *
 * Test case format:
 *
 * For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with v
 *  == 2, and so on. The graph is represented in the test case using an adjacency list.
 * An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the
 * graph.
 *
 * The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.
 */

//? 複製一個 graph。

var cloneGraph = function (node) {
    if (!node) return null

    // 儲存複製的 node
    const map = new Map()
    return (function clone(root) {
        if (!map.has(root.val)) {
            map.set(root.val, new Node(root.val))
            // 對每一個 neighbor 新增 node
            map.get(root.val).neighbors = root.neighbors.map(clone)
        }
        // 返回 root node
        return map.get(root.val)
    })(node)
}
