function validateStackSequences(pushed, popped) {
  const stack = [];
  const n = pushed.length;
  for (let i = 0, j = 0; i < n; i++) {
      stack.push(pushed[i]);
      while (stack.length && stack[stack.length - 1] == popped[j]) {
          stack.pop();
          j++;
      }
  }
  return stack.length === 0;
};

console.log(validateStackSequences([0,2,1], [0,1,2]));