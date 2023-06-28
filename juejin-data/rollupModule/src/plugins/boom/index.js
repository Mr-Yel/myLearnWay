import Boom from './boom/boom';
import Combo from './partical/combo';

/**
 * @author yuqian
 * @link	链接
 * @namespace	exeEmojiParticle
 * @requires	tween.js
 * @return	exeEmojiParticle
 * @param target	{[element]}  当前需要显示动画的元素
 * @param config	{[object]}  动画设置
 * @version 1.0
 */

export default class ExeEmojiParticle {
    constructor(target, config = {}) {
        this.boomChildList = [];
        this.target = target;
        this.count = 0;
        this.config = {
            boomNumber: 10,
            size: 20,
            rotate: 0,
            spread: 180,
            life: .4e3,
            delayRange: 0,
            power: 1,
            gravity: 5,
            counterSize: 12,
            bindTarget: false,
            ...config
        };
        if (config && config.showCounter) {
            this.combo = new Combo(this.config.counterSize, this.target);
        }

        // 从雪碧图取出表情，这里可以自定义粒子效果 雪碧图有7个表情
        const emojiCount = 7;
        for (let i = 0; i < emojiCount; i++) {
            let tempDom = document.createElement("div");
            tempDom.className = "emoji-boom";
            tempDom.style.backgroundPositionX = -i + 'em';
            tempDom.style.fontSize = config.size + 'px';
            this.boomChildList.push(tempDom);
        }
        this.boom = new Boom({
            childList: this.boomChildList,
            container: target,
            ...this.config
        });
        if (this.config.bindTarget) {
            this.bindEvent();
        }
        return this;
    }


    setSize(size) {
        config.size = size;
        return this;
    }

    setContainer(con) {
        this.boom.setContainer(con);
        this.combo && this.combo.setContainer(con);
        return this;
    }

    bindEvent() {
        const _this = this;
        this.target.addEventListener('click', function () {
            _this.play();
        }, false);
        return this;
    }

    boomAndCount() {
        this.combo && this.combo.setCount(++this.count).addEffects();
        this.boom.boom();
    }

    setCount(count) {
        this.count = count;
        return this;
    }

    play() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.boomAndCount();
        return this;
    }

    generate() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.boomAndCount();
        this.timer = setInterval(() => {
            this.boomAndCount();
        }, this.config.delayRange || 500);
        return this;
    }
    stop() {
        if (this.timer) {
            this.config.showCounter = false;
            clearInterval(this.timer);
        }
        return this;
    }
}
