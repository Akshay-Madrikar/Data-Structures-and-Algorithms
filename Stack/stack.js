class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class myStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if( this.length === 0 ) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
    };

    pop() {
        if( !this.top ) {
            return null;
        }
        
        if( this.top === this.bottom ) {
            this.bottom = null;
        }

        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
    }

    peek() {
        console.log(this.top);
    }
};

const s1 = new myStack();
s1.push(10);
s1.push(20);
s1.pop();
s1.push(30);
s1.push(40);
console.log(s1);