/* 
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.
*/

//? DAG（directed acyclic graph）
//? Topological Sort（拓撲排序）

/* ------------------------------------------------------------------------------- */

// bfs
// var canFinish = function (numCourses, prerequisites) {
//     const graph = Array.from({ length: numCourses }, () => [])
//     const dependencyCount = Array(numCourses).fill(0)

//     for (const [course, preReq] of prerequisites) {
//         // index: prerequisites course, value: course
//         graph[preReq].push(course)
//         // the number of edges linked to the vertex
//         ++dependencyCount[course]
//     }

//     const queue = []

//     dependencyCount.forEach((d, i) => {
//         // 如果存在沒有任何 dependency 的 course，表示可以先完成。拿來當作起點放進 queue。
//         if (!d) {
//             // i 是 course
//             queue.push(i)
//         }
//     })

//     while (queue.length) {
//         const course = queue.shift()
//         // 完成一門課程
//         --numCourses
//         graph[course].forEach((neighbor) => {
//             // 如果 dependency 為 0，push 進 queue。
//             if (!--dependencyCount[neighbor]) {
//                 queue.push(neighbor)
//             }
//         })
//     }

//     // 如果 numCourses == 0 表示全部課程都完成。
//     return !numCourses
// }

/* ------------------------------------------------------------------------------- */

// dfs
function canFinish(_numCourses: number, prerequisites: number[][]): boolean {
    const preMap: { [crs: number]: number[] } = {};

    for (const [crs, prq] of prerequisites) {
        if (preMap[crs]?.length) preMap[crs].push(prq);
        else preMap[crs] = [prq];
    }

    // preMap = { '0': [ 1, 2 ], '1': [ 3, 4 ], '3': [ 4 ] }
    // { 課程 : [需要先修的課程們] }
    // 若是空陣列代表這個課程不需要任何先修

    // 紀錄目前遞迴所訪問的課程以及他的先修課程們。若重複存在 set 中則表示存在迴圈。
    // 1 -> 2 , 2 -> 3, 3 -> 1
    const visited = new Set<number>();

    function dfs(crs: number) {
        // 存在迴圈。
        if (visited.has(crs)) return false;
        if (!preMap[crs]?.length) return true;

        visited.add(crs);

        for (const c of preMap[crs]) {
            if (!dfs(c)) return false;
        }

        preMap[crs] = [];
        visited.delete(crs);

        return true;
    }

    for (const [crs, _prq] of prerequisites) {
        if (!dfs(crs)) {
            return false;
        }
    }

    return true;
}

/*
T.C.: O(V + E)
- 這個問題可以轉換為判斷有向圖中是否存在環。一種解法是使用拓撲排序（Topological Sorting）的方法。
- 在最壞的情況下，我們需要遍歷所有的課程和相關的先後關係。因此，總的時間複雜度是 O(V + E)，其中 V 是課程的總數，E 是先後關係的數量。

S.C.: O(V + E)
- 在使用拓撲排序時，我們需要使用額外的數據結構來記錄每個節點的入度以及相關的先後關係。
這可能是一個 set 或 map，其大小取決於課程的總數和先後關係的數量。因此，額外的空間複雜度是 O(V + E)。
*/
/* ------------------------------------------------------------------------------- */
const numCourses = 5;
const prerequisites = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [3, 4],
];

console.log(canFinish(numCourses, prerequisites));
