/* 
https://leetcode.com/problems/insert-delete-getrandom-o1/description/
*/

/* ------------------------------------------------------------------------------- */

class RandomizedSet {
    map: Map<number, number>;
    list: number[];

    constructor() {
        this.map = new Map();
        this.list = [];
    }

    /*
    T.C.: O(1)
    */
    insert(val: number): boolean {
        const result = !this.map.has(val);

        if (result) {
            this.map.set(val, this.list.length);
            this.list.push(val);
        }

        return result;
    }

    /*
    T.C.: O(1)
    */
    remove(val: number): boolean {
        const result = this.map.has(val);

        if (result) {
            const idx = this.map.get(val) as number;
            this.list[idx] = this.list[this.list.length - 1];
            this.list.pop();
            this.map.set(this.list[idx], idx);
            this.map.delete(val);
        }

        return result;
    }

    /*
    T.C.: O(1)
    */
    getRandom(): number {
        const randomIdx = Math.floor(Math.random() * this.list.length);
        return this.list[randomIdx];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

/* ------------------------------------------------------------------------------- */
