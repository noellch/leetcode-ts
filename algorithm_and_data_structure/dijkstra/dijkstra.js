class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        return this.values.sort((a, b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    }

    Dijkstra(start, finish) {
        // 存放各 vertex 上個到達它最小 weight(distance) 的 vertex
        const previous = {};
        // 存放各 vertex 間最小 weight(distance)
        const distances = {};
        // 以 最小 distance 作為 priority 的 priority queue，priority 越小越靠前
        const nodes = new PriorityQueue();
        // 存放 priority 最小的 vertex
        let smallest;
        //to return at end
        let path = [];

        for (let vertex in this.adjacencyList) {
            // distances = { A: 0, B: Infinity, C: Infinity ....} 因為從 A 出發，所以 A 的 distance 為 0
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                // [{val: A, weight: 0}, {val: B, weight: Infinity} ...]
                nodes.enqueue(vertex, Infinity);
            }
            // previous = { A: null, B: null ... } 初始化 previous
            previous[vertex] = null;
        }

        while (nodes.values.length) {
            // 拿出 priority 最小的 vertex
            smallest = nodes.dequeue().val;

            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                // 跟 priority 最小的 vertex 有連接的 vertices
                for (let neighbor in this.adjacencyList[smallest]) {
                    // neighbor is index
                    let nextNode = this.adjacencyList[smallest][neighbor];

                    // 暫存目前最小 distances 加上下一個 vertex 的 weight(distance)
                    let candidate = distances[smallest] + nextNode.weight;

                    let nextNeighbor = nextNode.node;

                    // 若暫存的 distance 比下個 vertex 目前最小的 distance 還小，等於到達下個 vertex 的 distance 需要調整到暫存的這個值
                    if (candidate < distances[nextNeighbor]) {
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);
graph.addEdge('E', 'G', 1);

console.log(graph.Dijkstra('A', 'G'));
