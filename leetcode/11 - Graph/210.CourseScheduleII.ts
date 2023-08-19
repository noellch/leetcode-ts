/* 
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.
*/

/* ------------------------------------------------------------------------------- */

// dfs;
// function findOrder(numCourses: number, prerequisites: number[][]): number[] {
//     const map: { [crs: number]: number[] } = {};

//     for (const [crs, prq] of prerequisites) {
//         if (map[crs]?.length) map[crs].push(prq);
//         else map[crs] = [prq];
//     }

//     const cycle = new Set<number>();
//     const visited = new Set<number>();

//     function dfs(crs: number) {
//         if (cycle.has(crs)) return false;
//         if (visited.has(crs)) return true;

//         cycle.add(crs);

//         if (map[crs]) {
//             for (const c of map[crs]) {
//                 if (!dfs(c)) return false;
//             }
//         }

//         cycle.delete(crs);
//         visited.add(crs);
//         return true;
//     }

//     for (let i = 0; i < numCourses; i++) {
//         if (!dfs(i)) return [];
//     }

//     return Array.from(visited);
// }

/* ------------------------------------------------------------------------------- */

// bfs
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const dependencyCount = Array(numCourses).fill(0);

    for (const [crs, prq] of prerequisites) {
        ++dependencyCount[crs];
    }

    const queue: number[] = [];
    const result: number[] = [];

    dependencyCount.forEach((preqCount, crs) => {
        if (preqCount === 0) queue.push(crs);
    });

    while (queue.length > 0) {
        const c = queue.shift() as number;
        --numCourses;
        result.push(c);

        for (const [crs, preq] of prerequisites) {
            if (preq === c) {
                --dependencyCount[crs];
                if (dependencyCount[crs] === 0) {
                    queue.push(crs);
                }
            }
        }
    }

    return numCourses === 0 ? result : [];
}

/* ------------------------------------------------------------------------------- */

/*
T.C.: O(E + V)
- 在最壞的情況下，我們需要遍歷所有的課程和相關的先後關係。因此，總的時間複雜度是 O(V + E)，其中 V 是課程的總數(vertices)，E 是先後關係的數量 (edges)。
S.C.: O(E + 2V)
- 在使用拓撲排序時，我們需要使用額外的數據結構來記錄每個節點的入度以及相關的先後關係。同時，我們還需要一個隊列來進行拓撲排序。因此，額外的空間複雜度是 O(V + E)。
- 另外，解這個問題還需要返回一個課程學習順序的列表，該列表的大小是課程的總數，即 V。因此，這部分的空間複雜度是 O(V)。
*/

const numCourses = 4,
    prerequisites = [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
    ];

console.log(findOrder(numCourses, prerequisites));
