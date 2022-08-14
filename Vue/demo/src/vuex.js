import { reactivity } from "./reactive2.js";

export default class Store {

  constructor(options) {
    const { state, mutations, plugins } = options;
    this.state = reactivity(state);
    this.mutations = mutations;

    this._subscribers = []
    plugins.forEach(plugin => plugin(this))
  }

  commit(type, payload) {
    const entry = this.mutations[type]
    if(!entry) {
      return
    }
    entry(this.state, payload)
    this._subscribers.forEach(sub => sub({type, payload}, this.state))
  }

  subscribe(fn) {
    if(!this._subscribers.includes(fn)) {
      this._subscribers.push(fn)
    }
  }
}