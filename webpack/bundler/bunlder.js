const path = require('path')
const fs = require('fs')
const babylon = require('babylon')
const traverse = require('babel-traverse').default
const generate = require('babel-core')

let ID = 0

function createAsset(filename) {
    const sourceCode = fs.readFileSync(filename, 'utf-8')

    const ast = babylon.parse(sourceCode, {
        sourceType: 'module'
    })

    const dependencies = []
    traverse(ast, {
        ImportDeclaration(path) {
            dependencies.push(path.node.source.value)
        }
    })
    const {
        code
    } = generate.transformFromAst(ast, null, {
        presets: ['env']
    })
    return {
        id: ID++,
        code,
        dependencies,
        name: filename
    }
}

function createGraph(entry) {
    const entryAsset = createAsset(entry)
    const queue = [entryAsset]

    for (const asset of queue) {
        const dirname = path.dirname(asset.name)
        asset.mapping = {}
        asset.dependencies.forEach(dependency => {
            const child = createAsset(path.join(dirname, dependency))
            asset.mapping[dependency] = child.id
            queue.push(child)
        })
    }
    return queue
}

function bundle(graph) {
    let modules = ''
    graph.forEach(mod => {
        modules += `${mod.id}: {
            fn(require, module, exports) {
                ${mod.code}
            },
            mapping: ${JSON.stringify(mod.mapping)}
        },`
    })

    const result = `
        (function(modules) {
            function require(id) {
                const {fn, mapping}= modules[id]
                function localRequire(name) {
                    return require(mapping[name])
                }
                const module = { exports: {} }
                fn(localRequire, module, module.exports)
                return module.exports
            }
            require(0)
        })({${modules}})
    `
    return result
}

const graph = createGraph('./example/entry.js')
const result = bundle(graph)
console.log(result);