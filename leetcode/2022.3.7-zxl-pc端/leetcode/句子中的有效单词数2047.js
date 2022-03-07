/**
 * @param {string} sentence
 * @return {number}
 */
 var countValidWords = function(sentence) {
    let arr = sentence.split(' ')
    let ans = 0
    arr.forEach((elm)=>{
        let s = 0
        for(i in elm){
            if(i == 1 && !regular.small.test(elm[1])){
                break
            }
            if(regular.num.test(elm[1])){
                break
            }
            if(elm[i] == '-' &&( !regular.small.test(elm[i-1]) || i+1!=elm[i].length && !regular.small.test(elm[i+1]))){
                break
            }
            ans++
        }
    })
};
const regular = {
    small:/[a-z]/g,
    num:/[0-9]/g,
}
countValidWords("cat and  dog")