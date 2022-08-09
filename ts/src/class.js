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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.say = function () {
        console.log('father');
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, score) {
        var _this = _super.call(this, name, age) || this;
        _this.score = score;
        return _this;
    }
    Student.prototype.say = function () {
        // super.say();
        console.log(this.score);
    };
    Student.sayScore = function () {
        console.log("my score is 13");
    };
    return Student;
}(Person));
var p = new Person('tim', 18);
p.say();
var c = new Student('tony', 18, 78);
c.say();
Student.sayScore();
var Animal = /** @class */ (function () {
    function Animal(name, eyes, color) {
        this.name = name;
        this.eyes = eyes;
        this.color = color;
    }
    Animal.prototype.say = function () {
        console.log(1212);
    };
    return Animal;
}());
var dog = new Animal('dog', 2, 'red');
dog.say();
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, eyes, color, legs, age) {
        var _this = _super.call(this, name, eyes, color) || this;
        _this.legs = legs;
        _this.age = age;
        return _this;
    }
    Object.defineProperty(Dog.prototype, "myAge", {
        get: function () {
            return this.age;
        },
        set: function (num) {
            this.age = num;
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.sayHi = function () {
        console.log(this.name);
        console.log(this.eyes);
        console.log(this.legs);
        console.log(this.age);
        // console.log(this.color);
    };
    return Dog;
}(Animal));
var dogA = new Dog('wang', 2, 'red', 4, 2);
dogA.sayHi();
console.log(dogA.name);
console.log(dogA.myAge);
dogA.myAge = 18;
console.log(dogA.myAge);
