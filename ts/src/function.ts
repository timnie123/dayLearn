// 可选参数
let func1 = function (a: number, b?: number): void {
    console.log(a)
}

func1(12);

// 默认参数
let func2 = function (a: number = 10, b: number = 20): void {
    console.log(a + b);
}

func2();

// 剩余参数
let func3 = function (a: number, ...arg: any[]) {
    console.log(a)
    console.log(arg)
}

func3(1,2,3,4);

// 重载
interface Direction {
    top: number
    right: number
    bottom: number
    left: number
}

function assigned(all: number): Direction
function assigned(topAndBottom: number, leftAndRight: number): Direction
function assigned(top: number, right: number, bottom: number, left: number): Direction

// 代码实现函数不可被调用
function assigned (a: number, b?: number, c?: number, d?: number) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a
    } else if (c === undefined && d === undefined) {
        c = a
        d = b
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    }
}

assigned(1);
assigned(1, 2);
assigned(1,2,3,4);
