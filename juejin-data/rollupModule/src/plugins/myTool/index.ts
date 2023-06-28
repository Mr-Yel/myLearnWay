import "./style.css";

/**
 * @author hxk
 * @link	链接
 * @namespace	EasyDice
 * @requires	tween.js
 * @return	EasyDice
 * @param target	{[element]}  当前需要显示动画的元素
 * @param config	{[object]}  动画设置
 * @version 1.0
 */

interface EasyDiceInter {
    target: HTMLLIElement
}

export default class EasyDice<EasyDiceInter> {

  target: HTMLLIElement;
  
  constructor(target: HTMLLIElement, config = {}) {
    this.target = target;
    this.createElm();
  }

  createElm() {
    let dice = document.createElement("div");
    dice.className = "easy-dice";
    this.target.appendChild(dice);
  }
}
