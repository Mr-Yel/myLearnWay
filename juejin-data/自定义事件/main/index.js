

// let myEvent = new Event(typeArg, eventInit);
// typeArg  ： DOMString 类型，表示创建事件的名称；
// eventInit ：可选配置项，包括：
// // 字段名称     |说明                                     |是否可选    |类型            |默认值
// // bubbles     |表示该事件是否冒泡。                       |可选       |Boolean         |false
// // cancelable  |表示该事件能否被取消。                     |可选       |Boolean         |false
// // composed    |指示事件是否会在影子DOM根节点之外触发侦听器。| 可选      |Boolean         |false


document.addEventListener('aa',()=>{
    console.log(11);
})
// 创建一个支持冒泡且不能被取消的 pingan 事件
let myEvent = new Event("aa", {"bubbles":true, "cancelable":false});
document.dispatchEvent(myEvent);



// // 事件可以在任何元素触发，不仅仅是document
// testDOM.dispatchEvent(myEvent);

