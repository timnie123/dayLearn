class Person {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    say(): void {
        console.log('father');
    }
}

class Student extends Person {
    score: number;

    constructor(name: string, age: number, score: number) {
        super(name, age);
        this.score = score
    }

    say() {
        super.say();
        console.log('child')
    }
}

let  p = new Person('tim', 18);

p.say();

let c = new Student('tony', 18, 78);

c.say()
