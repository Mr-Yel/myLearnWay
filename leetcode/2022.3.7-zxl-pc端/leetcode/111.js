function treeLize(arr) {
    //判断数组长度小于1就返回    
    if (arr.length < 1) {
        return null;
    }
    var right = arr.slice(arr.length - 1)[0];
    var tr = {
        "type": (arr.slice(0, (arr.length - 1))).length == 0 ? (arr[0].operation == "match" ? "model" : "leaf") : "logic",
        "content": (arr.length == 1) ? arr[0].operation : "and",
        "left": (arr.length == 1) ? (arr[0].operation == "match" ? arr[0].field : arr[0].field) : treeLize(arr.slice(0, (arr.length - 1))),
        "right": (arr.length == 1) ? (right.operation == "match" ? {
            "type": "leaf",
            "content": right.value,
            "left": null,
            "right": null
        } : right.value) : {
            "type": right.operation == "match" ? "model" : "leaf",
            "content": right.operation,
            "right": right.operation == "match" ? {
                "type": "leaf",
                "content": right.value,
                "left": null,
                "right": null
            } : right.value
        }
    }
    result = JSON.stringify(tr);
    return tr;
};