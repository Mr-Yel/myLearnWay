/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function (n) {
    let oldSet = new Set(['()']);
    for (let i = 2; i <= n; i++) {
        let newSet = new Set();
        for (let s of oldSet) {
            for (let j = 0; j <= s.length; j++) {
                newSet.add(s.slice(0, j) + '()' + s.slice(j));
            }
        }
        oldSet = newSet;
    }
    return [...oldSet];
};





// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]
//  

// 提示：

// 1 <= n <= 8
