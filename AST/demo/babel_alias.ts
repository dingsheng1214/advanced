import generate from '@babel/generator'
import {parse} from '@babel/parser'
import traverse from '@babel/traverse'
import * as t from '@babel/types'

/**
 * 别名
 * @ -> /public
 */
const code = 'import a from "@/components/lodash"'

const ast = parse(code, {
  sourceType: 'module',
})

traverse(ast, {
  ImportDeclaration(path) {
    if (path.node.source.value.startsWith('@')) {
      const arr = path.node.source.value.split('@')
      console.log(arr)
      path.node.source = t.stringLiteral('/public' + arr[1])
    }
  },
})

const {code: op_code} = generate(ast, {
  sourceMaps: true,
})
// import a from "/public/components/lodash";
console.log(op_code)
