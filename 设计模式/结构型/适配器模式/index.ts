/**
 * ? 适配器模式（Adapter）通常也被称为转换器，顾名思义，它一定是进行适应与匹配工作的物件。
 * 当一个对象或类的接口不能匹配用户所期待的接口时，适配器就充当中间转换的角色，以达到兼容用户接口的目的，
 * 同时适配器也实现了客户端与接口的解耦，提高了组件的可复用性
 */

/**
 * 需求； 我们买了一台电视机，其电源插头是两相的，但是墙上的插孔是三相的，这时电视机无法通电使用。
 *       可以通过适配器模式，将电源插孔转换为两相的插孔，这样电视机就可以通电使用了。
 */

// 三相插孔接口
interface TriplePin {
  // 参数分别为 火线、零线、地线
  electrify(l: number, n: number, e: number): void
}
// 双相插孔接口
interface DualPin {
  // 参数分别为 火线、零线、 没有地线
  electrify(l: number, n: number): void
}

class TV implements DualPin {
  electrify(l: number, n: number) {
    console.log('电视机通电，火线：' + l + '，零线：' + n)
    console.log('电视开机')
  }
}

class Adapter implements TriplePin {
  dualPin: DualPin

  // 创建适配器时，需要把 两相插孔 接入进来
  constructor(dualPin: DualPin) {
    this.dualPin = dualPin
  }

  // 适配器实现的是目标接口
  electrify(l: number, n: number, e: number): void {
    this.dualPin.electrify(l, n)
  }
}
