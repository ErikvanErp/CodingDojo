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
  
    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if the list is empty.
     */
    isEmpty() {
        return (this.size == 0) ? true : false;
    }
  
    /**
     * Adds a given val to the back of the queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} val
     * @returns {number} The new size of the queue.
     */
    enqueue(value) { 
        let newNode = new QueueNode(value);
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
  
    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item.
     */
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
  
    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item.
     */
    front() { 
        return this.head.data;
    }
  
    /**
     * Determines if the given item is in the queue.
     * - Time: O(n) linear.
     * - Space: O(1) constant.
     * @param {any} searchVal
     * @returns {boolean}
     */
    contains(searchValue) { 
        if (this.isEmpty()){
            return false;
        }
        let runner = this.head;
        while(runner && runner.data != searchValue){
            runner = runner.next;
        }
        return runner ? true : false;
    }
  
    /**
     * Enqueues each of the given items.
     * - Time: O(n) linear since enqueue is O(1), n = vals.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals
     */
    seed(values) {
        for(let i in values){
            this.enqueue(values[i]);
        } 
    }
  }


  Q1 = new Queue();
  Q1.seed([1,2, 3, 4]);
  console.log(Q1.size);
  console.log(Q1.contains(1));
  console.log(Q1.contains(2));
  console.log(Q1.contains(3));
  console.log(Q1.contains(4));
  console.log(Q1.contains(5));
  console.log(Q1);
