const t = require('babel-types');
const generate = require('babel-generator').default;

const ast = t.assignmentExpression('+=', t.identifier('x'), t.numericLiteral(2));
/**
 * ast:
 *  
    {
        type: 'AssignmentExpression',
        operator: '+=',
        left: { type: 'Identifier', name: 'x' },
        right: { type: 'NumericLiteral', value: 2 }
    }
 * 
   code: x += 2
 */
const result = generate(ast)
console.log(result.code); // x+= 2