/**
 * 
getVersion('3.4.5')

function getVersion(versionString) {
  const versionRegx = /(\d+)\.(\d+)\.(\d+)/
  const [, major, minor, patch] = versionRegx.exec(versionString)
  return { major, minor, patch }
}
↓
↓
↓

const _versionRegx = /(\d+)\.(\d+)\.(\d+)/;
getVersion('3.4.5');

function getVersion(versionString) {
  const [, major, minor, patch] = _versionRegx.exec(versionString);
  return { major, minor, patch }
}
 */

export default function (babel) {
  const {types: t} = babel

  return {
    name: 'ast-transform', // not required
    visitor: {
      RegExpLiteral(path) {
        const {node, parent} = path

        // versionRegx
        const parentName = parent.id.name
        // _versionRegx
        const id = path.scope.generateUidIdentifier(`_${parentName}`)
        // const _versionRegx = /(\d+)\.(\d+)\.(\d+)/
        const variableDeclaration = t.variableDeclaration('const', [
          t.variableDeclarator(id, node),
        ])
        // 新正则放到顶部
        const topNode = path.findParent((p) => p.isProgram()).node
        topNode.body.unshift(variableDeclaration)

        // 重命名引用
        console.log(parentName, id)
        path.scope.rename(parentName, id.name)

        // 删除内部正则
        path.parentPath.remove()
      },
    },
  }
}
