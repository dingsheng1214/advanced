// 为了减少if-else结构，将判断变成内部的一个状态，通过对象内部的状态变化, 触发不同的行为
function State(state) {
  const _stateObj = {
    _state: '',
    state: {
      state1() {
        console.log('state1')
      },
      state2() {
        console.log('state2')
      },
    },
    run() {
      return this.state[this._state]()
    },
  }
  _stateObj._state = state
  return _stateObj
}

State('state1').run()
