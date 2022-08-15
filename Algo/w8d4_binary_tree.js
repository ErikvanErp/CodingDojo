class BSTNode {
    constructor( data ){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty () {
        if( this.root ){
            return false;
        }
        return true;
    }

    insert( newVal ){
        let newNode = new BSTNode( newVal )
        if( this.isEmpty() ){
            this.root = newNode;
            return this;
        }
        let runner = this.root;
        while( runner ) {
            if ( newVal > runner.data ){
                if( runner.right ){
                    runner = runner.right;
                } else {
                    runner.right = newNode;
                    return this;
                }
            } else {
                if( runner.left ){
                    runner = runner.left;
                } else {
                    runner.left = newNode;
                    return this;
                }
            }
        }
    }

    insertRecursive(newVal, runner = this.root){
        if (this.isEmpty()){
            this.root = new BSTNode(newVal);
            return this;
        }
        
        if (newVal > runner.data && runner.right == null){
            runner.right = new BSTNode(newVal);
            return this;
        } else if (newVal < runner.data && runner.left == null){
            runner.left = new BSTNode(newVal);
            return this;
        } else if (newVal > runner.data){
            return this.insertRecursive(newVal, runner = runner.right);
        } else {
            this.insertRecursive(newVal, runner = runner.left);
        }
    }

    min() {
        if( this.isEmpty() ){
            return null;
        }
        current = this.root 
        while( current.left ){
            current = current.left
        }
        return current.data;
    }

    minRecursive( current = this.root) {
        if (this.isEmpty()) { return null; }
        else if (current.left != null) {
            this.min(current.left);
        }
        else { return current.data }
    }

    max() {
        if( this.isEmpty() ){
            return null;
        }
        current = this.root 
        while( current.right ){
            current = current.right
        }
        return current.data;
    }

    range(){
        if (this.isEmpty){
            return null;
        } else {
            return this.max() - this.min();
        }
    }

    contains(searchVal){
        if(this.isEmpty()){ return false}
        
        let current = this.root;
        while(current != null){
            if(searchVal == current.data){
                return true;
            }

            if(searchVal > current.data){
                current = current.right;
            } else {
                current = current.left;
            }
        }
        return false;
    }

    containsRecursive(searchVal, current=this.root){
        if(current == null){ return false}

        if(searchVal == current.data){
            return true;
        }

        if(searchVal > current.data){
            return this.containsRecursive(searchVal, current.right);
        } else {
            return this.containsRecursive(searchVal, current.left);
        }
    }


}

let BST = new BinarySearchTree();
BST.insertRecursive(1);
BST.insertRecursive(7);
BST.insertRecursive(4);
console.log(BST);






