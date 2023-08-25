/*
 * @lc app=leetcode id=232 lang=typescript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
class MyQueue {
  array: number[] = [];
  constructor() {}

  push(x: number): void {
    this.array.push(x);
  }

  pop(): number {
    return this.array.shift();
  }

  peek(): number {
    return this.array[0];
  }

  empty(): boolean {
    return this.array.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
