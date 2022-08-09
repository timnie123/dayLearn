import construct = Reflect.construct;

export default {};

function personDecorator(constructor: any) {
    constructor.prototype.name = 'tim'
    constructor.prototype.say = (): void => {
        console.log(`I am ${constructor.prototype.name}`)
    }
}


@personDecorator
class Person {

}

let p = new Person();
console.log((p as any).say())

function personDecorator2(flag: boolean) {
    return function (construct: any) {
        if(flag) {
            construct.prototype.say = (): void => {
                console.log(`flag is  ${flag}`)
            }
        } else {
            construct.prototype.say = (): void => {
                console.log(`flag is  ${flag}`)
            }
        }
    }
}


@personDecorator2(false)
class Person2 {

}

let p2 = new Person2();
console.log((p2 as any).say())

function personDecorator3() {
    return function <T extends new (...args: any[]) => {}>(constructor: T) {
        return class extends constructor {
            name = "manu";
            say() {
                console.log(this.name);
            }
        };
    };
}

const Person3 = personDecorator3()(class {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
})

let p3 = new Person3('tim')
console.log(p3.say())
