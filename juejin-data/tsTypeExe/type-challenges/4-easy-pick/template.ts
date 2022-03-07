type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}




// function myPick(todo, keys){
//     const TodoPreview = new Object();
//     for(let key in keys){
//         if(key in todo){
//             TodoPreview[key] = todo[key]
//         }
//     }
//     return TodoPreview
// }