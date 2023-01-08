/**
 * 1 从标准输入端 获取 gzip 格式的数据流
 * 2. 解压
 * 3. 小写转大写
 * 4. 压缩
 * 5. 把压缩过的数据发送到 标准输出端
 */

import {createGzip, createGunzip} from 'zlib'
import {pipeline, Transform} from 'stream'
import {stdin, stdout} from 'process'

const uppercasify = new Transform({
  transform(chunk, encoding, callback) {
    this.push((chunk as string).toString().toUpperCase())
    callback()
  },
})
pipeline(stdin, createGunzip(), uppercasify, createGzip(), stdout, (err) => {
  if (err) {
    console.error('err:', err)
    process.exit()
  }
})
