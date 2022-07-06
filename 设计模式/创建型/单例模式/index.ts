/**
 * 单例即单一的实力， 确切的讲就是指在某个系统中只存在一个实例
 * 同时提供集中、统一的访问接口，以使系统行为保持一致。
 *
 *
                    ---------------|
                    |              |
                    |              |
                    V              |
+-------------------------+        |
|        Singleton        |        |
+-------------------------+        |
|- instance: Singleton    | --------
+-------------------------+
|- Singleton()            |
|+ getInstance: Singleton |
+-------------------------+
 */

class Singleton {
  private static instance: Singleton = new Singleton()

  // 私有的构造方法
  private constructor() {}

  public static getInstance(): Singleton {
    return this.instance
  }
}

console.log(Singleton.getInstance() === Singleton.getInstance())
