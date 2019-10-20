const util = require('util');

function reverseList(item) {
  let prev = item;
  let tmpNext = prev.next;
  prev.next = null;

  let next = tmpNext;

  while (next) {
    tmpNext = next.next;
    next.next = prev;
    prev = next;
    next = tmpNext;
  }

  return prev;
}

const reversed = reverseList({
  val: 10,
  next: {
    val: 15,
    next: {
      val: 20,
      next: {
        val: 25,
        next: {
          val: 26,
          next: null
        }
      }
    }
  }
});

console.log(util.inspect(reversed, { depth: Infinity }));