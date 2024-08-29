import comp from "D:/vue-press/QFurina/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"QFurina - QQ机器人项目\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/logo.png\",\"heroText\":\"QFurina\",\"tagline\":\"简单而强大的QQ机器人后端框架\",\"actions\":[{\"text\":\"快速上手 →\",\"link\":\"/guide/\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/guide/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"功能丰富\",\"details\":\"支持AI对话、图像生成、语音处理和网络连接等多种功能。\"},{\"title\":\"插件系统\",\"details\":\"灵活的插件架构，轻松扩展和自定义功能。\"},{\"title\":\"易于使用\",\"details\":\"简洁的API设计和详细的文档，让开发变得简单高效。\"}],\"footer\":\"MIT Licensed | Copyright © 2023-present YourName\"},\"headers\":[{\"level\":2,\"title\":\"主要功能\",\"slug\":\"主要功能\",\"link\":\"#主要功能\",\"children\":[]},{\"level\":2,\"title\":\"支持的消息平台\",\"slug\":\"支持的消息平台\",\"link\":\"#支持的消息平台\",\"children\":[]},{\"level\":2,\"title\":\"快速开始\",\"slug\":\"快速开始\",\"link\":\"#快速开始\",\"children\":[]},{\"level\":2,\"title\":\"贡献\",\"slug\":\"贡献\",\"link\":\"#贡献\",\"children\":[]},{\"level\":2,\"title\":\"许可\",\"slug\":\"许可\",\"link\":\"#许可\",\"children\":[]}],\"git\":{\"updatedTime\":1724918760000},\"filePathRelative\":\"README.md\"}")
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
