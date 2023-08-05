/* 
Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.
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

const tasks = ['A', 'A', 'A', 'B', 'B', 'B'],
    n = 2;

// const tasks = ['A', 'A', 'A', 'B', 'B', 'B'],
//     n = 0;
// const tasks = ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
//     n = 2;

console.log(leastInterval(tasks, n));
