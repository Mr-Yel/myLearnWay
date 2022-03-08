## Vue.extend

**Vue.extend 返回的是一个 Vue 实例构造器。**
这里只是构造完成 但是还没有实例化所以还不是一个组件

```js
var myVue = Vue.extend({
  // 预设选项
});
```

上面这个 **预设选项** 可以是 Vue 所有实例选项 比如 data () {} ,methods: {}, created: {}

现在就是一个 vue 组件了

```js
var vm = new myVue({
  // 其他选项
});
```

上面这个 **其他选项** 可以是 new Vue({})里面的所有属性选项 比如 data () {} ,methods: {}, created: {}。

**new myVue({})后会合并预设选项和其他选项中的所有属性选项：**

1. data 数据对象在内部会进行浅合并 (一层属性深度)。

2. 钩子函数会先执行预设选项中的

3. 值为对象的选项，例如 methods, components 将被混合为同一个对象，两个对象键名冲突时，会以 new myVue({})对象的选项为准。

注意：混入 (mixins) 也使用同样的策略进行合并。

## Vue.component

**Vue.component 是用来全局注册组件的方法**

其作用是将通过 Vue.extend 生成的扩展实例构造器注册为一个组件，

会自动调用类似于 new myVue 这样的构造函数来生成组件实例，并挂载到自定义元素上。

方法 1：全局注册

```js
Vue.component("myVue", myVue);
```

方法 2：内部注册

可以在某个组件中的 components 属性中注册并使用组件

```js
new Vue({
  components: {
    myVue: myVue,
  },
});
```
