function solveEquation (equation) {
  let [leftStr, rightStr] = equation.split('=')
  let arrLeft = leftStr.replace(/-/g, '+-').split('+')
  let arrRight = rightStr.replace(/-/g, '+-').split('+')
  let left = 0;
  let right = 0;
  for (let s of arrLeft) {
    if (s === "x") {
      left += 1;
    } else if (s === "-x") {
      left += -1;
    } else if (s.indexOf("x") != -1) {
      left += parseInt(s.substring(0, s.length - 1));
    } else if (s !== "") {
      right -= parseInt(s);
    }
  }
  for (let s of arrRight) {
    if (s === "x") {
      left -= 1;
    } else if (s === "-x") {
      left -= -1;
    } else if (s.indexOf("x") != -1) {
      left -= parseInt(s.substring(0, s.length - 1));
    } else if (s !== "") {
      right += parseInt(s);
    }
  }
  if (left == 0) {
    if (right == 0) {
      return "Infinite solutions";
    } else {
      return "No solution";
    }
  } else {
    return "x=" + right / left;
  }
};


console.log(solveEquation("2x=6"));