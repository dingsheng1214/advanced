import Chance from 'chance'
import {Readable} from 'stream'

const chance = new Chance()
/**
 * 定制Readable -- 能够随机生成字符串的流对象
 * 1. 为_read(size)方法提供实现
 * 2. Readable内部逻辑会调用_read(size),而_read(size)又必须调用push()向内部缓冲区填入数据
 */
export class RandomStream extends Readable {
  emittedBytes: number

  constructor(options?: any) {
    super(options)
    this.emittedBytes = 0
  }

  /**
   * 1. 利用chance库生成一个长度等于size的随机字符串
   * 2. 把随机字符串推入内部缓冲区
   * 3. 让这个流有5%的概率终止
   * @param size
   */
  _read(size: number): void {
    const chunk = chance.string({length: size})
    this.push(chunk, 'utf8')
    this.emittedBytes += chunk.length

    if (chance.bool({likelihood: 5})) {
      this.push(null)
    }
  }
}

const randomStream = new RandomStream()

/**
 * 定制Readable -- 方式2
 */
const randomStream2 = new Readable({
  read(size) {
    const chunk = chance.string({length: size})
    this.push(chunk, 'utf8')
    // 5%概率eof
    if (chance.bool({likelihood: 5})) {
      this.push(null)
    }
  },
})

const mountains = ['泰山', '华山', '嵩山', '五台山']
const mountainsStream = Readable.from(mountains)
mountainsStream.on('data', (mountain) => {
  console.log(mountain)
})

// randomStream2
//   .on('data', (chunk) => {
//     console.log(chunk.toString())
//     console.log('--->')
//   })
//   .on('end', () => {
//     console.log('end...')
//   })
