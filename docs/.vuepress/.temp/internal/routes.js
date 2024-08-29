export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"QFurina - QQ机器人项目"} }],
  ["/api/client.html", { loader: () => import(/* webpackChunkName: "api_client.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/api/client.html.js"), meta: {"title":""} }],
  ["/api/message.html", { loader: () => import(/* webpackChunkName: "api_message.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/api/message.html.js"), meta: {"title":""} }],
  ["/api/plugin.html", { loader: () => import(/* webpackChunkName: "api_plugin.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/api/plugin.html.js"), meta: {"title":""} }],
  ["/api/", { loader: () => import(/* webpackChunkName: "api_index.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/api/index.html.js"), meta: {"title":""} }],
  ["/features/ai-chat.html", { loader: () => import(/* webpackChunkName: "features_ai-chat.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/features/ai-chat.html.js"), meta: {"title":"AI 对话系统"} }],
  ["/features/drawing.html", { loader: () => import(/* webpackChunkName: "features_drawing.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/features/drawing.html.js"), meta: {"title":"图像生成功能"} }],
  ["/features/networking.html", { loader: () => import(/* webpackChunkName: "features_networking.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/features/networking.html.js"), meta: {"title":"网络连接与交互"} }],
  ["/features/voice.html", { loader: () => import(/* webpackChunkName: "features_voice.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/features/voice.html.js"), meta: {"title":"语音处理能力"} }],
  ["/guide/installation.html", { loader: () => import(/* webpackChunkName: "guide_installation.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/guide/installation.html.js"), meta: {"title":"安装与配置"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"QFurina 简介"} }],
  ["/guide/usage.html", { loader: () => import(/* webpackChunkName: "guide_usage.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/guide/usage.html.js"), meta: {"title":""} }],
  ["/plugins/api.html", { loader: () => import(/* webpackChunkName: "plugins_api.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/plugins/api.html.js"), meta: {"title":""} }],
  ["/plugins/development.html", { loader: () => import(/* webpackChunkName: "plugins_development.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/plugins/development.html.js"), meta: {"title":"创建你的第一个 QFurina 插件"} }],
  ["/plugins/", { loader: () => import(/* webpackChunkName: "plugins_index.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/plugins/index.html.js"), meta: {"title":"QFurina 插件系统"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/guide/platforms/llonebot.html", { loader: () => import(/* webpackChunkName: "guide_platforms_llonebot.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/guide/platforms/llonebot.html.js"), meta: {"title":"Llonebot 对接指南"} }],
  ["/guide/platforms/napcat.html", { loader: () => import(/* webpackChunkName: "guide_platforms_napcat.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/guide/platforms/napcat.html.js"), meta: {"title":"NapCat 对接指南"} }],
  ["/guide/platforms/lagrange.html", { loader: () => import(/* webpackChunkName: "guide_platforms_lagrange.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/guide/platforms/lagrange.html.js"), meta: {"title":"Lagrange 对接指南"} }],
  ["/guide/faq.html", { loader: () => import(/* webpackChunkName: "guide_faq.html" */"D:/vue-press/QFurina/docs/.vuepress/.temp/pages/guide/faq.html.js"), meta: {"title":""} }],
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
