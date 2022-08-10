"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports["default"] = {};
function personDecorator(constructor) {
    constructor.prototype.name = 'tim';
    constructor.prototype.say = function () {
        console.log("I am ".concat(constructor.prototype.name));
    };
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person = __decorate([
        personDecorator
    ], Person);
    return Person;
}());
var p = new Person();
console.log(p.say());
function personDecorator2(flag) {
    return function (construct) {
        if (flag) {
            construct.prototype.say = function () {
                console.log("flag is  ".concat(flag));
            };
        }
        else {
            construct.prototype.say = function () {
                console.log("flag is  ".concat(flag));
            };
        }
    };
}
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2 = __decorate([
        personDecorator2(false)
    ], Person2);
    return Person2;
}());
var p2 = new Person2();
console.log(p2.say());
function personDecorator3() {
    return function (constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.name = "manu";
                return _this;
            }
            class_1.prototype.say = function () {
                console.log(this.name);
            };
            return class_1;
        }(constructor));
    };
}
var Person3 = personDecorator3()(/** @class */ (function () {
    function class_2(name) {
        this.name = name;
    }
    return class_2;
}()));
var p3 = new Person3('tim');
console.log(p3.say());
/*
* 方法装饰器
*/
// 普通方法: target对应的就是 prototype
// 静态方法: target对应的就是 类的构造函数
function getNameDecorator(target, key, descriptor) {
    console.log(target);
    console.log(key);
    console.log(descriptor);
    // descriptor.writable = false;
    descriptor.value = function () {
        return "decorator";
    };
}
var Test = /** @class */ (function () {
    function Test(name) {
        this.name = "Tim";
        this.name = name;
    }
    Test.prototype.getName = function () {
        return this.name;
    };
    Test.show = function () {
        console.log("Hello MethodDecorator");
    };
    __decorate([
        getNameDecorator
    ], Test.prototype, "getName");
    return Test;
}());
var t = new Test("aaa");
// t.getName = () => {
//   return "Hello Pop"
// }
console.log(t.getName());
