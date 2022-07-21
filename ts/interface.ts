interface user {
    readonly name: string,
    [str: string]: string
    // age?: number,
}

let member: user = {
    name: 'tim',
    age: '34'
}


let func = function ({name, age}: user): void {
    console.log(`my name ${name} age ${age}`)
}

func({name: 'tony', age: '12'})
console.log(member.age)
