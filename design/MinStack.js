/* Q: Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
  */

var MinStack = function () {
    this.minStack = []
    // 建立一個 array 來存放最小值，這個 array 的最後一位會是最小，依序往上
    this.min = []
}

MinStack.prototype.push = function (val) {
    this.minStack.push(val)

    const m = this.getMin()

    if (m === undefined || val <= m) {
        this.min.push(val)
    }

    return this
}

MinStack.prototype.pop = function () {
    const p = this.minStack.pop()
    if (p === this.getMin()) {
        this.min.pop()
    }
    return this
}

MinStack.prototype.top = function () {
    return this.minStack[this.minStack.length - 1]
}

MinStack.prototype.getMin = function () {
    return this.min[this.min.length - 1]
}

const m = new MinStack()
m.push(0)
m.push(1)
m.push(0)
m.push(2)
console.log(m)
console.log(m.getMin())
m.pop()

console.log(m.getMin())

//* 這題用一般想法解並不難，但重點是要想到把最小的值也用 stack 來處理，才能增加效能。
