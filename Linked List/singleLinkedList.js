class LinkedList {
    constructor( value ) {
        this.head = {
            value: value,
            next: null 
        }
        this.tail = this.head;
        this.length = 1;
    }

    append( value ) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++ 
    };

    prepend( value ) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
    };

    insert( index, value ) {

        if( index >= this.length ) {
            return 'Out of index error'
        }
        const newNode = {
            value: value,
            next : null
        };

        const prevNode = this.traverseToIndex(index - 1);
        console.log(prevNode)
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
    };

    remove( index ) {
        const prevNode = this.traverseToIndex(index - 1);
        const nodeToRemove = prevNode.next;
        prevNode.next = nodeToRemove.next;
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

const myLinkedList = new LinkedList(10);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.prepend(5);
myLinkedList.insert(2, 12);
myLinkedList.remove(1);
myLinkedList.printList();

console.log(JSON.stringify(myLinkedList)); // To see proper representation of our linked list
