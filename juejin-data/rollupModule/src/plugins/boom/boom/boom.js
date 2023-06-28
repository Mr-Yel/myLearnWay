import Partical from '../partical/partical';

class Boom{
    particalList = [];
    particalNumbers = 6;
    boomTimeGap = .1e3;
    boomTimer = 0;
    childList = [];
    rotate = 120;
    spread = 180;
    delayRange = 100;
    power = 3;
    con = null;
    constructor({ childList , container , boomNumber , rotate , spread , delayRange , power, life, gravity} = {}){
        this.childList = childList || [];
        this.con = container || null;
        this.particalNumbers = boomNumber || 6;
        this.rotate = rotate || 120;
        this.spread = spread || 180;
        this.delayRange = delayRange || 100;
        this.power = power || 3;
        this.life = life;
        this.gravity = gravity;
        this.createParticals(this.particalNumbers);
    }
    setContainer(con){
        this.con = con;
    }
    createParticals(num){
        for(let i = 0 ; i < num ; i++){
            let partical = new Partical({
                Duration: this.life,
                G: this.gravity,
                POWER: 10
            });
            partical.onAnimationEnd(()=>{
                partical.deleteEl();
            });
            this.particalList.push(partical)
        }
    }
    boom(){
        window.plugins && window.plugins.CDVDualMessageChannel && window.plugins.CDVDualMessageChannel.postMessage && window.plugins.CDVDualMessageChannel.postMessage({"type":"exe-playShock"});
        // clearTimeout(this.exeEmojiParticleTimer);
        let lastBoomTimer = this.boomTimer;
        let now = +new Date();
        if(now - lastBoomTimer < this.boomTimeGap){
            // console.warn("点的太快了");
            return;
        }
        this.boomTimer = now;
        // console.warn("粒子总数:" , this.particalList.length);
        let boomNums = 0;
        let unAnimateList = this.particalList.filter(partical => partical.animating == false);

        let childList = this.childList;
        let childListLength = childList.length;

        let rotate = this.rotate;
        let spread = this.spread;
        let delayRange = this.delayRange;
        let power = this.power;

        for(let partical of unAnimateList){
            if(boomNums >= this.particalNumbers) return ;
            if(partical.animating){
                continue ;
            }

            boomNums++;
            let r = Math.random();
            let d = Math.random();

            partical.renderIn(this.con);
            // 将创建的表情随机放入粒子，替换原有的文字
            partical.insertChild(childList[Math.floor(r * childListLength)].cloneNode(true));
            partical.animate({
                deg: (r * spread + rotate) % 360,
                pow: r * power + 1,
                // delay: Math.abs(r - 0.5) * delayRange,
                // delay: r * delayRange,
                delay: d * delayRange,
            });
        }

        if(boomNums < this.particalNumbers){
            this.createParticals(this.particalNumbers - boomNums);
        }

        this.con.style.cssText += `;will-change:transform;-webkit-transform: scale3d(0.9,0.9,0.9);-webkit-transition: transform 50ms linear;`;
        // this.exeEmojiParticleTimer = setTimeout(() => {
        //     this.con.style.cssText += `;will-change:transform;-webkit-transform: scale3d(1,1,1);-webkit-transition: transform 50ms linear;`;
        // }, 50);
    }
}


export default Boom;