const babylon = require('babylon');
const t = require('babel-types');

const code = 'n ** 2'
const ast = babylon.parse(code, {
    sourceType: 'module',
})

const node = ast.program.body[0].expression
console.log(node)
//1 node 是否为一个 expression
console.log(t.isExpression(node)); // true

//2 node 是否为一个 expression 且 操作符为 ** 
console.log(t.isExpression(node, {operator: '**'})); 

console.log(t.isExpression(node, {operator: '**', left: node.left}));