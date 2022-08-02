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
      let newnode = new ListNode(data);
      if (this.isEmpty()){
        this.head = newnode; 
      }
      else{
        let listnode = this.head;
        while(listnode.next){ listnode = listnode.next; }
        listnode.next = newnode;
      }
    }

    printListNodes(){
      let node = this.head;
      console.log(node.data);
      while(node.next){
        console.log(node.next.data);
        node = node.next;
      }
    }
}

var list = new SinglyLinkedList();

console.log(list.isEmpty());

list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(7);

console.log(list.isEmpty());

list.printListNodes();