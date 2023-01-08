import {Writable} from 'stream'
import mkdirp from 'mkdirp'
import {dirname, join} from 'path'
import {promises as fs} from 'fs'

export class ToFileStream extends Writable {
  constructor(options = {}) {
    super({...options, objectMode: true})
  }

  _write(
    chunk: any,
    encoding: BufferEncoding,
    callback: (error?: Error | null | undefined) => void
  ): void {
    mkdirp(dirname(chunk.path))
      .then(() => fs.writeFile(chunk.path, chunk.content))
      .then(() => callback())
      .catch(callback)
  }
}

const tfs = new ToFileStream()

const tfs2 = new Writable({
  objectMode: true,
  write(chunk, encoding, callback) {
    mkdirp(dirname(chunk.path))
      .then(() => fs.writeFile(chunk.path, chunk.content))
      .then(() => callback())
      .catch(callback)
  },
})

tfs2.write({
  path: join('files', 'file2.txt'),
  content: 'hello',
})
tfs2.end(() => console.log('all files created...'))
