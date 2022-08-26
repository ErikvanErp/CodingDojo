/**
 * A class to represent a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
class SinglyLinkedList {
    
    constructor() {
      this.head = null;
    }
  
    isEmpty() {
        if (this.head){ return false; }
        else{ return true; }
    }
  
    insertAtBack(data) {
      let newNode = new ListNode(data);
      this.insertNodeAtBack(newNode);
    }
    
    insertNodeAtBack(node){
      if (this.isEmpty()){
        this.head = node; 
      }
      else{
        let listnode = this.head;
        while(listnode.next){ listnode = listnode.next; }
        listnode.next = node;
      }
    }

    insertAtBackRecursive(data, runner=this.head){
      if (this.isEmpty()){
        let newnode = new ListNode(data);
        this.head = newnode;
        return;
      }
      else if (runner.next == null){
        let newnode = new ListNode(data);
        runner.next = newnode;
        return;
      }
      else{
        this.insertAtBackRecursive(data, runner.next);
      }
    }

    removeFromBack() {
      if(this.isEmpty()){
        return null;
      }
      let node = this.head; 
      if (node.next == null){
        this.head == null;
        return node;
      }

      while(node.next.next){
        node = node.next;
      }
      let lastNode = node.next;
      node.next = null;
      return lastNode;
    }

    insertAtFront(data) {
      let newNode = new ListNode(data);
      newNode.next = this.head;
      this.head = newNode;
    }
    
    removeFromFront() {
      if (!this.isEmpty()){
        this.head = this.head.next;
      }
    } 

    seedFromArray(values){
      this.head = null;
      for (let value of values){
        this.insertAtBack(value);
      }
    }

    toArray(){
      let listArray = [];
      if (!this.isEmpty()){
        let node = this.head;
        listArray.push(node.data);
        while(node.next){
          node = node.next;
          listArray.push(node.data);
        }
      }
      return listArray;
    }

    contains(value){
      let node = this.head;
      while (node != null && node.data != value){
        node = node.next;
      }
      return node ? true : false;  
    }

    secondToLast(){
      if(this.isEmpty()){
        return null;
      }
      let node = this.head; 
      if (node.next == null){
        return null;
      }
      while(node.next.next){
        node = node.next;
      }
      return node;
    }

    // remove the first node whose data == value
    // return true if value is found, false otherwise
    removeValue(value){
      // edge cases: empty list, or 1st node needs to be removed
      if (this.isEmpty()){
        return false;
      }
      if (this.head.data == value){
        this.head = this.head.next;
        return true;
      }
      // list not empty, and head is not to be removed
      // look for value in node.next.data
      let node = this.head;
      while (node.next != null && node.next.data != value){
        node = node.next;
      }
      if (node.next) {
        // if found, remove next node
        node.next = node.next.next;
        return true;
      } else {
        return false;
      }
    }

    prepend(newValue, targetValue){
      if(this.isEmpty()){
        return false;
      }
      let newNode = new ListNode(newValue);
      if(this.head.data == targetValue){
        newNode.next = this.head;
        this.head = newNode;
        return true;
      }

      let runner = this.head;
      while(runner.next != null && runner.next.data != targetValue){
        runner = runner.next;
      }

      if(runner.next == null){
        return false;
      } else {
        newNode.next = runner.next;
        runner.next = newNode;
        return true;        
      }
    }

    moveMinToFront(){
      if(this.isEmpty() || this.head.next == null){
        return this;
      }
      let minNodePrev = this.head;
      let runner = this.head;
      while(runner.next != null){
        if(minNodePrev.next.data > runner.next.data){
          minNodePrev = runner;
        }
        runner = runner.next;
      }
      let minNode = new ListNode(minNodePrev.next.data);
      minNodePrev.next = minNodePrev.next.next;
      minNode.next = this.head; 
      this.head = minNode;

      return this
    }

    display(){
      if (this.isEmpty()){
        console.log("Empty list.");
      }
      else{
        let node = this.head;
        console.log(node.data);
        while(node.next){
          node = node.next;
          console.log(node.data);
        }
      }
    }

    concat(addList){
      if (this.isEmpty){
        this.head = addList.head;
      }
      let runner = this.head;
      while(runner.next != null){
        runner = runner.next;
      }
      runner.next = addList.head;
      return this;
    }

      // NOT FUNCTIONING YET
    splitOnVal(value){
      let newList = new SinglyLinkedList();
      // edge cases
      if(this.isEmpty()){
        return newList;
      }
      if (this.head.data == value){
        newList.head = this.head;
        this.head = null;
        return newList;
      }

      // generic case
      let runner = this.head;
      while (runner.next != null && runner.next.data != value){
        runner = runner.next;
      }
      if(runner.next != null){
        newList.head = runner.next;
        runner.next = null;   
      }
      return newList;
  }

  recursiveMax(runner = this.head, maxNode = this.head){
    if (this.isEmpty()){
      return null;
    }
    if(runner == null){
          return maxNode.data;
    }
    if(runner.data > maxNode.data){
          maxNode = runner;
    }
    return this.recursiveMax(runner.next, maxNode);
  }

  reverse() {
    if(this.isEmpty() || !this.head.next){
        this.display()
        return this
    }//Edge cases of empty and 1 node
    var runner = this.head
    var stepDad;
    let nodeHolder = runner.next
    runner.next = null
    while(nodeHolder){
        stepDad = nodeHolder
        nodeHolder = nodeHolder.next
        stepDad.next = runner
        runner = stepDad
    }
    this.head = runner
    this.display()
    return this
}

  hasLoop(){
    if(this.isEmpty() || !(this.head.next)){ return false }

    let singleRunner = this.head;
    let doubleRunner = this.head.next;

    while(singleRunner.next && doubleRunner.next && doubleRunner.next.next){
        singleRunner = singleRunner.next;
        doubleRunner = doubleRunner.next.next;

        if(singleRunner === doubleRunner){ return true }
    }
    return false;
  }
}

var list = new SinglyLinkedList();

let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(3);
let n4 = new ListNode(4);

list.insertNodeAtBack(n1);
list.insertNodeAtBack(n2);
list.insertNodeAtBack(n3);
list.insertNodeAtBack(n4);
list.insertNodeAtBack(n2);
//list.display();
console.log(list.hasLoop());
