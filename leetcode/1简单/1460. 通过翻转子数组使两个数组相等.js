function canBeEqual(target, arr) {
  let map = new Map()
  target.forEach(e=>{
      map.set(e,map.get(e)+1 || 1)
  })
  console.log(map);
  for(let i=0;i<arr.length;i++){
      let e = arr[i]
      console.log(e)
      if(!map.get(e)) {
          return false
      }
      map.set(e,map.get(e)-1)
  }
  return true
};

console.log(canBeEqual([1,2,3,4], [2,4,1,3]));