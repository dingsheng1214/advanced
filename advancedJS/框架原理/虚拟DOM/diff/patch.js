const patch = (node, patches) => {
  let walker = {index: 0}
  walk(node, walker, patches)
}


const walk = (node, walker, patches) => {
  let currentPatch = patches[walker.index]
  let childNodes = node.childNodes

  childNodes.forEach((child, index) => {
    walker.index++
    walk(child, walker, patches)
  })

  if(currentPatch) {
    doPatch(node, currentPatch)
  }
}

// todo: 理解doPatch
const doPatch = (node, patches) => {
  patches.forEach(patch => {
    switch (patch.type) {
      case 'MODIFY_ATTRIBUTE':
        const attributes = patch.diffAttributeResult.attributes
        for (const key in attributes) {
          if(node.nodeType !== 1) return 
          const value = attributes[key]
          if(value) {
            node.setAttribute(key, value)
          } else {
            node.removeAttribute(key)
          }
        }
        break
      case 'MODIFY_TEXT':
        node.textContent = patch.data
        break
      case 'REPLACE':
        let newNode = (patch.newNode instanceof MyElement)
         ? patch.newNode.render() 
         : document.createTextNode(patch.newNode)
         node.parentNode.replaceChild(newNode, node)
        break
      case 'REMOVE':
        node.parentNode.removeChild(node)
        break
      default:
        break
    }
  })
}