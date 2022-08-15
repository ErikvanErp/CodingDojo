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

    

    display() {
        var printLines = this.displayArray();
        for (let i = 0; i < printLines.length; i++){
            console.log(printLines[i]);
        }
    }

    displayArray(runner = this.root){
        if (this.isEmpty()){
            return [];
        }
        var rightLines = [];
        var leftLines = [];
        // recursion: create arrays for left and right branches
        if (runner.right != null) {
            var rightLines = this.displayArray(runner.right);
        }
        if (runner.left != null) {
            var leftLines = this.displayArray(runner.left);
        }

        // convert runner.data to string, and create blank string of same length
        var dataToString = String(runner.data);
        var dataToSpaces = "";
        for (let i = 0; i < dataToString.length; i++){
            dataToSpaces += " ";
        }

        // if there is nothing to the right, add runner.data to outputArray
        let outputArray = [];
        if (runner.right == null){
            outputArray.push(dataToString);
        }
        
        // set prefix for printing rightLines
        var prefix;
        if (runner.right != null){
            if(runner.left == null) { 
                prefix = " "; 
            } else {
                prefix = "|";
            }
        }
        
        // add rightLines to outputArray
        for (let i = 0; i < rightLines.length; i++){
            if(i == 0){
                outputArray.push(dataToString + "-" + rightLines[0]);
            } else {
                outputArray.push(prefix + dataToSpaces + rightLines[i]);
            }
        }
        // add leftLines to outputArray
        for (let i = 0; i < leftLines.length; i++){
            if(i == 0){
                outputArray.push("\u2514" + leftLines[0]);
            } else {
                outputArray.push(" " + leftLines[i]);
            }
        }

        return outputArray;
    } 

}

let BST = new BinarySearchTree();
for (let i = 0; i <20; i++){
    BST.insert(Math.floor(Math.random() * 1000) + 1);
    BST.insert(Math.floor(Math.random() * 100) + 1);   
}
BST.display();






