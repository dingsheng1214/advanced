import {parse} from '@babel/parser'
import traverse from '@babel/traverse'

const code = '2 + (4 * 10)'

const ast = parse(code, {
  sourceType: 'module',
})

// 深度优先遍历
traverse(ast, {
  // NumericLiteral(path) {
  //     console.log(path.node.value);
  // }
  NumericLiteral: {
    enter(path) {
      console.log(path.node.value)
    },
    exit(path) {
      console.log(path.node.value)
    },
  },
})
