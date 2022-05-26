import {parse} from '@babel/parser'
import t from '@babel/types'

const code = '2 + (4 * 10)'

const ast = parse(code, {
  sourceType: 'module',
})

console.log(ast.program.body)
