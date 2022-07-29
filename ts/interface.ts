interface user {
    name: string,
    age?: number,
    [str: string]: any
}

let member: user = {
    name: 'tim',
    age: 34,
    sex: 'male'
}


let func = function ({name, age}: user): void {
    console.log(`my name ${name} age ${age}`)
}

func({name: 'tony', age: 12})
console.log(member.age)

interface IFunc {
    (a: number, b:number): number
}

let myFunc:IFunc = (a: number, b: number):number => a + b;

myFunc(1,2)

interface arr {
    [index: number]: string
}

let array: arr = ['q', 'w']

// 继承
interface IPerson {
    name: string,
    age: number
}

interface IWork {
    work: string
}

interface IStaff extends  IPerson, IWork{
    money: number
}

let person: IStaff = {
    name: 'tim',
    age: 18,
    work: 'student',
    money: 2999
}
