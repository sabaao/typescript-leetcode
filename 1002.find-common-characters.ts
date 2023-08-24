/*
 * @lc app=leetcode id=1002 lang=typescript
 *
 * [1002] Find Common Characters
 */

// @lc code=start
function commonChars(words: string[]): string[] {
  let map = new Map<string, number>();
  const initWord: [string, number][] = words[0].split("").map((value) => {
    return [value, 0];
  });
  for (let value of words[0]) {
    map.set(value, map.has(value) ? map.get(value) + 1 : 1);
  }

  for (let i = 1; i < words.length; i++) {
    const wordMap = new Map<string, number>(initWord);
    for (let j = 0; j < words[i].length; j++) {
      const s = words[i][j];
      if (!map.has(s)) {
        continue;
      }

      if (map.get(s) > wordMap.get(s)) {
        wordMap.set(s, wordMap.has(s) ? wordMap.get(s) + 1 : 1);
      }
    }
    map = wordMap;
  }
  //   console.log(map);
  let result: string = "";
  map.forEach((value, key) => {
    result += key.repeat(value);
  });

  return result.split("");
}
// @lc code=end
