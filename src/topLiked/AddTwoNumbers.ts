/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let c: number = 0;
  let result: ListNode | null = null;
  let pointer: ListNode | null = result;

  while (l1 != null || l2 != null) {
    let sum: number = c;
    c = 0;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    
    const remainder: number = sum % 10;
    c = Math.floor(sum / 10);

    let newNode: ListNode = new ListNode(remainder);


    if (!result) {
      result = newNode;
      pointer = result;
    } else {
      pointer!.next = newNode;
      pointer = pointer!.next || null ;
    }
  }

  if (c) {
    pointer!.next = new ListNode(c);
  }

  return result;
}

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
const result = addTwoNumbers(l1, l2);
let v = result;

while(v) {
    console.log(v.val);
    v = v.next;
}
