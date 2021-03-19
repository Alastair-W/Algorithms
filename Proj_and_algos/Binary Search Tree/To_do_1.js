class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    
    add(value){
        let newNode = BTNode(value);
        newNode.left = null;
        newNode.rigt = null;
        this.root = newNode;
    }
}

let newBST = new BST('Test');
newBST.add(7);