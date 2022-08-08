// // 不使用泛型
// let getArray = (value:number, items:number):number[] => new Array(items).fill(value);
// let arr = getArray(8, 3);
// // let arr = getArray("abc", 3); // 报错
// console.log(arr);

function getArray<T>(value: T, length: number):T[] {
    return new Array(length).fill(value);
}

let arr = getArray('rocket', 3);
let arr2 = getArray(12, 3);

let res = arr.map(item=>item.length);
// let res2 = arr2.map(item=>item.length); // : Property 'length' does not exist on type 'number'.

// 泛型约束

// function getLength<T>(value: T):T {
//     return value.length; // Property 'length' does not exist on type 'T'.
// }

function getLength<T>(value: Array<T>):number {
    return value.length;
}

console.log(getLength([12,3,4,3]));
console.log(getLength(['12','22']));

/// 泛型接口
interface ILength {
    length: number
}

function getLength1<T extends ILength>(value: T):number {
    return value.length;
}

console.log(getLength1('123'));
// console.log(getLength1(123)); // Argument of type 'number' is not assignable to parameter of type 'ILength'
console.log(getLength1([1,2]));
console.log(getLength1({length: 12}));


interface IPerson<T1, T2> {
    name: T1,
    age: T2
}

let p:IPerson<string, number> = {
    name: 'tim',
    age: 22
}

// 泛型类
class Person<T1, T2> {
    name: T1;
    age: T2;
    sex: T1;

    constructor(name:T1, age:T2, sex: T1) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}

let person = new Person<string, number>('tim', 19, 'male');
let person2:Person<string, number> = new Person('tim', 19, 'male');

// 类型参数进行约束
interface Ikey {
    [key: string]: any
}

let getValue = (obj: Ikey, key: string) => obj[key];

let obj = {
    a:1,
    b:2,
}
console.log(getValue(obj, 'b'));
console.log(getValue(obj, 'c')); // undefined

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2};
getProperty(x, "a");
// getProperty(x, "c");
