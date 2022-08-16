/** 
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.

 */

class MinStack {
    stack: number[];
    min: number[];

    constructor() {
        this.stack = [];
        this.min = [];
    }

    push(val: number): void {
        this.stack.push(val);

        if (!this.min.length) {
            this.min = [val];
        } else {
            this.min.push(Math.min(val, this.min[this.min.length - 1]));
        }
    }

    pop(): void {
        this.stack.pop();
        this.min.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.min[this.min.length - 1];
    }
}

const minStack = new MinStack();

console.log(minStack.push(-2));
console.log(minStack.push(0));
console.log(minStack.push(-3));
console.log(minStack.min);
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.top());
console.log(minStack.getMin());

/**
 * 因為題目提到要在 O(1) 的時間複雜度下獲取 stack 中的最小值。
 * 所以我們需要一個方法來記錄每個值 push 進 stack 後，當下 stack 中的最小值是什麼。
 * 假設我們定義一個變數來記錄這個最小值，
 * 當 stack: [-2] 時，min = -2
 * 當 stack: [-2, 0] 時，min = -2
 * 當 stack: [-2, 0, -2] 時，min = -2
 * 但若這時候執行 pop 方法，我們如何知道 stack: [-2, 0] 中的最小值還是 -2。
 * 所以我們需要另一個 stack 來追蹤每個值 push 進 stack 時，它對應的這個 stack 中的最小值是什麼。
 *
 * 定義兩個 stack ，一個存放 push 進去的數，一個存放目前的最小值
 * ex:
 * stack: [-2, 0,  -3, -1,  -5, 2, 3]
 * min: [-2, -2,  -3, -3,  -5, -5, -5] // 若 push 進的值是 stack 中最小，它對應的一定是自己。若不是，他會對應到目前的最小值。
 * 每次有值 push 進 stack，就把它跟 min 的最後一位比看誰比較小。比較小的就放進 min 的最後。
 * 所以每次有值 pop 出 stack，我們就可以知道相對應的最小值是誰，然後也把它 pop 出 min。
 * 且在 getMin() 時，馬上就可以拿到 stack 中的最小值。
 */
