/* 
Given a string s, partition s such that every substring of the partition is a palindrome. 
Return all possible palindrome partitioning of s.
*/

/* ------------------------------------------------------------------------------- */

function partition(s: string): string[][] {
    const result: string[][] = [];
    const part: string[] = [];

    function dfs(idx: number) {
        if (idx >= s.length) return result.push([...part]);

        for (let i = idx; i < s.length; i++) {
            if (isPalindrome(s, idx, i)) {
                part.push(s.substring(idx, i + 1));
                dfs(i + 1);
                part.pop();
            }
        }
    }
    dfs(0);

    return result;
}

function isPalindrome(s: string, l: number, r: number) {
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }

    return true;
}

/*
T.C.: O(2^N)
- O(N⋅2N), where N is the length of the string s. In the worst case, there could be 2^N possible substrings and it will take O(N) to generate each substring using substring. However, we are eliminating one additional iteration to check if the substring is a palindrome or not.

S.C.: O(N)
- O(N * N), where N is the length of the string s. The recursive call stack would require N space as in Approach 1. Additionally we also use 2 dimensional array of size N* N
- This gives us a total space complexity of O(N * N) + O(N) = O(N * N)
*/

/* ------------------------------------------------------------------------------- */

const s = 'adab';
// const s = "a"

console.log(partition(s));
