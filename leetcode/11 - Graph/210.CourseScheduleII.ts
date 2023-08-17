/* 
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.
*/

/* ------------------------------------------------------------------------------- */

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const map: { [crs: number]: number[] } = {};

    for (const [crs, prq] of prerequisites) {
        if (map[crs]?.length) map[crs].push(prq);
        else map[crs] = [prq];
    }

    const cycle = new Set<number>();
    const visited = new Set<number>();
    const result: number[] = [];

    function dfs(crs: number) {
        if (cycle.has(crs)) return false;
        if (visited.has(crs)) return true;

        cycle.add(crs);

        if (map[crs]) {
            for (const c of map[crs]) {
                if (!dfs(c)) return false;
            }
        }

        cycle.delete(crs);
        visited.add(crs);
        result.push(crs);
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [];
    }

    return result;
}

/* ------------------------------------------------------------------------------- */

const numCourses = 4,
    prerequisites = [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
    ];

console.log(findOrder(numCourses, prerequisites));
