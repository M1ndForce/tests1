function squareNumbersSum(natural) {
  const x = Math.sqrt(natural / 2);
  if (Number.isInteger(x)) {
    const squaredNumbers = [];
    const squared = Math.pow(x, 2);
    squaredNumbers.push(squared);
    squaredNumbers.push(squared);
    return squaredNumbers;
  }
  if (!Number.isInteger(x)) {
    return `Natural ${natural} does not match for sum of 2 squered numbers`
  }
}

console.log(squareNumbersSum(36))
console.log(squareNumbersSum(18))

function squareNumbersSumB(natural) {
  let result = [];
  let num = Math.sqrt(natural)
  num = Math.round(num)
  for (let i = 0; i < num; ++i) {
    let secondSqrt = natural - (i * i)
    let secondNat = Math.sqrt(secondSqrt)
    if (Number.isInteger(secondNat)){
      result.push([i, secondNat])
    }
  }
  return result
}

console.log(squareNumbersSumB(42))
console.log(squareNumbersSumB(45))
console.log(squareNumbersSumB(92))


function biggestIntSquared (num) {
  const result = []
  for (let i = 0; i < num; i++) {
    let n = num - Math.pow(4, i)
    result.push(n)
    if (n < 0) {
      if (result.length - 2 > 2) {
        return result.length - 2
      } else {
        return "wrong number"
      }
    }
  }
}

console.log(biggestIntSquared(4))



