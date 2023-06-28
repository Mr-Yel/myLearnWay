# ExeEmojiParticle 表情粒子效果

点赞动画



## 引入方式

通过 `script` 标签引入：

```html
<script type="text/javascript" src="eft-tool-box.umd.js"></script>
```



通过 ESM 引入：

```javascript
import { ExeEmojiParticle } from './eft-tool-box.esm'
```



## 快速使用

**exeEmojiParticle.constructor(target, config)**

- target   [element]  当前需要显示动画的元素
- config  [object]  动画配置对象



创建 exeEmojiParticle 实例

```javascript
const boom = new exeToolBox.ExeEmojiParticle(document.querySelector("#boom"), {
	size: 30,
	boomNumber: 4,
	spread: 180,
	power: 8,
	rotate: 180,
	delayRange: 200,
	life: 1000,
	gravity: 20,
	counterSize: 30,
	showCounter: true
});
```

调用 exeEmojiParticle 的方法

```javascript
boom.play();    // 单次效果
boom.stop()；   // 停止
```



## Config

初始化 `ExeEmojiParticle` 示例时， `config` 配置对象：

| 参数        | 说明                                  | 类型    | 默认值 |
| ----------- | ------------------------------------- | ------- | ------ |
| boomNumber  | 单词粒子的产生数量                    | number  | 10     |
| rotate      | 粒子产生的方向                        | number  | 0      |
| spread      | 粒子的展开力度，数值越大，粒子越展开  | number  | 180    |
| life        | 粒子的生命时间 单位ms                 | number  | .4e3   |
| size        | 粒子的大小                            | number  | 20     |
| delayRange  | 一批次的粒子播放完成需要的时间 单位ms | number  | 0      |
| power       | 粒子动画力度                          | number  | 1      |
| gravity     | 重力的大小                            | number  | 5      |
| showCounter | 是否显示计数                          | boolean | false  |
| counterSize | 计数的文字大小                        | number  | 12     |



## API

`ExeEmojiParticle` 上的方法：

| 参数         | 说明                           | 类型                    | 返回值 |
| ------------ | ------------------------------ | ----------------------- | ------ |
| play         | 播放一次粒子动画               | function()              | 实例   |
| stop         | 停止播放粒子动画               | function()              | 实例   |
| generate     | 连续不断播放粒子动画           | function()              | 实例   |
| setContainer | 设置当前粒子动画需要显示的位置 | function()              | 实例   |
| setCount     | 设置当前点击数                 | function(count: number) | 实例   |

