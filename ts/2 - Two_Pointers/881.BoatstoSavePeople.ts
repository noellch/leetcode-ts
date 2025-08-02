/* 
https://leetcode.com/problems/boats-to-save-people/description/
*/

/* ------------------------------------------------------------------------------- */

function numRescueBoats(people: number[], limit: number): number {
    people.sort((a, b) => a - b);

    let l = 0,
        r = people.length - 1,
        result = 0;
    while (l <= r) {
        const remain = limit - people[r];
        r--;
        result += 1;
        if (l <= r && remain >= people[l]) {
            l++;
        }
    }

    return result;
}

/*
T.C.: O(N log N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const people = [1, 2],
//     limit = 3;
const people = [3, 2, 2, 1],
    limit = 3;
// const people = [3, 5, 3, 4],
//     limit = 5;
console.log(numRescueBoats(people, limit));
