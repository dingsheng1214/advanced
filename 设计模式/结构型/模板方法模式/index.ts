/**
 * 模板方法模式（Template Method）: 是对一系列类行为（方法）的模式化。
 *
 * 我们将总结出来的行为规律固化在基类中，
 * 对具体的行为实现则进行抽象化并交给子类去完成，
 * 如此便实现了子类对基类模板的套用
 *
 *
                    +---------------------------+
                    |     <<abstract class>>    |
                    +---------------------------+
                    |+ templateMethod1()        |
                    +---------------------------+
                    |+ templateMethod2()        |
                    +---------------------------+
                    |+ operation()              |
                    +---------------------------+
                          ^             ^
             |------------|             |--------------|
             |                                         |
             |                                         |
             |                                         |
+-------------------------+              +---------------------------+
|      实现类1             |              |        实现类2             |
+-------------------------+              +---------------------------+
|+ templateMethod1()      |              |+ templateMethod1()        |
+-------------------------+              +---------------------------+
|+ templateMethod1()      |              |+ templateMethod2()        |
+-------------------------+              +---------------------------+
 */

/**
 * 需求：项目管理流程
 * 我们在做一些简单的项目管理时，通常会把整个项目周期分为5个阶段，分别是需求分析、软件设计、代码开发、质量测试、上线发布
 */
abstract class PM {
  abstract analyze(): string // 需求分析
  abstract design(analyzeResult: string): string // 软件设计
  abstract develop(designResult: string): string // 代码开发
  abstract test(developResult: string): boolean // 质量测试
  abstract release(developResult: string): void // 上线发布

  workflow(): void {
    const analyzeResult = this.analyze()
    const designResult = this.design(analyzeResult)
    let developResult: string
    do {
      developResult = this.develop(designResult)
    } while (!this.test(developResult))
    this.release(developResult)
  }
}

// 人力资源管理系统开发
class HR extends PM {
  analyze(): string {
    console.log('产品：分析需求')
    return '人力资源管理系统需求分析.xlsx'
  }
  design(analyzeResult: string): string {
    console.log('UI: 设计界面');
    return '人力资源管理系统设计.docx'
  }
  develop(designResult: string): string {
    console.log('开发：开发代码');
    return '人力资源管理系统开发.exe'
  }
  test(developResult: string): boolean {
    console.log('测试：测试代码')
    return true
  }
  release(developResult: string): void {
    console.log('运维：发布程序');
  }
}
const hr = new HR()
hr.workflow()
