class BTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    

    add(value){
        if(this.root){
            let currentNode = this.root;
            while(currentNode){
                if(value>currentNode.value){
                    if(currentNode.right){
                        currentNode = currentNode.right
                    }
                    else{
                        let newNode = new BTNode(value);
                        currentNode.right = newNode;
                        return this
                    }
                }
                else{
                    if(currentNode.left){
                        currentNode = currentNode.left;
                    }
                    else{
                        let newNode = new BTNode(value);
                        currentNode.left = newNode;
                        return this
                    }
                }
            }
        }
        this.root = new BTNode(value);1
        return this
    }

    contains(value){
        let currentNode = this.root;
        while(currentNode){
            if(value == currentNode.value){
                return true;
            }
            if(value > currentNode.value){
                if(!currentNode.right){
                    return false;
                }
                currentNode = currentNode.right;
            }
            else{
                if(!currentNode.left){
                    return false;
                }
                currentNode = currentNode.left;
            }
        }
        return false
    }

    min(){
        let currentNode = this.root;
        while(currentNode){
            if(currentNode.left){
                currentNode = currentNode.left
            }
            else{
                console.log('Min Val in Tree: '+currentNode.value)
                return this
            }
        }
    }

    max(){
        let currentNode = this.root;
        while(currentNode){
            if(currentNode.right){
                currentNode = currentNode.right
            }
            else{
                console.log('Max Val in Tree: '+currentNode.value)
                return this
            }
        }
    }

    size(){
        if(this.root === null){
            return 0
        }
        function sizeHelp(currentNode){
            if(!currentNode){
                return 0
            }
            return 1 + sizeHelp(currentNode.left) + sizeHelp(currentNode.right);
        }
        return sizeHelp(this.root)
    }

    isEmpty(){
        let currentNode = this.root;
        if(!currentNode){
            return 'Empty'
        }
        else{
            return 'Not Empty'
        }
    }

    height(){
        let currentNode = this.root;
        function heightCount(currentNode){
            if(!currentNode){
                return 0
            }
            return Math.max(heightCount(currentNode.left), heightCount(currentNode.right))+1;
        }
        return heightCount(currentNode);
    }

    
}

let newBST = new BST('Test');
newBST.add(7).add(3).add(17);
console.log(newBST.contains(7));
newBST.min().max();
newBST.add(37).add(13).add(2);
newBST.min().max();
console.log(newBST.size());
console.log(newBST.isEmpty());
newBST.add(11);
console.log(newBST.height());
