/* 
https://leetcode.com/problems/task-scheduler/description/
*/

/* ------------------------------------------------------------------------------- */

function leastInterval(tasks: string[], n: number): number {
    const map = new Map<string, number>();
    let maxChar = tasks[0];
    let maxCharCount = 0;

    for (const task of tasks) {
        map.set(task, (map.get(task) ?? 0) + 1);
        if ((map.get(task) as number) > maxCharCount) {
            maxCharCount = map.get(task) as number;
            maxChar = task;
        }
    }

    let idleCount = (maxCharCount - 1) * n;

    map.forEach((count, char) => {
        if (char === maxChar) return;
        if (count === maxCharCount) idleCount -= count - 1;
        else idleCount -= count;
    });

    if (idleCount <= 0) return tasks.length;
    return idleCount + tasks.length;
}

/* ------------------------------------------------------------------------------- */

// const tasks = ['A', 'A', 'A', 'B', 'B', 'B'],
//     n = 2;

// const tasks = ['A', 'A', 'A', 'B', 'B', 'B'],
//     n = 0;
const tasks = ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
    n = 2;

console.log(leastInterval(tasks, n));
