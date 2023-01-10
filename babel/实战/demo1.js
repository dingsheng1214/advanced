/**
 * 我们经常会打印一些日志来辅助调试，但是有的时候会不知道日志是在哪个地方打印的。
 * 希望通过 babel 能够自动在 console.log 等 api 中插入文件名和行列号的参数，方便定位到代码。
 *
 * 也就是把这段代码：
 * console.log(1);
 * 转换为这样：
 * console.log('文件名（行号，列号）：', 1);
 */

const {parse} = require('@babel/parser')
const traverse = require('@babel/traverse').default
const {stringLiteral} = require('@babel/types')
const generator = require('@babel/generator').default

const sourceCode = 'console.log(1)'

const ast = parse(sourceCode)

traverse(ast, {
  CallExpression(path, state) {
    const node = path.node
    const loc = node.loc
    const calee = node.callee
    const object = calee.object
    if (object.name === 'console') {
      const args = node.arguments
      const {line, column} = loc.start
      args.unshift(stringLiteral(`filename: (${line}, ${column})`))
    }
  },
})

const outputCode = generator(ast, {sourceMaps: true})

console.log(outputCode)
