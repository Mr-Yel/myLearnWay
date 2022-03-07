/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
 var gridIllumination = function(n, lamps, queries) {
    const row = new Map();
    const column = new Map();
    const diagonal = new Map();
    const antiDiagonal = new Map();
    const lights = new Set();
    for (const lamp of lamps) {
        if (lights.has(coordinate(lamp[0], lamp[1]))) {
            continue;
        }
        lights.add(coordinate(lamp[0], lamp[1]));
        row.set(lamp[0], (row.get(lamp[0]) || 0) + 1);
        column.set(lamp[1], (column.get(lamp[1]) || 0) + 1);
        diagonal.set(lamp[0] - lamp[1], (diagonal.get(lamp[0] - lamp[1]) || 0) + 1);
        antiDiagonal.set(lamp[0] + lamp[1], (antiDiagonal.get(lamp[0] + lamp[1]) || 0) + 1);
    }
    const ans = new Array(queries.length).fill(0);
    for (const [i, [queriesX, queriesY]] of queries.entries()) {
        if (row.get(queriesX) || column.get(queriesY) || diagonal.get(queriesX - queriesY) || antiDiagonal.get(queriesX + queriesY)) {
            ans[i] = 1;
        }
        for (let x = queriesX - 1; x < queriesX + 2; x++) {
            for (let y = queriesY - 1; y < queriesY + 2; y++) {
                if (x < 0 || y < 0 || x >= n || y >= n || !lights.has(coordinate(x, y))) {
                    continue;
                }
                lights.delete(coordinate(x, y));
                row.set(x, row.get(x) - 1);
                column.set(y, column.get(y) - 1);
                diagonal.set(x - y, diagonal.get(x - y) - 1);
                antiDiagonal.set(x + y, antiDiagonal.get(x + y) - 1);
            }
        }
    }
    return ans;
}

const coordinate = (x, y) => {
    return  x + ',' + y;
};

console.log(gridIllumination(5,
    [[0,0],[4,4]],
    [[1,1],[1,0]]));