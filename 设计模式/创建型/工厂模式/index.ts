/**
 * 众所周知，要制造产品(实例化对象)就得用到关键字'new',例如 'const plane = new Plane()'
 * 然而这样做的结果会使Plane对象的产生代码被牢牢的硬编码在客户端类里吗, 也就是说客户端与实例化
 * 的过程强耦合了。而事实上，我们完全不必关心Plane的制造过程(实例化，初始化)，而降这个任务交由
 * 相应的工厂来全权负责，工厂最终能交付产品供我们使用即可，如此我们便摆脱了产品生产方式的束缚，
 * 实现了与制造过程彻底解耦。
 *
 * 除此之外，工厂模式是基于多元化产品的构造方法发展而来的，它开辟了产品多元化的生产模式，
 * 不同的产品交由不同的专业工厂来生产
 *
 *
+-------------------------+              +---------------------------+
|        Product          |              |       <<interface>>       |
+-------------------------+              +----------Factory----------+
|                         |              |                           |
+-------------------------+              +---------------------------+
|                         |              |+ factoryMethod(): Product |
+-------------------------+              +---------------------------+
            ^
            |
            |
            |
            |
+-------------------------+              +---------------------------+
|      Child Product      |              |        ChildFactory       |
+-------------------------+              +---------------------------+
|                         |              |                           |
+-------------------------+              +---------------------------+
|                         |              |+ factoryMethod(): Product |
+-------------------------+              +---------------------------+
 */

/**
 * 需求：项目有一个弹窗需求，弹窗有多种，他们之间存在内容和颜色上的差异。
 */

abstract class Popup {
  content: string
  color: string
  constructor(content: string, color: string) {
    this.content = content
    this.color = color
  }
  abstract show(): void
}
// 指定弹框工厂的抽象标准
interface PopupFactory {
  create(content: string, color: string): Popup;
}

class InfoPopup extends Popup {
  constructor(content: string, color: string) {
    super(content, color)
  }
  show() {
    console.log(`InfoPopup: ${this.content} ${this.color}`);
  }
}
class InfoPopupFactory implements PopupFactory {
  create(content: string, color: string): Popup {
    return new InfoPopup(content, color)
  }
}
const factory = new InfoPopupFactory()
const infoPopup = factory.create('info', 'red')
infoPopup.show();

// ! 此时需要新增一种 success 弹框方式, 在不需要修改原有代码的基础上，只需两步即可实现
// ? 1 创建一个 SuccessPopup类 继承 Popup
class SuccessPopup extends Popup {
  constructor(content: string, color: string) {
    super(content, color)
  }
  show() {
    console.log(`SuccessPopup: ${this.content} ${this.color}`);
  }
}
// ? 2 创建一个 SuccessPopupFactory 类 实现 PopupFactory
class SuccessPopupFactory implements PopupFactory {
  create(content: string, color: string): Popup {
    return new InfoPopup(content, color)
  }
}

const successFactory = new SuccessPopupFactory()
const successPopup = successFactory.create('success', 'green')
successPopup.show();