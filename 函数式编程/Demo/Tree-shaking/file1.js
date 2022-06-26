export function f1() {
  console.log('f1')
}

// entry.js中没有使用到 f2, webpack打包后会被tree-shaking
export function f2() {
  console.log('f2')
}
