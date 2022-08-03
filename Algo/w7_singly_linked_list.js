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

    //removeFromBack() {}

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

console.log(list.isEmpty());

list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(7);

console.log(list.isEmpty());

list.display();

list.removeFromFront();
list.removeFromFront();
list.insertAtFront(1);
list.display();
