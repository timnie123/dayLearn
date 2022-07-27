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
        // super.say();
        console.log(this.score)
    }

    static sayScore() {
        console.log(`my score is 13`)
    }
}

let  p = new Person('tim', 18);

p.say();

let c = new Student('tony', 18, 78);

c.say()
Student.sayScore()

class Animal {
    public name: String
    protected eyes: number
    private color: string

    constructor(name: string, eyes: number, color: string) {
        this.name = name;
        this.eyes = eyes;
        this.color = color
    }

    say():void {
        console.log(1212)
    }
}

let dog = new Animal('dog', 2, 'red');
dog.say()

class Dog extends Animal {
    legs: number
    private age: number
    constructor(name: string, eyes: number, color: string, legs: number, age: number) {
        super(name, eyes, color);
        this.legs = legs;
        this.age = age
    }

    get myAge(): number {
        return this.age
    }

    set myAge(num: number) {
        this.age = num;
    }

    sayHi(): void {
        console.log(this.name);
        console.log(this.eyes);
        console.log(this.legs);
        console.log(this.age);
        // console.log(this.color);
    }
}

let dogA = new Dog('wang', 2, 'red', 4,2)

dogA.sayHi()
console.log(dogA.name)
console.log(dogA.myAge)
dogA.myAge = 18
console.log(dogA.myAge)

abstract class Water {

    abstract name: string;
    abstract ph: number;

    show() {
        console.log(this.name)
    }
}

class Milk extends Water {
    name: string = 'yili';
    ph: number = 7;
}

let a = new Milk();
console.log(a.name)

interface IDevice {
    name: string,
    usage: string
}

class Phone implements IDevice {
    name: string;
    usage: string;

    constructor(name: string, usage: string) {
        this.name = name;
        this.usage = usage
    }
}
