// 虚拟dom生成类
class MyElement {
  constructor(tagName, attrs, children) {
    this.tagName = tagName
    this.attrs = attrs
    this.children = children
  }

  render() {
    let e = document.createElement(this.tagName)
    for(const key in this.attrs) {
      console.log(key, this.attrs[key]);
      setAttribute(e, key, this.attrs[key])
    }

    this.children.forEach(children => {
      console.log(children instanceof MyElement);
      let childElement =
        children instanceof MyElement
          ? children.render() //! 若children也是虚拟节点，则递归进行
          : document.createTextNode(children) //! 若children是字符串，则直接创建文本节点

      e.appendChild(childElement)

    })
    return e
  }
}



const setAttribute = (node, name, value) => {
  switch (name) {
    case 'style':
      node.style.cssText = value
      break
    case 'value':
      const tagName = node.tagName.toLowerCase()
      if (tagName === 'input' || tagName === 'textarea') {
        node.value = value
      } else {
        node.setAttribute(name, value)
      }
      break
    default:
      node.setAttribute(name, value)
      break
  }
}

module.exports = MyElement



