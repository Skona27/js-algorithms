// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) { 
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let count = 0;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
     if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }
  
  removeLast() {
    if(!this.head) {
      return;
    }
    
    if(!this.head.next) {
      this.head = null;
      return;
    }
    
    let previousNode = this.head;
    let node = this.head.next;
    
    while (node.next) {
      previousNode = node;
      node = node.next;
    }
    
    previousNode.next = null;
  }
  
  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }
  
  getAt(index) {
    let node = this.head;
    let counter = 0;
    
    while (node) {
      if(counter === index) {
        return node;
      }
      
      counter++;
      node = node.next;
    }
    
    return null;
  }
}

module.exports = { Node, LinkedList };
