class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }


    addFront(value){
        // create new node
        let newNode = new Node(value);
        // form connection from newNode to current head node
        newNode.next = this.head;
        // Reassign the head of SLL to this newNode
        this.head = newNode;
        // returning this, allowing for chaining methods
        return this
    }

    removeFront(){
        // check if there is already a node at the head of the list
        if(this.head){
        // re-assign the head node to be the next node in the list
            this.head = this.head.next;
        }
    }
    
    front(){
        if(this.head){
            return(this.head.value);
        }
        return null;

    }
}

    // a method for viewing all items in the list
    view() {
        // we will have to see all of the nodes..
        // starting from the beginning of the list
        var currentNode = this.head;
        // as long as currentNode exists or is not NULL
        while(currentNode){
            console.log(`current node's value is ${currentNode.value}`)
            currentNode = currentNode.next
        }
    }
