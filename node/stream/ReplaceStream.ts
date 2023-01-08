import {Transform, TransformCallback} from 'stream'

export class ReplaceStream extends Transform {
  public tail: string
  constructor(
    public searchStr: string,
    public replaceStr: string,
    options: any
  ) {
    super({...options})
    this.tail = ''
  }

  _transform(
    chunk: any,
    encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    const pieces = (this.tail + chunk).split(this.searchStr)
    const lastPiece = pieces[pieces.length - 1]
    const tailLen = this.searchStr.length - 1
    this.tail = lastPiece.slice(-tailLen)
    pieces[pieces.length - 1] = lastPiece.slice(0, -tailLen)
    this.push(pieces.join(this.replaceStr))
    callback()
  }
  _flush(callback: TransformCallback): void {
    this.push(this.tail)
    callback()
  }
}

// --> write  --> transform --> read
const replaceStream = new ReplaceStream('Word', 'Node.js', {})
// 读
replaceStream.on('data', (chunk) => console.log(chunk.toString()))

// 写
replaceStream.write('Hello W')
replaceStream.write('ord! ')
replaceStream.end()
