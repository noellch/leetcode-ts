/* 
A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID.

Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that the subordination relationships have a tree structure.

The head of the company wants to inform all the company employees of an urgent piece of news. He will inform his direct subordinates, and they will inform their subordinates, and so on until all employees know about the urgent news.

The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).

Return the number of minutes needed to inform all the employees about the urgent news.
*/

/* ------------------------------------------------------------------------------- */

function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
    const adj = manager.reduce((a, c, i) => {
        if (a[manager[i]]) {
            a[manager[i]].push(i);
        } else {
            a[manager[i]] = [i];
        }

        return a;
    }, {} as { [key: number]: number[] });

    const queue: [number, number][] = [[headID, 0]];

    let result = 0;

    while (queue.length) {
        const [i, time] = queue.shift() as [number, number];
        result = Math.max(result, time);

        if (adj[i]) {
            for (const emp of adj[i]) {
                queue.push([emp, time + informTime[i]]);
            }
        }
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const n = 6,
    headID = 2,
    manager = [2, 2, -1, 2, 2, 2],
    informTime = [0, 0, 1, 0, 0, 0];

console.log(numOfMinutes(n, headID, manager, informTime));
