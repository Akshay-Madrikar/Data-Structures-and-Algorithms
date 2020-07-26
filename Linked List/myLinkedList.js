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
            next: this.head
        }
        this.head = newNode
        this.length++
    }
};

const myLinkedList = new LinkedList(10);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.prepend(5);
console.log(myLinkedList);