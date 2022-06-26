export function F() {}
F.prototype.f1 = function () {
  console.log('f1')
}
// entry.js 中虽然没有使用到 f2, 但不会被tree-shaking
F.prototype.f2 = function () {
  console.log('f2')
}