// unknown
// 1.任何类型都可以赋值给unknown类型
let str: unknown;
str = 1;
str = '222'

// 2.不能将unknown类型赋值给其它类型
let val:unknown = 18;
let num: number;
// num = val;

// 3.unknown与其它任何类型组成的交叉类型最后都是其它类型
type MyType1 = number & unknown;
type MyType2 = unknown & boolean;
let a:MyType1 = 18;
let b:MyType2 = true;

// 4.unknown除了与any以外, 与其它任何类型组成的联合类型最后都是unknown类型
type MyType3 = unknown | any;
type MyType4 = unknown | number;
type MyType5 = unknown | string | boolean;


// 5.never类型是unknown类型的子类型
type MyType6 = never extends unknown ? true : false;

// 定义：被检测类型是一个联合类型的时候, 该条件类型就被称之为分布式条件类型

// type MyType<T> = T extends any ? T : never;
// type res = MyType<string | number | boolean>;


// 从T中剔除可以赋值给U的类型。 Exclude
// type res = Exclude<string | number | boolean, number>


// 提取T中可以赋值给U的类型。 Extract
// type res = Extract<string | number | boolean, number>

// 从T中剔除null和undefined。 NonNullable
// type res = NonNullable<string | boolean | null | undefined>

// 获取函数返回值类型。 ReturnType
// type res = ReturnType<()=>number>

// 获取一个类的构造函数参数组成的元组类型。 ConstructorParameters
// class Person {
//     constructor(name:string, age:number){}
// }
// type res = ConstructorParameters<typeof Person>;


// 获得函数的参数类型组成的元组类型。 Parameters
function say(name:string, age:number, gender:boolean) {
}
type res = Parameters<typeof say>;

//infer关键字推断

// 假如想获取数组里的元素类型，如果是数组则返回数组中元素的类型，否则返回这个类型本身
type Id = number[];
type IName = string[];

type Unpacked<T> = T extends IName ? string : T extends Id ? number : T;

type idType = Unpacked<Id>; // idType 类型为 number
type nameType = Unpacked<IName>; // nameType 类型为string


// 使用infer简化操作
type ElementOf<T> = T extends Array<infer E> ? E : T;
type res1 = ElementOf<string[]>; // string
type res2 = ElementOf<boolean>; // boolean


// infer可以推断出联合类型
type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;
type res3 = Foo<{ a: string; b: number }>; // res3类型为 string | number


// 当你不想重复定义类型，一个类型可以以另一个类型为基础创建新类型。
// 通俗的说就是，以一个类型为基础，根据它推断出新的类型

interface IPerson {
    name: string;
    age: number;
}

// 只读
type Readonly1<T> = {
    readonly [P in keyof T]: T[P];
}

type ReadonlyRes = Readonly1<IPerson>;

// 可选
type Partial1<T> = {
    [P in keyof T]?: T[P];
}

type PartialRes = Partial1<IPerson>;


// 通过 + - 指定添加或者删除
interface IPerson2 {
    readonly name?: string;
    readonly age?: number;
}

type ReadonlyPartial<T> = {
    -readonly [P in keyof T]-?: T[P]
}

type res4 = ReadonlyPartial<IPerson2>;


// Readonly/Partial 关键字
interface IPerson3 {
    name: string;
    age: number;
}

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}
type Partial<T> = {
    [P in keyof T]?: T[P];
}

type res5 = Readonly<IPerson3>;
type res6 = Partial<IPerson3>;
export default {}

// Record映射类型
// 他会将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型
type Name = "person" | "animal" ;
type Person = {
    name: string
    age: number
}
// interface IPerson  {
//   name: string
//   age: number
// }

type NewType = Record<Name, Person>
let res: NewType = {
    person: {
        name: "Tim",
        age: 18
    },
    animal: {
        name: "manu",
        age: 0.3
    }
}
console.log(res);


// Pick映射类型
// 将原有类型中的部分内容映射到新类型中
// type Info = {
//   name: string
//   age: number
// }
interface IInfo  {
    name: string
    age: number
}

type PartProp = Pick<IInfo, "name">
let res6:PartProp = {
    name: "Tim"
}
