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
var SetNameDecorator = function (firstname, secondname) {
    var name = "".concat(firstname, "-").concat(secondname);
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._name = name;
                return _this;
            }
            class_1.prototype.getName = function () {
                return this._name;
            };
            return class_1;
        }(target));
    };
};
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.c = function () { };
    UserService = __decorate([
        SetNameDecorator('ding', 'sheng')
    ], UserService);
    return UserService;
}());
var exp3 = function () {
    console.log();
    console.log('-----------------------示例3:装饰器工厂-----------------------');
    console.log('-----------------------通过继承方式 重载getName方法-----------------------');
    console.log();
    var user = new UserService();
    console.log(user.getName());
    console.log();
    console.log('-----------------------示例3:执行完毕-----------------------');
};
exp3();
