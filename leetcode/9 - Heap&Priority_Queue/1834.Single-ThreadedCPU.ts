/* 
https://leetcode.com/problems/single-threaded-cpu/description/
*/

/* ------------------------------------------------------------------------------- */

function getOrder(tasks: number[][]): number[] {
    const result: number[] = [];

    tasks.forEach((task, i) => task.push(i));
    tasks.sort((a, b) => a[0] - b[0]);
    let i = 0,
        time = tasks[0][0];

    const heap = new MinPriorityQueue({
        compare: (a, b) => {
            if (a[0] === b[0]) return a[1] - b[1];
            return a[0] - b[0];
        },
    });

    while (!heap.isEmpty() || i < tasks.length) {
        while (i < tasks.length && time >= tasks[i][0]) {
            heap.enqueue([tasks[i][1], tasks[i][2]]); // [processTime, index]
            i += 1;
        }

        if (!heap.isEmpty()) {
            const [processTime, idx] = heap.dequeue();
            time += processTime;
            result.push(idx);
        } else {
            time = tasks[i][0];
        }
    }

    return result;
}

/* ------------------------------------------------------------------------------- */

const tasks = [
    [35, 36],
    [11, 7],
    [15, 47],
    [34, 2],
    [47, 19],
    [16, 14],
    [19, 8],
    [7, 34],
    [38, 15],
    [16, 18],
    [27, 22],
    [7, 15],
    [43, 2],
    [10, 5],
    [5, 4],
    [3, 11],
];
console.log(getOrder(tasks));
