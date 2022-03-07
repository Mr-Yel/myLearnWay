/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  this.grid = grid;
  this.m = grid.length;
  this.n = grid[0].length;
  this.boundary = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  this.ans = 0;

  const maxGold = (x, y, gold) => {
    gold += grid[x][y];
    this.ans = Math.max(ans, gold);

    const rec = grid[x][y];
    grid[x][y] = 0;

    for (let d = 0; d < 4; ++d) {
      const bx = x + this.boundary[d][0];
      const by = y + this.boundary[d][1];
      if (bx >= 0 && bx < m && by >= 0 && by < n && grid[bx][by] > 0) {
        maxGold(bx, by, gold);
      }
    }

    grid[x][y] = rec;
  };
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] !== 0) {
        maxGold(i, j, 0);
      }
    }
  }
  return this.ans;
};

console.log(
  getMaximumGold([
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ])
);
