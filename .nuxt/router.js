import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c40eab4a = () => interopDefault(import('..\\pages\\article.vue' /* webpackChunkName: "pages/article" */))
const _7e7d9800 = () => interopDefault(import('..\\pages\\person.vue' /* webpackChunkName: "pages/person" */))
const _65eaaeb5 = () => interopDefault(import('..\\pages\\setting.vue' /* webpackChunkName: "pages/setting" */))
const _3e446f28 = () => interopDefault(import('..\\pages\\sign.vue' /* webpackChunkName: "pages/sign" */))
const _170f55d4 = () => interopDefault(import('..\\pages\\slug.vue' /* webpackChunkName: "pages/slug" */))
const _1ce6c777 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/article",
    component: _c40eab4a,
    name: "article"
  }, {
    path: "/person",
    component: _7e7d9800,
    name: "person"
  }, {
    path: "/setting",
    component: _65eaaeb5,
    name: "setting"
  }, {
    path: "/sign",
    component: _3e446f28,
    name: "sign"
  }, {
    path: "/slug",
    component: _170f55d4,
    name: "slug"
  }, {
    path: "/",
    component: _1ce6c777,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
