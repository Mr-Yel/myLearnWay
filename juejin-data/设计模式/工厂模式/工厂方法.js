class Card {
  constructor(opt) {
    if (new.target === Card) {
      throw new Error("抽象类不能被实例化");
    }
    this.name = (opt && opt.name) || "";
    this.calculate = (opt && opt.calculate) || null;
  }
}
class CardFactory extends Card {
  constructor(name, calculate) {
    super(name, calculate);
  }
  getInstance(role) {
    switch (role) {
      case "common":
        return new CardFactory({
          name: "普通会员",
          calculate: (price) => {
            return price * 0.9;
          },
        });
        break;
      case "sliver":
        return new CardFactory({
          name: "白银会员",
          calculate: (price) => {
            return price * 0.8;
          },
        });
        break;
      case "glod":
        return new CardFactory({
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

let cardFactory = new CardFactory();

let common = cardFactory.getInstance("common");
console.log(common.calculate(100));

let sliver = cardFactory.getInstance("sliver");
console.log(sliver.calculate(100));

let glod = cardFactory.getInstance("glod");
console.log(glod.calculate(100));
