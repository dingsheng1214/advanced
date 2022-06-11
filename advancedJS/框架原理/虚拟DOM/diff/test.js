const MyElement = require('../virtualDOM/demo1.js')
const diff = require('./diff.js')

const oldTree = new MyElement('ul', { id: 'chapter-list' }, [
  new MyElement('li', { class: 'chapter' }, ['chapter1']),
  new MyElement('li', { class: 'chapter' }, ['chapter2']),
  new MyElement('li', { class: 'chapter' }, ['chapter3']),
])

const newTree = new MyElement('ul', { id: 'chapter-list-2' }, [
  new MyElement('li', { class: 'chapter2' }, ['chapter4']),
  new MyElement('li', { class: 'chapter2' }, ['chapter5']),
  new MyElement('li', { class: 'chapter2' }, ['chapter6']),
])

const diffResult = diff(oldTree, newTree)
console.log(JSON.stringify(diffResult, null, 2));