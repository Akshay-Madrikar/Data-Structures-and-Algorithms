class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class myQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        console.log(this.first);
    }

    enqueue(value) {
        const newNode = new Node(value);
        if( this.length === 0 ) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        
        this.length++
    }

    dequeue() {
        if( this.first === this.last ) {
            return null;
        }

        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
    }
}

const queue = new myQueue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
queue.enqueue(40);
queue.peek();
console.log(queue)

