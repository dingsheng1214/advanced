/**
 * @param  {MyElement} oldTree
 * @param  {MyElement} newTree
 */
const diff = (oldTree, newTree) => {
  const patches = {}
  // 递归树，将比较后的结果存储到patches中
  walkToDiff(oldTree, newTree, 0, patches)
  // 返回diff结果
  return patches
}

/**
 * @param  {MyElement} oldTree
 * @param  {MyElement} newTree
 * @param  {number} index
 * @param  {Object} patches
 */
let initialIndex = 0
const walkToDiff = (oldTree, newTree, index, patches) => {
  let diffResult = []

  // 如果newTree为空，则说明该节点已经被移除
  if(!newTree) {
    diffResult.push({
      type: 'REMOVE',
      index
    })
  }

  // 如果新旧节点都为文本节点
  else if (typeof oldTree === 'string' && typeof newTree === 'string') {
    if(oldTree !== newTree) {
      diffResult.push({
        type: 'MODIFY_TEXT',
        content: newTree,
        index
      })
    }
  }

  // 如果新旧节点类型相同
  else if(oldTree.tagName === newTree.tagName) { 
    let diffAttributeResult = {}
    for (const key in oldTree){
      if(oldTree[key] !== newTree[key]) {
        diffAttributeResult[key] = newTree[key]
      }
    } 

    for (const key in newTree){
      // 旧节点不存在的新属性
      if(!oldTree[key]) {
        diffAttributeResult[key] = newTree[key]
      }
    }

    if(Object.keys(diffAttributeResult).length) {
      diffResult.push({
        type: 'MODIFY_ATTRIBUTE',
        diffAttributeResult,
      })
    }

    oldTree.children.forEach((child, i) => {
      walkToDiff(child, newTree.children[i], ++initialIndex, patches)
    })
  }

  // 如果新旧节点不同，已经被直接替换，则直接将新的节点放入diffResult数组中
  else {
    diffResult.push({
      type: 'REPLACE',
      newTree
    })
  }

  if(!oldTree) {
    diffResult.push({
      type: 'REPLACE',
      newTree
    })
  }

  if(diffResult.length) {
    patches[index] = diffResult
  }
}

module.exports = diff