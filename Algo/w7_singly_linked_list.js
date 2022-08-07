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
      if (this.isEmpty()){
        this.head = newNode; 
      }
      else{
        let listnode = this.head;
        while(listnode.next){ listnode = listnode.next; }
        listnode.next = newNode;
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

    // containsRecursive(){

    // }

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
}

var list = new SinglyLinkedList();
// list.insertAtBackRecursive(11);
// list.display();


// list.seedFromArray([1,3,5,7,9]);
// list.display();

// var array1 = list.toArray();
// console.log(array1);

// list.display();
console.log(list.contains(5));
console.log(list.contains(4));
console.log(list.contains(100));
console.log(list.contains(-1));
console.log(list.contains(1));
console.log(list.contains(9));

