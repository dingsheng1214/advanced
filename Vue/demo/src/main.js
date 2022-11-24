import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vModel from './components/AdvancedFeatures/vModel'
import NextTick from './components/AdvancedFeatures/nextTick'
import Slot from './components/AdvancedFeatures/slot'
import Async from './components/AdvancedFeatures/async'
import VResize from './components/directive/vResize'
import LifeCycle from './components/lifecycle/LifeCycle'
import Communication from './components/communication'

const routes = [
  {path: '/lifecycle', component: LifeCycle},
  {path: '/customDirective', component: VResize},
  {path: '/communication', component: Communication},
  {path: '/ad-vmodel', component: vModel},
  {path: '/ad-nextTick', component: NextTick},
  {path: '/ad-slot', component: Slot},
  {path: '/ad-async', component: Async},
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
})
Vue.use(VueRouter)
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
