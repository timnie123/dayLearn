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

/*
* 方法装饰器
*/

// 普通方法: target对应的就是 prototype
// 静态方法: target对应的就是 类的构造函数
function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(key);
    console.log(descriptor);

    // descriptor.writable = false;
    descriptor.value = function() {
        return "decorator"
    }
}


class Test {
    name: string = "Tim";
    constructor(name: string){
        this.name = name;
    }
    @getNameDecorator
    getName() {
        return this.name;
    }

    static show():void {
        console.log("Hello MethodDecorator");
    }
}


let t = new Test("aaa")
// t.getName = () => {
//   return "Hello Pop"
// }
console.log(t.getName());

/*访问器的装饰器
* 方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
成员的名字。
成员的名字。
TypeScript不允许同时装饰一个成员的get和set访问器。
* */
function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false
}

class Test1 {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    @visitDecorator
    set name(newName: string) {
        this._name = newName;
    }
}

let p8 = new Test1("Tim");
p8.name = "Manu"
console.log(p8.name);

/*属性的装饰器
属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：

对于静态属性来说就是当前的类, 对于实例属性来说就是当前实例
成员的名字*/
function nameDecorator(target: any, key: string): any {
    // const descriptor: PropertyDescriptor = {
    //   writable: false
    // };
    // return descriptor;

    // 修改的并不是实例上的 name， 而是原型上的 name
    target[key] = '秦岚';
}
class Test3 {
    @nameDecorator
        // name 是放在实例上的
    name = "Tim"
}

let p9 = new Test3();
p9.name = "Tony"
console.log(p9.name);
console.log((p9 as any).__proto__.name);

/*参数装饰器
* 参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数:
对于静态成员来说是当前的类，对于实例成员是当前实例。
参数所在的方法名称。
参数在参数列表中的索引。*/

function paramDecorator(target: any, method: string, index: number) {
    console.log(target, method, index);
}

class Test4 {
    getInfo(name: string, @paramDecorator age: number) {
        console.log(name, age);
    }
}

const p10 = new Test4();
p10.getInfo('Tim', 18);
