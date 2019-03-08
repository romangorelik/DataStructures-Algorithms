class Node {
  constructor(val) {
    this.value = val
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  constructor(){
      this.root = null;
  }

  insert(value){
      var newNode = new Node(value);
      if(this.root === null){
          this.root = newNode;
          return this;
      }
      var current = this.root;
      while(true){
          if(value === current.value) return undefined;
          if(value < current.value){
              if(current.left === null){
                  current.left = newNode;
                  return this;
              }
              current = current.left;
          } else {
              if(current.right === null){
                  current.right = newNode;
                  return this;
              } 
              current = current.right;
          }
      }
  }

  contains(value) {
    if (!this.root) return false

    let current = this.root
    let found = false

    while(current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true
      }
    }

    return false
  }

  BFS() {
    let data = [], queue = []
    let node = this.root
    queue.push(node)

    while(queue.length) {
      node = queue.shift()
      data.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return data
  }

  DFSPreOrder() {
    let data = []

    let traverse = (node) => {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return data
  }

  DFSPostOrder() {
    let data = []

    let traverse = (node) => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }

    traverse(this.root)
    return data
  }

  DFSInOrder() {
    let data = []

    let traverse = (node) => {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return data
  }
}

let tree = new BinarySearchTree()
tree.root = new Node(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

// Insertion is O(log n)
// Searching is O(log n)
// At worst case both are O(n) if a tree becomes a linked list, going all the way to one direction.