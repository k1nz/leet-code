class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let l1PTR: ListNode | null = l1
  let l2PTR: ListNode | null = l2
  let resHead: ListNode | null = null
  let resTail: ListNode | null = null
  let carry: number = 0 // 进位0或1
  while (l1PTR !== null || l2PTR !== null) {
    let v1 = l1PTR ? l1PTR.val : 0
    let v2 = l2PTR ? l2PTR.val : 0
    let sum = v1 + v2 + carry
    if (resHead === null) resHead = resTail = new ListNode(sum % 10)
    else {
      resTail!.next = new ListNode(sum % 10)
      resTail = resTail!.next // 指向下一个节点
    }
    carry = sum >= 10 ? 1 : 0
    if (l1PTR !== null) l1PTR = l1PTR.next
    if (l2PTR !== null) l2PTR = l2PTR.next
  }
  if (carry > 0) resTail!.next = new ListNode(carry)
  return resHead
}

function digitArr2ListNode(digitArr: number[]): ListNode | null {
  if (digitArr[0] === undefined) return null
  return new ListNode(digitArr[0], digitArr2ListNode(digitArr.slice(1)))
}

const l1 = digitArr2ListNode([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
const l2 = digitArr2ListNode([4, 5, 6])
console.log(addTwoNumbers(l1, l2))
