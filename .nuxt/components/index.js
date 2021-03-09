export { default as Header } from '../..\\components\\Header.vue'
export { default as Tag } from '../..\\components\\Tag.vue'

export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyTag = import('../..\\components\\Tag.vue' /* webpackChunkName: "components/tag" */).then(c => c.default || c)
