class Card {
  //构造器
  constructor(opt) {
    this.name = opt.name;
    this.calculate = opt.calculate;
  }

  //静态方法
  static getInstance(role) {
    switch (role) {
      case "common":
        return new Card({
          name: "普通会员",
          calculate: (price) => {
            return price * 0.9;
          },
        });
        break;
      case "sliver":
        return new Card({
          name: "白银会员",
          calculate: (price) => {
            return price * 0.8;
          },
        });
        break;
      case "glod":
        return new Card({
          name: "黄金会员",
          calculate: (price) => {
            return price * 0.7;
          },
        });
        break;
      default:
        throw new Error("参数错误, 可选参数:common, sliver, glod");
    }
  }
}

let common = Card.getInstance("common");
console.log(common.calculate(100));

let sliver = Card.getInstance("sliver");
console.log(sliver.calculate(100));

let glod = Card.getInstance("glod");
console.log(glod.calculate(100));
