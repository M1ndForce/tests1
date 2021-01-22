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


function biggestIntSquered (num) {
  for (let i = 0; num > i; ++i ) {
    let result = num - Math.pow(4,i)
    const nums = []
    nums.push(result)
    return nums
  }
}

console.log(biggestIntSquered(25))

