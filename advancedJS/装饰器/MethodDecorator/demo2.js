"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TestClass = void 0;
/**
 *
 * @param target 装饰 static method时,target为构造函数, 装饰实例方法时,taget为实例对象
 * @param propertyKey 方法名
 * @param propertyDescriptor 方法的属性描述符
 */
var methodDecorator = function (target, propertyKey, propertyDescriptor) {
    console.log(target, propertyKey, propertyDescriptor);
    propertyDescriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return "Hello ".concat(args);
    };
};
var TestClass = /** @class */ (function () {
    function TestClass() {
        this.id = 0;
    }
    TestClass.prototype.printId = function (prefix) {
        if (prefix === void 0) { prefix = ''; }
        return prefix + this.id;
    };
    __decorate([
        methodDecorator
    ], TestClass.prototype, "printId");
    return TestClass;
}());
exports.TestClass = TestClass;
console.log(new TestClass().printId('World'));
