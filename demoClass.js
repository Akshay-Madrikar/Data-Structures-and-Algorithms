class Programmer {
    constructor( name, course ) {
        console.log(this)
        this.name = name;
        this.course = course;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}. I've postgraduated from ${this.course} course`);
    }
};

class Person extends Programmer{
    constructor(name, course){
        super(name,course);
        console.log(this);
    }
};

const p1 = new Person('Akshay', 'MCA');
const p2 = new Person('Pratik','MScIT');
p1.introduce();
p2.introduce();