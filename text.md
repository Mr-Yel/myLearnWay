## VNode

### 什么是 VNode

**VNode是JavaScript对象**

- 用JavaScript对象来描述真实的DOM，把DOM标签，属性，内容都变成对象的属性。

### VNode 的作用

通过render将template模版描述成VNode，然后进行一系列操作之后形成真实的DOM进行挂载。

### VNode的优点

1. 兼容性强，不受执行环境的影响。VNode因为是JS对象，不管Node还是浏览器，都可以统一操作，从而获得了服务端渲染、原生渲染、手写渲染函数等能力。

2. 减少操作DOM，任何页面的变化，都只使用VNode进行操作对比，只需要在最后一步挂载更新DOM，不需要频繁操作DOM，从而提高页面性能。