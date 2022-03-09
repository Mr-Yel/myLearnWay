命令式：面向过程编程，需要告诉程序步骤，比如创建元素需要一步步创建绑定属性

声明书：比方说一个div标签，标签上有点击事件用 click 绑定，这样就是声明式



template=>编译器=>编译成为 VDom=> 渲染器 => 渲染到真实 DOM 上



1. 三种不同版本，包含编译器和渲染器，不包含编译器只包含渲染器，不包含渲染器只包含编译器



2. innhtml node.value text.conntent  createTextNode，区别



3. render抽象，与平台无关，不使用document。



4. runtimedom：进行DOM操作以及pashprop，然后传递给runtimecall 进行解构，获得API。



5. 响应式原理的 map set 是什么



6. selmedom是什么



7. weakmap和promse是什么



8. vue挂载在全局组件的基本方法 ， 

( TO DO : Vue.extends   Vue.component   Vue.use   等等 )



9.  组件对象会被送到 Vue.extends 方法 中，然后会生成一个构造函数，这个构造函数的实例就是组件对象。
   ( TO DO : 怎么进行的 )





10. 在事件上面绑定一个自定义的函数，由这个函数的属性 value 来调用需要的事件，那么在更新事件的时候只需要去更新这个函数下的属性 value 即可
     (todo : Vue3 中的 invoker ， basecreateRenderer)



11. ( TO DO : <componts is=' xxx '> 动态组件是什么)