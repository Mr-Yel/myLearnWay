/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = (words) => {
  words.sort();
  let res = "";
  const set = new Set([""]);
  for (const word of words) {
    if (set.has(word.slice(0, -1))) {
      if (word.length > res.length) {
        res = word;
      }
      set.add(word);
    }
  }
  return res;
};

// 720. 词典中最长的单词
// 给出一个字符串数组 words 组成的一本英语词典。返回 words 中最长的一个单词，该单词是由 words 词典中其他单词逐步添加一个字母组成。

// 若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。

// 示例 1：

// 输入：words = ["word","wo","wor","worl", "world"]
// 输出："world"
// 解释： 单词"world"可由"word", "wo", "wor", 和 "worl"逐步添加一个字母组成。
// 示例 2：

// 输入：words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
// 输出："apple"
// 解释："apply" 和 "apple" 都能由词典中的单词组成。但是 "apple" 的字典序小于 "apply"

// 提示：

// 1 <= words.length <= 1000
// 1 <= words[i].length <= 30
// 所有输入的字符串 words[i] 都只包含小写字母。
