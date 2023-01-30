"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TestClass = void 0;
var propertyDecorator = function (target, propertyKey) {
    var value;
    Reflect.defineProperty(target, propertyKey, {
        get: function () {
            console.log('Getting value ...');
            return value;
        },
        set: function (newVal) {
            value = newVal;
        }
    });
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
        propertyDecorator
    ], TestClass.prototype, "id");
    return TestClass;
}());
exports.TestClass = TestClass;
console.log(new TestClass().id);
