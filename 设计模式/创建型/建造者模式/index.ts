/**
 * 建造者模式(Builder)所构建的对象一定是庞大而复杂的，并且一定是按照既定的制造工序(步骤)将组件组装起来的。
 * 例如计算机、汽车、建筑物等。
 *
                                        +---------------------------+
                                        |       <<interface>>       |
                                        +----------Builder----------+
                                        |+ buildPart(): Builder     |
                                        +---------------------------+
                                        |+ getProduct(): Product    |
                                        +---------------------------+
                                                      ^
                                                      |
                                                  implements
                                                      |
                                                      |
+-------------------------+              +---------------------------+
|      Product            |              |        BuilderImpl        |
+-------------------------+              +---------------------------+
|                         |<-------------|+ buildPart(): Builder     |
+-------------------------+              +---------------------------+
|                         |              |+ getProduct(): Product    |
+-------------------------+              +---------------------------+
 */

/**
 * 需求：编写一学生类
 * 1 学生基本信息(姓名，性别，出生地)
 * 2 所在学习
 * 3 技能
 */
type BasicInfo = {
  name: string
  sex: string
  birthAddress: string
}
type MiddleSchoolStudent = {
  basicInfo: BasicInfo
  school: string
  skill: string[]
}

interface Builder<T> {
  product: T
  // 约定步骤
  setBasicInfo(basicInfo: BasicInfo): Builder<T>
  setSchool(school: string): Builder<T>
  setSkill(skill: string[]): Builder<T>
  getProduct(): T
}

class MiddleSchoolStudentBuilder implements Builder<MiddleSchoolStudent> {
  product: MiddleSchoolStudent

  constructor() {
    this.product = {} as MiddleSchoolStudent
  }

  setBasicInfo(basicInfo: BasicInfo) {
    this.product.basicInfo = basicInfo
    return this
  }
  setSchool(school: string) {
    this.product.school = school
    return this
  }
  setSkill(skill: string[]) {
    this.product.skill = skill
    return this
  }

  getProduct(): MiddleSchoolStudent {
    return this.product
  }
}

const middleSchoolStudent = new MiddleSchoolStudentBuilder()
.setBasicInfo({
  name: '张三',
  sex: '男',
  birthAddress: 'QingDao',
})
.setSchool('金色摇篮幼儿园')
.setSkill(['吃', '喝', '玩', '乐'])
.getProduct()

console.log(middleSchoolStudent)
