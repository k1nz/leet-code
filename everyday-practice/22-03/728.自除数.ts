function selfDividingNumbers(left: number, right: number): number[] {
  const res: number[] = []
  for (; left <= right; left++) {
    let digits = toDigits(left)
    if (digits.includes(0)) continue
    let isDivideSelf: boolean = true
    for (const digit of digits) {
      if (left % digit !== 0) {
        isDivideSelf = false
        break
      }
    }
    if (isDivideSelf) res.push(left)
  }
  return res
}

function toDigits(num: number): number[] {
  return num
    .toString()
    .split('')
    .map((e) => parseInt(e))
}
