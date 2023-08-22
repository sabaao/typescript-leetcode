/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
function isHappy(n: number): boolean {
  const set = new Set<number>();
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = getSum(n);
  }

  return n === 1;
}

function getSum(n: number): number {
  let sum: number = 0;
  while (n !== 0) {
    let num = n % 10;
    sum += num ** 2;
    n = Math.floor(n / 10);
  }
  return sum;
}
// @lc code=end
