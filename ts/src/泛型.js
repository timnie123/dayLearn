// 不使用泛型
// let getArray = (value:number, items:number):number[]
//     => new Array(items).fill(value);
// let arr = getArray(8, 3);
// // let arr = getArray("abc", 3); // 报错
// console.log(arr);
// function getArray<T>(value: T, length: number):T[] {
//     return new Array(length).fill(value);
// }
//
// let arr = getArray('rocket', 3);
// let arr2 = getArray(12, 3);
//
// let res = arr.map(item=>item.length);
// let res2 = arr2.map(item=>item.length); // : Property 'length' does not exist on type 'number'.
// 泛型约束
// function getLength<T>(value: T):T {
//     return value.length; // Property 'length' does not exist on type 'T'.
// }
function getLength(value) {
    return value.length;
}
console.log(getLength([12, 3, 4, 3]));
console.log(getLength(['12', '22']));
function getLength1(value) {
    return value.length;
}
console.log(getLength1('123'));
// console.log(getLength1(123)); // Argument of type 'number' is not assignable to parameter of type 'ILength'
console.log(getLength1([1, 2]));
console.log(getLength1({ length: 12 }));
var p = {
    name: 'tim',
    age: 22
};
// 泛型类
var Person = /** @class */ (function () {
    function Person(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    return Person;
}());
var person = new Person('tim', 19, 'male');
var person2 = new Person('tim', 19, 'male');
var getValue = function (obj, key) { return obj[key]; };
var obj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(getValue(obj, 'b'));
