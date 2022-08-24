class QueueNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty() {
        return !this.size;
    }
  
    enqueue(value) { 
        let newNode = new QueueNode(value);
        return this.enqueueNode(newNode);
    }

    enqueueNode(newNode){
        if (this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;
        return this.size;
    }
  
    dequeue() {
        if (this.isEmpty()){
            return null;
        } 
        let oldHead = this.head;
        this.head = this.head.next;            
        if (this.size == 1){
            this.tail = null;
        } 
        this.size -= 1;
        return oldHead;
    }
  
    front() { 
        return this.head.data;
    }
  
    contains(searchValue) { 
        let runner = this.head;
        while(runner && runner.data != searchValue){
            runner = runner.next;
        }
        return !!runner;
    }
  
    seed(values) {
        for(let i in values){
            this.enqueue(values[i]);
        } 
    }

    equals(q2){
        if (this.size != q2.size){
            return false;
        }
        var runner1 = this.head;
        var runner2 = q2.head;
        for(let i = 0; i < this.size; i++){
            if (runner1.data != runner2.data){
                return false;
            }
            runner1 = runner1.next;
            runner2 = runner2.next;
        }
        return true;
    }

    findIntersection(q2){
        if (this.isEmpty() || q2.isEmpty()){
            return null;
        }
        var runner1 = this.head;
        while(runner1){
            var runner2 = q2.head;
            while(runner2){
                if(runner1 == runner2){
                    return runner1;
                }
                runner2 = runner2.next;
            }
            runner1 = runner1.next;
        }
        return null;
    }
  }


  let Q1 = new Queue();
  Q1.seed([1, 2, 3, 4]);
  let Q2 = new Queue();
  Q2.seed([3, 4, 5]);
  let node =  new QueueNode(7); 
  Q1.enqueueNode(node);
  Q2.enqueueNode(node);
  Q1.seed([9,10,12]);
  console.log(Q1.size);
  console.log(Q2.size);
  console.log(Q1.findIntersection(Q2));
  