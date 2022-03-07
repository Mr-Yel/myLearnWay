/**
 * 策略类
 */

// 普通会员卡
class CommonCard {
  calculate(price) {
    return price * 0.9;
  }
}

// 白银会员卡
class SilverCard {
  calculate(price) {
    return price * 0.8;
  }
}

// 黄金会员卡
class GlodCard {
  calculate(price) {
    return price * 0.7;
  }
}

/**
 * 环境类Context
 */
class Shopping {
  constructor() {
    this.strategy = null; // 会员等级对应的策略对象
  }
  // 设置对应会员卡需要的策略对象
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  // 获取实际金额
  getBonus(price) {
    return this.strategy.calculate(price); // 把计算金额的操作委托给对应的策略对象
  }
}

let shopping = new Shopping();

shopping.setStrategy(new CommonCard()); // 普通会员卡
console.log(shopping.getBonus(100)); // 输出：90

shopping.setStrategy(new SilverCard()); // 白银会员卡
console.log(shopping.getBonus(100)); // 输出：80

shopping.setStrategy(new GlodCard()); // 黄金会员卡
console.log(shopping.getBonus(100)); // 输出：80
