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
            this.min.push(val);
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

/**
 * 定義兩個 stack ，一個存放 push 進去的數，一個存放目前的最小值
 * ex:
 *
 * stack: [-2, 0, -3, -1]
 * min: [-2, -2, -3, -3]
 *
 * 因此在 getMin() 時，馬上就可以拿到 stack 中的最小值
 * 在每次 push 數值進 stack 時，同時將目前 min 中的最後一位(也就是最小值) 跟自己相比的最小值進 min。
 */
