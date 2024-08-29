import comp from "D:/vue-press/QFurina/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/logo.png\",\"heroText\":\"QFurina\",\"tagline\":\"简单而强大的QQ机器人后端框架\",\"actions\":[{\"text\":\"快速上手 →\",\"link\":\"/guide/\",\"type\":\"primary\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/syuchua/QFurina\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"功能丰富\",\"details\":\"支持AI对话、图像生成、语音处理和网络连接等多种功能。\"},{\"title\":\"插件系统\",\"details\":\"灵活的插件架构，轻松扩展和自定义功能。\"},{\"title\":\"易于使用\",\"details\":\"简洁的API设计和详细的文档，让开发变得简单高效。\"}],\"footer\":\"MIT Licensed | Copyright © 2023-present YourName\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
