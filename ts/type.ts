// string
let member: string = '';
member = 'tim';
// member = 12;

// number
let price:number = 0;

price += 1;
// price = '12';

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
