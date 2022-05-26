// 1 create a function
//   babel: 获取babel的API
//   options: myPlugin的自定义配置
export default function myPlugin(babel, options) {
    const {
        types: t,
        template
    } = babel;

    return {
        // 2 choose a plugin name
        //   需要遵守 babel-plugin-<plugin-name> 的命名规则
        name: 'my-plugin',
        // 3 define traverse visitor
        //   遍历访问AST node
        visitor: {
            CallExpression(path, state) {
                /** do something */
            }
        },
        // 4 modify Babel's options
        //   修改Babel的配置
        manipulateOptions(babelOptions) {},
        // 5 extend another plugin
        //   通过继承其他插件，从而拓展更多的功能
        inherits: require('another plugin')
    }
}