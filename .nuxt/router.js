import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2e1aed52 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _4e1bd599 = () => interopDefault(import('..\\pages\\personal\\index.vue' /* webpackChunkName: "pages_personal_index" */))
const _14818c23 = () => interopDefault(import('..\\pages\\signature\\index.vue' /* webpackChunkName: "pages_signature_index" */))
const _71407400 = () => interopDefault(import('..\\pages\\validation\\index.vue' /* webpackChunkName: "pages_validation_index" */))
const _602ffb72 = () => interopDefault(import('..\\pages\\viewer\\index.vue' /* webpackChunkName: "pages_viewer_index" */))
const _7c0f0e19 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _2e1aed52,
    name: "login"
  }, {
    path: "/personal",
    component: _4e1bd599,
    name: "personal"
  }, {
    path: "/signature",
    component: _14818c23,
    name: "signature"
  }, {
    path: "/validation",
    component: _71407400,
    name: "validation"
  }, {
    path: "/viewer",
    component: _602ffb72,
    name: "viewer"
  }, {
    path: "/",
    component: _7c0f0e19,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
