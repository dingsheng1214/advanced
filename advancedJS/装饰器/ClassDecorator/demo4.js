var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @param id 参数
 * @returns  {ClassDecorator}
 */
var ComponentWithId = function (id) {
    return function (target) {
        target.prototype.id = id;
    };
};
var TestClass = /** @class */ (function () {
    function TestClass() {
    }
    TestClass.prototype.printId = function (prefix) {
        if (prefix === void 0) { prefix = ''; }
        return prefix + this.id;
    };
    TestClass = __decorate([
        ComponentWithId(200)
    ], TestClass);
    return TestClass;
}());
console.log(new TestClass().id);
