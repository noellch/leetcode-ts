/**
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisite
 * [i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 * Return true if you can finish all courses. Otherwise, return false.
 */

//? DAG（directed acyclic graph）
//? Topological Sort（拓撲排序）

// BFS
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

// DFS
// 目的是尋找 graph 中有沒有存在 cycle.
var canFinish = function (numCourses, prerequisites) {
    const graph = new Map()
    const visited = new Set()
    const visiting = new Set()

    function dfs(vertex) {
        visiting.add(vertex)

        if (graph.has(vertex)) {
            const children = graph.get(vertex)
            for (const child of children) {
                if (visited.has(child)) {
                    continue
                }

                if (visiting.has(child)) return true

                if (dfs(child)) return true
            }
        }

        visiting.delete(vertex)
        visited.add(vertex)
        return false
    }

    for (const [course, preReq] of prerequisites) {
        if (graph.has(preReq)) {
            graph.get(preReq).push(course)
        } else {
            graph.set(preReq, [course])
        }
    }

    for (const [course, preReq] of prerequisites) {
        if (dfs(preReq)) {
            return false
        }
    }

    return true
}

const input = [
    [1, 0],
    [0, 1],
]
console.log(canFinish(2, input))
