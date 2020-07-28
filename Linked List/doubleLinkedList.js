class DoubleLinkedList {
    constructor( value ) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append( value ) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++ 
    };

    prepend( value ) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head
        this.head.prev = newNode;
        this.head = newNode
        this.length++
    };

    insert( index, value ) {

        if( index >= this.length ) {
            return 'Out of index error'
        }
        const newNode = {
            value: value,
            next : null,
            prev: null
        };

        const prevNode = this.traverseToIndex(index - 1);
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
    };

    remove( index ) {
        const prevNode = this.traverseToIndex(index - 1);
        const nodeToRemove = prevNode.next;
        prevNode.next = nodeToRemove.next;
        nodeToRemove.next.prev = prevNode;
        console.log(nodeToRemove.next.prev)
        console.log(this)
        this.length--;
    };

    traverseToIndex( index ) {
        let counter = 0;
        let currentNode = this.head;
        while( counter !== index ) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    };

    // To display clearly using array
    printList() {
        const array = [];
        let currentNode = this.head;
        while( currentNode !== null ) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array)
    };
};

const myLinkedList = new DoubleLinkedList(10);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.append(25);
myLinkedList.prepend(5);
myLinkedList.insert(4, 12);
myLinkedList.remove(2);
myLinkedList.printList();