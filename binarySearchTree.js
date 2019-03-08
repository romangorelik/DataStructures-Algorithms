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
}

let tree = new BinarySearchTree()
tree.root = new Node(10)
tree.insert(5)
tree.insert(20)
tree.insert(16)
tree.insert(7)

// Insertion is O(log n)
// Searching is O(log n)
// At worst case both are O(n) if a tree becomes a linked list, going all the way to one direction.