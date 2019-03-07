class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  push(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    let current = this.head
    if (!this.head) return undefined

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      while(current){
        if (current.next.next === null) {
          this.tail = current
          current.next = null
        }
        current = current.next
      }  
    }

    this.length--
    return this
  }

  shift() {
    if (!this.head) return undefined
    var current = this.head
    this.head = current.next
    this.length--
    return current
  }

  unshift(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
      this.length++
    } else {
      newNode.next = this.head
      this.head = newNode
      this.length++
    }
   
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    let current = this.head
    let counter = 0
    while(counter !== index) {
      counter++
      current = current.next
    }
    return current
  }

  set(value, index) {
    let current = this.get(index)
    if (current) {
      current.val = value
      return true
    }
    return false
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return this.push(value)
    if (index === 0) return this.unshift(value)

    let newNode = new Node(value)
    let prev = this.get(index - 1)
    let temp = prev.next

    prev.next = newNode
    newNode.next = temp
    this.length++
    return this
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    let prev = this.get(index - 1)
    let removed = prev.next
    prev.next = removed.next
    this.length--;
    return this
  }

  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let prev = null
    let next;

    for(let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }

}

var list = new SinglyLinkedList()
list.push('hello')
list.push('goodbye')
list.unshift('Roman')
list.insert('Rules', 0)
list.remove(1)
list.reverse()
console.log(list)

