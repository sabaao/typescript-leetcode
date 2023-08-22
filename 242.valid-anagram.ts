/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let array: number[] = new Array(26).fill(0);
  let index: number = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    array[s.charCodeAt(i) - index]++;
    array[t.charCodeAt(i) - index]--;
  }

  return array.every((value) => value === 0);
}
// @lc code=end
