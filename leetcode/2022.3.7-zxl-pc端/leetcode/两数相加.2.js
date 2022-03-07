/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {Array} l1
 * @param {Array} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let arr1 = []
    let arr2 = []
    let node1 = l1
    let node2 = l2
    while (node1 || node2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        arr1.push(node1 ? node1.val : 0)
        arr2.push(node2 ? node2.val : 0)
        if (node1) {
            node1 = node1.next;
        }
        if (node2) {
            node2 = node2.next;
        }
    }
    console.log(arr1,arr2);
    let n1 = arr1.length
    let n2 = arr2.length
    let s1 = 0
    let s2 = 0
    for (let i = n1; i >0 ; i--) {
        s1 += arr1[i-1] * (Math.pow(10, i-1))
    }
    for (let i = n2; i > 0; i--) {
        s2 += arr2[i-1] * (Math.pow(10, i-1))
    }
    let sum = []
    let s = (s1 + s2).toString()
    for (let i = s.length; i > 0; i--) {
        sum.push(s[i - 1])
    }
    console.log(sum);
    let node
    let head = {val: sum[0], next: null}
    let pnode = head

    for(let i = 1; i < sum.length; i++) {
        node = {val: sum[i], next:null}
        pnode.next = node  
        pnode = node  
    }

    return head
};
console.log();
console.log(addTwoNumbers([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], [5, 6, 4]));