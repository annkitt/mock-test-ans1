class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(0); // Dummy node to store the result
  let curr = dummy; // Pointer to the current node in the result

  let carry = 0; // Carry value for addition

  while (l1 || l2) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    sum %= 10;

    curr.next = new ListNode(sum);
    curr = curr.next;
  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return dummy.next;
}
