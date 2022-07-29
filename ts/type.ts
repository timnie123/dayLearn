// string
let member: string = '';
member = 'tim';
// member = 12;

// number
let price:number = 0;

price += 1;
// price = 0x00;
// price = 0o00;
// price = 0b00;
// price = '12'; error

// boolean
let flag: boolean = false;

// array

let list: string[] = [];
list.push('a');
list.push('b');
// list.push(1)

let listA: Array<number> = [];
listA.push(1);
listA.push(2);

let listB: (number | string)[] = [];
listB.push(1);
listB.push('1');

// tuple
let tup: [string, number];
tup = ['1',2];

// any
let any:any;
any = 1;
any = 'sd';

let val:void;

val = null;
val = undefined;
// val = 123

function test():void {
    // return 'qqq';
}

//
function error(): never {
    throw new Error('12');
}

let obj: object = {
    name: '123',
    age: 21
};

console.log(obj['name']);

// 枚举
enum Color {
    red,
    blue,
    green
}

// 类型别名
type color = 'red' | 'green' | 'blue';

let myColor: color = 'red';
// let myColor: color = 'orange';

type member = {
    name: string,
    age: number,
    sex: string
}

let one: member = {
    name: 'tim',
    age: 19,
    sex: 'nan'
}
