var each = function (ary, callback) {
  for (var i = 0, l = ary.length; i < l; i++) {
    callback(i, ary[i]); // 把下标和元素当作参数传给callback函数
  }
};

let arr = ["a", "b", "c"];

// each(arr, function (i, n) {
//   console.log([i, n]);
// });

/************************************ */

class Iterator {
  //遍历器
  constructor(container) {
    this.list = container.list;
    this.current = 0;
    this.length = container.list.length;
  }
  next = () => (this.current += 1);
  isDone = () => this.current >= this.list.length;
  getCurrItem = () => {
    return this.list[this.current];
  };
  getCurrIndex = () => {
    return this.current;
  };
}

class Container {
  //容器
  constructor(list) {
    this.list = list;
  }
  //生成遍历器
  getIterator() {
    return new Iterator(this);
  }
}

let container = new Container(["a", "b", "c"]);

let inerator = container.getIterator();

console.log(inerator.length);

while (!inerator.isDone()) {
  console.log(inerator.getCurrItem(), inerator.getCurrIndex());
  inerator.next();
}

/************************************ */
