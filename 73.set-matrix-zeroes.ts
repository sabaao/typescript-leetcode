/*
 * @lc app=leetcode id=73 lang=typescript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const row: boolean[] = new Array(matrix.length).fill(false);
  const column: boolean[] = new Array(matrix[0].length).fill(false);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }

  for (let r = 0; r < row.length; r++) {
    if (row[r] === true) {
      for (let i = 0; i < matrix[r].length; i++) {
        matrix[r][i] = 0;
      }
    }
  }

  for (let c = 0; c < column.length; c++) {
    if (column[c] === true) {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i][c] = 0;
      }
    }
  }
}
// @lc code=end
