/**
 * 参考链接: https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md
 */
const babylon = require('babylon');

const traverse = require('babel-traverse').default;
const t = require('babel-types');

const generate = require('babel-generator').default;

const code = `function square(n) {
    return n * n;
}`;

// 1 parse解析 --- babylon 是Babel的解析器
const ast = babylon.parse(code, {
    sourceType: 'module',
    plugins: ['jsx']
});

// 2 transform转换
// ---- babel-traverse（遍历）模块维护了整棵树的状态，并且负责替换、移除和添加节点
// ---- babel-types 包含了构造、验证以及变换 AST 节点的方法，对编写处理AST逻辑非常有用
traverse(ast, {
    enter(path) {
        if (t.isIdentifier(path.node, { name: 'n' })) {
            path.node.name = 'x';
        }
    }
})

// 3 generate输出
// ---- babel-generator 是Babel的代码生成器, 它可以将AST转换为代码或源码映射(sourcemaps)
// ---- babel.transformFromAst 根据AST生成代码
const result1 = generate(ast, {
    sourceMaps: true,
}, code)

// const result2 = babel.transformFromAst(ast, null, {})
console.log(result1);