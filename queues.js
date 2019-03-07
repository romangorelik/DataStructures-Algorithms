// What is added first, is removed first.

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val) {
    let newNode = new Node(val)
    if(!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = this.last.next
    }

    this.size++
    return this.size
  }

  dequeue() {
    if(!this.size === 0) return null
    
    let temp = this.first
    if(this.size === 1) {
      this.first = null
      this.last = null
    }

    this.first = this.first.next
    this.size--
    return temp
  }
}

// Insertion is O(n)
// Removal is O(n)