class Combo {
    constructor(counterSize = 12, target) {
        this.counterSize = counterSize;
        this.con = document.querySelector('body');
        this.target = target || this.con;
        this.minCount = 3;
        this.creatContainer();
    }


    getPosition() {
        const rectContainer = this.boomCountContainer.getBoundingClientRect();
        const docW = document.documentElement.clientWidth;
        const rect = this.target.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        let result = { top: this.target.clientHeight / 2 + rect.top + scrollTop, left: this.target.clientWidth / 2 + rect.left + scrollLeft };
        if(this.count > this.minCount) {
            if(rectContainer.left <= 0) {
                result.left = scrollLeft;
            }
            if(rectContainer.left + this.boomCountContainer.clientWidth >= docW) {
                result.left = docW - this.boomCountContainer.clientWidth + scrollLeft;
            }
        }
        return result;
    }

    creatContainer() {
        let boomCountContainer = document.createElement("div");
        boomCountContainer.className = "combo-effect-container";
        boomCountContainer.style.zIndex = "1000";
        boomCountContainer.style.pointerEvents = 'none';
        boomCountContainer.style.fontSize = `${ this.counterSize }px`;
        this.boomCountContainer = boomCountContainer;
    }

    setContainer(con){
        this.target = con;
        return this;
    }

    setCount(count) {
        this.count = count;
        return this
    }

    getText() {
        if (this.count <= 10) {
            return `cool`;
        } else if ( 10 < this.count && this.count <= 60) {
            return `great`;
        } else {
            return `perfect`;
        }
    }

    getCountDom() {
        let domString = `<div style="font-size: ${this.counterSize}px" class="combo-effect-text-${this.getText()}"></div>
                             <div style="font-size: ${this.counterSize}px" class="combo-effect-number-x"></div>`+
            this.count.toString()
                .split("")
                .map(number => `<div style="font-size: ${this.counterSize}px" class="combo-effect-number-${number}"></div>`)
                .join("");
        return domString;
    }

    addEffects() {
        this.con.appendChild(this.boomCountContainer);
        setTimeout(() => {
            this.boomCountContainer.classList.add('combo-effect-animation');
        });
        if(this.count > this.minCount) {
            this.boomCountContainer.innerHTML = this.getCountDom();
            let divOffset = this.getPosition();
            this.boomCountContainer.style.left = `${divOffset.left}px`;
            this.boomCountContainer.style.top = `${divOffset.top}px`;
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.boomCountContainer.classList.remove('combo-effect-animation');
                setTimeout( () => {
                    this.deleteEl();
                }, 200)
            }, 1000);
        } else {
            this.boomCountContainer.innerHTML = '';
        }
    }

    deleteEl(){
        this.con.removeChild(this.boomCountContainer);
    }
}


export default Combo;