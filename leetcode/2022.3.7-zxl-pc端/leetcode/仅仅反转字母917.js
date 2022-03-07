/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {
    let l = 0
    let r = s.length-1
    const arr = [...s];
    while(l <= r){
        let lasc = arr[l].charCodeAt()
        let rasc = arr[r].charCodeAt()
        if ((lasc < 65 || lasc > 90 && lasc < 97 || lasc > 122)) {
            l++
            continue
        }
        if((rasc < 65 || rasc > 90 && rasc < 97 || rasc > 122)){
            r--
            continue
        }
        let t = arr[l]
        arr[l] = arr[r]
        arr[r] = t
        l++
        r--
    }
    return arr.join('')
};

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));

// 给你一个字符串 s ，根据下述规则反转字符串：

// 所有非英文字母保留在原有位置。
// 所有英文字母（小写或大写）位置反转。
// 返回反转后的 s 。

// 示例 1：

// 输入：s = "ab-cd"
// 输出："dc-ba"
// 示例 2：

// 输入：s = "a-bC-dEf-ghIj"
// 输出："j-Ih-gfE-dCba"
// 示例 3：

// 输入：s = "Test1ng-Leet=code-Q!"
// 输出："Qedo1ct-eeLg=ntse-T!"
//  

// 提示

// 1 <= s.length <= 100
// s 仅由 ASCII 值在范围 [33, 122] 的字符组成
// s 不含 '\"' 或 '\\'