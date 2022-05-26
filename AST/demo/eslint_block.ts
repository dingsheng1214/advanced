let something = 10
// invalid
if (something > 3) console.log('>')

// invalid
if (something <= 3) {
  console.log('>')
} else console.log('<')

// valid
if (something < 3) {
  console.log('>')
} else {
  console.log('<')
}
// valid
if (something < 3) {
  console.log('>')
}

export default function (context) {
  return {
    IfStatement(node) {
      if (isBlock(node.consequent) && isBlock(node.alternate)) {
        return
      }

      if (!isBlock(node.consequent)) {
        report(context, node.consequent)
      }

      if (!isBlock(node.alternate)) {
        report(context, node.alternate)
      }
    },
  }
}

function isBlock(node) {
  return !node || node.type === 'BlockStatement'
}

function report(context, node) {
  context.report({
    node: node,
    message: 'if statement must have {}',

    fix(fixer) {},
  })
}
