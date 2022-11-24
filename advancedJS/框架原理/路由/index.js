const router = document.getElementById('router')
const router_view = document.getElementById('route-view')
const routes = [
  {
    path: '/page1',
    component: 'page1',
  },
  {
    path: '/page2',
    component: 'page2',
  },
]
router.addEventListener('click', (e) => {
  const path = e.target.attributes.path.value
  window.location.hash = path
})

window.addEventListener(
  'hashchange',
  () => {
    console.log(window.location.hash)
    const content = routes.find(
      (route) => `#${route.path}` === window.location.hash
    ).component

    router_view.innerText = content
  },
  false
)
