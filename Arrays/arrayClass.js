class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    };

    push(item){
        this.data[this.length]= item;
        this.length++;
        return this.length;
    };

    pop(){
        delete this.data[this.length -1];
        this.length--;
    };

    shiftItems(index){
        for(let i=index; i<this.length-1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }
}

const a1 = new MyArray();
a1.push('Slowb0y');
a1.push('loves');
a1.push('Btown Boyz');
//a1.pop();
a1.delete(0);
console.log(a1);