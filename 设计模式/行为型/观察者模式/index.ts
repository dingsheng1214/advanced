/**
 * 观察者模式（Observer）可以针对被观察对象与观察者对象之间一对多的依赖关系建立起一种行为自动触发机制，
 * 当被观察对象状态发生变化时主动对外发起广播，以通知所有观察者做出响应
 *
+-------------------------+                  +-------------------------+
|        Subject          |                  |          Observer       |
+-------------------------+                  +-------------------------+
|- observers: Observer[]  |                  |                         |
+-------------------------+                  +-------------------------+
|+ register(Observer):void|                  |                         |
|+ notify(): void         |-------通知------> |+ update: void           |
+-------------------------+                  +-------------------------+
 */

class Subject{
    observers: Observer[]
    constructor(){
        this.observers = [];
    }
    register(observer: Observer){
        this.observers.push(observer);
    }
    notify(message: string){
        this.observers.forEach(item => item.update(message));
    }
}

interface Observer {
    update(message: string): void
}

class LogObserver implements Observer {
    update(message: string): void {
        console.log(message);
    }
}
class ErrorObserver implements Observer {
    update(message: string): void {
        console.error('error:', message);
    }
}



const subject = new Subject();
subject.register(new LogObserver());
subject.register(new ErrorObserver());
subject.notify('Hello World');

