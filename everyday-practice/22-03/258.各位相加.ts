// 递归
function addDigitsRecursion(num: number): number {
  const arr: string[] = num.toString().split('')
  if (arr.length === 1) return num
  return addDigitsRecursion(
    arr.reduce((prev, curr) => prev + parseInt(curr), 0)
  )
}

// 数学
function addDigitsMath(num: number): number {
  return ((num - 1) % 9) + 1
}
