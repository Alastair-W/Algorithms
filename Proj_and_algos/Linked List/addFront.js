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

    removeBack(){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.next.next === null){
                currentNode.next = null
            }
            currentNode = currentNode.next
        }
        console.log(this.displayList());
    }
    
    front(){
        if(this.head){
            return(this.head.value);
        }
        return null;
    }

    addBack(value){
        let currNode = this.head
        while(currNode.next){
            currNode = currNode.next;
        }
        let newNode = new Node(value);
        currNode.next = newNode;
        return this
    }

    contains(value){
        let currNode = this.head
        while(currNode){
            if(currNode.value === value){
                console.log(currNode)
                return currNode;
            }
            currNode = currNode.next;
        }
        return false;
    }

    maxVal(){
        var currentNode = this.head;
        let maxVal = this.head.value;
        while(currentNode){
            if(currentNode.value > maxVal){
            }
            currentNode = currentNode.next
        }
        console.log(`Maximum Value in list is ${maxVal}`);
    }

    minVal(){
        var currentNode = this.head;
        let minVal = this.head.value;
        while(currentNode){
            if(currentNode.value < minVal){
            }
            currentNode = currentNode.next
        }
        console.log(`Maximum Value in list is ${minVal}`);
    }

    avgVal(){
        let currentNode = this.head;
        let totalVal = 0;
        let counter = 0;
        while(currentNode){
            totalVal += currentNode.value;
            counter++;
            currentNode = currentNode.next;
        }
        let averageVal = totalVal/counter;
        console.log(`Average node value is ${averageVal}`);
    }

    lastVal(){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.next === null){
                console.log(`Last value is ${currentNode.value}`);
            }
            currentNode = currentNode.next;
        }
        return this
    }

    // a method for viewing all items in the list
    displayList(){
    // we will have to see all of the nodes..
    // starting from the beginning of the list
        let currentNode = this.head;
        let listlen = 0;
    // as long as currentNode exists or is not NULL
        while(currentNode){
            console.log(`current node's value is ${currentNode.value}`);
            currentNode = currentNode.next
            listlen += 1;
        }
        console.log(`List length is ${listlen}`);
    }


    prependVal(value, before){
        // create new node
        let newNode = new Node(value);
        let currentNode = this.head
        // console.log(currentNode.value)
        while(currentNode.next){
            console.log(currentNode.next.value)
            if(currentNode.next.value === before){
                console.log(currentNode.next)
                newNode.next = currentNode.next
                currentNode.next = newNode
                return this 
            }
            currentNode = currentNode.next
        }
        this.addBack(value)
        return this
    }
    
    appendVal(value, after){
        // create new node
        let newNode = new Node(value);
        let currentNode = this.head
        // console.log(currentNode.value)
        while(currentNode.next){
            console.log(currentNode.value)
            if(currentNode.value === after){
                console.log(currentNode.value)
                newNode.next = currentNode.next
                currentNode.next = newNode
                return this 
            }
            currentNode = currentNode.next
        }
        this.addBack(value)
        return this
    }

    removeVal(value){
        let currNode = this.head
        while(currNode.next){
            if(currNode.next.value == value){
                currNode.next = currNode.next.next
                // currNode.next = null
                return this
            }
            currNode = currNode.next
        }
        console.log('Value not in list')
        return this
    }

    minToFront(){
        let currentNode = this.head;
        let minVal = this.head.value;
        while(currentNode){
            if(currentNode.value < minVal){
                minVal = currentNode.value
            }
            currentNode = currentNode.next
        }
        if(this.head.value === minVal){
            return this
        }
        else{
            currentNode = this.head.next
            while(currentNode){
                if(currentNode.next.value === minVal){
                    let tempNext = currentNode.next.next
                    currentNode.next.next = this.head
                    this.head = currentNode.next
                    currentNode.next = tempNext                 
                    return this
                }
                currentNode = currentNode.next
            }
        }
        return this
    }

}

let newList = new SLL('Test');
newList.addFront(7);
newList.addFront(13);
newList.addFront(10).addFront(25);
newList.displayList('Test');
console.log(newList.contains(25));
newList.maxVal();
newList.minVal();
newList.avgVal();
newList.lastVal();
newList.removeBack();
newList.addBack(66).displayList();
newList.contains(13);
newList.prependVal(14,13).displayList();
newList.prependVal(22,19).displayList();
newList.prependVal(77,10).displayList();
newList.appendVal(17,10).displayList();
newList.appendVal(17,100).displayList();
newList.removeVal(17).displayList();
newList.removeVal(117).displayList();
newList.minToFront().displayList();
