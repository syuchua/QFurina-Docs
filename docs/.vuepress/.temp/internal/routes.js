export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/api/client.html", { loader: () => import(/* webpackChunkName: "api_client.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/api/client.html.js"), meta: {"title":""} }],
  ["/api/message.html", { loader: () => import(/* webpackChunkName: "api_message.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/api/message.html.js"), meta: {"title":""} }],
  ["/api/plugin.html", { loader: () => import(/* webpackChunkName: "api_plugin.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/api/plugin.html.js"), meta: {"title":""} }],
  ["/api/", { loader: () => import(/* webpackChunkName: "api_index.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/api/index.html.js"), meta: {"title":""} }],
  ["/features/ai-chat.html", { loader: () => import(/* webpackChunkName: "features_ai-chat.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/features/ai-chat.html.js"), meta: {"title":""} }],
  ["/features/drawing.html", { loader: () => import(/* webpackChunkName: "features_drawing.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/features/drawing.html.js"), meta: {"title":""} }],
  ["/features/networking.html", { loader: () => import(/* webpackChunkName: "features_networking.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/features/networking.html.js"), meta: {"title":""} }],
  ["/features/voice.html", { loader: () => import(/* webpackChunkName: "features_voice.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/features/voice.html.js"), meta: {"title":""} }],
  ["/plugins/api.html", { loader: () => import(/* webpackChunkName: "plugins_api.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/plugins/api.html.js"), meta: {"title":""} }],
  ["/plugins/development.html", { loader: () => import(/* webpackChunkName: "plugins_development.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/plugins/development.html.js"), meta: {"title":""} }],
  ["/plugins/", { loader: () => import(/* webpackChunkName: "plugins_index.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/plugins/index.html.js"), meta: {"title":""} }],
  ["/guide/installation.html", { loader: () => import(/* webpackChunkName: "guide_installation.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/guide/installation.html.js"), meta: {"title":""} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":""} }],
  ["/guide/usage.html", { loader: () => import(/* webpackChunkName: "guide_usage.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/guide/usage.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
