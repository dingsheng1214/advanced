/**
 * 命令模式：通过命令解耦调用方和方法本身
 */
const command = (function() {
  const action = {
    drawCircle() {},
    drawRect() {}
  }
  return function execute(command) {
    action[command]()
  }
})

command('drawCircle')