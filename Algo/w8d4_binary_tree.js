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
        this.insertNode(newNode);
    }

    insertNode( newNode ){
        if (newNode == null){
            return this;
        }
        if( this.isEmpty() ){
            this.root = newNode;
            return this;
        }
        let runner = this.root;
        while( runner ) {
            if ( newNode.data > runner.data ){
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

    toArrayInOrder(node = this.root, values = []){
        if(this.isEmpty()) { return []; }
        if (node.left) {
            this.toArrayInOrder(node.left, values);
        }
        values.push(node.data);
        if (node.right) {
            this.toArrayInOrder(node.right, values);
        }
        return values;
    }

    toArrayPreOrder(node = this.root, values = []){
        if(this.isEmpty()) { return []; }

        values.push(node.data);
        if (node.left) {
            this.toArrayPreOrder(node.left, values);
        }
        if (node.right) {
            this.toArrayPreOrder(node.right, values);
        }
        return values;
    }

    toArrayPostOrder(node = this.root, values = []){
        if(this.isEmpty()) { return []; }

        if (node.left) {
            this.toArrayPostOrder(node.left, values);
        }
        if (node.right) {
            this.toArrayPostOrder(node.right, values);
        }
        values.push(node.data);

        return values;
    }

    // Array created with a Breadth First Search
    toArrayLevelOrder(node = this.root){
        if(this.isEmpty()){
            return [];
        }
        let level = 0;
        let values = [];
        let moreLevels = true;
        while (moreLevels){
            let levelValues = [];
            this.toArrayLevel(this.root, level, levelValues);
            values = values.concat(levelValues);
            if(levelValues.length == 0){
                moreLevels = false;
            }
            level += 1;
        }
        return values;
    }
    // auxiliary function called by toArrayLevelOrder
    // returns an array with all nodes on given level
    // level 0 is the root node.
    toArrayLevel(node = this.root, level, values = []){
        if (level == 0){
            values.push(node.data);
            return;
        }
        if (node.left) {
            this.toArrayLevel(node.left, level - 1, values);
        }
        if (node.right) {
            this.toArrayLevel(node.right, level - 1, values);
        }
        return values;
    }

    toArrLevelorderRecursive(nodeList = [this.root], results = []) {
        if (nodeList.length === 0) {
          return results;
        }
    
        const node = nodeList.shift();
        results.push(node.data);
    
        if (node.left) {
          nodeList.push(node.left);
        }
        if (node.right) {
          nodeList.push(node.right);
        }
    
        return this.toArrLevelorderRecursive(nodeList, results);
    }

    toArrLevelOrderCaleb( node = this.root, level = 0, arr = [] ){
        if( ! node ){
            return [];
        }

        if( ! arr[level] ){
            arr[level] = [node.data];
        } else {
            arr[level].push(node.data);
        }
        this.toArrLevelOrderCaleb( node.left, level + 1, arr );
        this.toArrLevelOrderCaleb( node.right, level + 1, arr );

        if( level === 0 ){
            let resultArr = [];
            for( let i = 0; i < arr.length; i++ ){
                resultArr = resultArr.concat(arr[i]);
            }
            return resultArr;
        }
    }

    size(current = this.root){
        if(current == null){
            return 0; 
        }
        return this.size(current.left) + this.size(current.right) + 1;
    }

    height(node = this.root){
        if( !node ) { return 0 };

        let heightLeft = this.height(node.left);
        let heightRight = this.height(node.right);

        return 1 + Math.max(heightLeft, heightRight);
    }

    isFull(node = this.root){
        if(this.isEmpty()){
            return false;
        }
        if (!node.right && !node.left){
            return true;
        } else if(node.left && !node.right){
            return false;
        } else if (!node.left && node.right){
            return false;
        } else {
            return(this.isFull(node.left) && this.isFull(node.right));
        } 
    }

    // TODO this function isn't working yet
    removeValue(value){
        if(this.isEmpty()) { return false; }
        if (this.root.data == value){
            this.removeRoot();
            return true;
        }
        var parentNode = null;
        var runner = this.root;
        while(runner && runner.data != value) {
            parentNode = runner;
            if(runner.data > value){
                runner = runner.left;
            } else {
                runner = runner.right;
            }
        }
        if (!runner){
            return false;
        }
        if (parentNode.data > runner.data){
            parentNode.left = runner.left;
        } else {
            parentNode.right = runner.right;
        }
        if (runner.right){
            this.insertNode(runner.right);
        }
        return true;
    }

    removeRoot(){
        if(this.isEmpty()) { return; }
        if (this.root.right){
            let leftNode = this.root.left;
            this.root == this.root.right;
            this.insertNode(leftNode);
        } else {
            this.root = this.root.left;
        }
    }

    findDuplicates(){
        var treeToArray = this.toArrayInOrder();
        var duplicates = [];
        for (let i = 0; i < treeToArray.length - 1; i++){
            if (treeToArray[i] == treeToArray[i+1]){
                if (!duplicates.includes(treeToArray[i])){
                    duplicates.push(treeToArray[i]);
                }
            }
        }
        return duplicates;
    }
}



var BST = new BinarySearchTree();
for (let i = 0; i <10; i++){
    BST.insert(Math.floor(Math.random() * 10) + 1); 
}
BST.display();
console.log(BST.removeValue(5))
console.log(BST.toArrayInOrder());
BST.display();







