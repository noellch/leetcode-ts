/* 
https://leetcode.com/problems/time-based-key-value-store/description/
*/

/* ------------------------------------------------------------------------------- */
class TimeMap {
    store: { [key: string]: [string, number][] };
    constructor() {
        this.store = {};
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.store[key]) this.store[key] = [];
        this.store[key].push([value, timestamp]);
    }

    get(key: string, timestamp: number): string {
        let result = '';
        const value = this.store[key];
        if (value) {
            let l = 0,
                r = value.length - 1;
            while (l <= r) {
                let mid = Math.floor((l + r) / 2);
                // 根據題幹，timestamp 一定會大於或等於之前的 timestamp，
                // 所以當 timestamp >= value[mid][1] 時要更新 result，直到找到最靠近 timestamp 的值。
                if (timestamp >= value[mid][1]) {
                    result = value[mid][0];
                    l = mid + 1;
                    // 反之，若 timestamp < value[mid][1] 時，這個 timestamp 是不合法的，
                    // 所以不更新 result 直到跳出 while loop 後 return result = ''。
                } else {
                    r = mid - 1;
                }
            }
        }

        return result;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

/*
set
T.C.: O(1)

get
T.C.: O(log(N))
*/
