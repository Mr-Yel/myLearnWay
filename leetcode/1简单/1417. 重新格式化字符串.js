function reformat(s) {
  let arr1 = []
  let arr2 = []
  for(let ch of s){
    if(parseInt(ch)>=0){
      arr1.push(ch)
    } else {
      arr2.push(ch)
    }
  }
  if(Math.abs(arr1.length-arr2.length) > 1){
    return ''
  }
  let flag1 = 0
  let flag2 = 0
  let str = ''
  if(arr1[flag1] && arr2[flag2]) {
    str+= arr1[flag1] + arr2[flag2]
    flag1
  }
  
  return str
};

console.log(reformat('cevid2019'));