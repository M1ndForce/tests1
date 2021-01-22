function squareNumbersSumAB(natural) {
  let result = [];
  let num = Math.sqrt(natural);
  num = Math.round(num);
  for (let i = 0; i < num; ++i) {
    let secondSqrt = natural - i * i;
    let secondNat = Math.sqrt(secondSqrt);
    if (Number.isInteger(secondNat)) {
      result.push([i, secondNat]);
    }
  }
  if (result.length >= 1) {
    return result;
  } else {
    return `Number ${natural} does not match requirements`;
  }
}

console.log(squareNumbersSumAB(1000000000));
console.log(squareNumbersSumAB(17744));
console.log(squareNumbersSumAB(92));

function biggestIntSquared(num) {
  const result = [];
  const errMsg = "wrong number";
  for (let i = 0; i < num; i++) {
    let n = num - Math.pow(4, i);
    result.push(n);
    if (n < 0) {
      if (result.length - 2 >= 2) {
        let y = result.length - 2;
        if (Math.pow(4, y) < num) {
          return y;
        } else {
          return errMsg;
        }
      } else {
        return errMsg;
      }
    }
  }
}

// console.log(biggestIntSquared(4));
// console.log(biggestIntSquared(17));
// console.log(biggestIntSquared(16));
//
