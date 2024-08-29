import comp from "D:/vue-press/QFurina/docs/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"QFurina 简介\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"主要特性\",\"slug\":\"主要特性\",\"link\":\"#主要特性\",\"children\":[]},{\"level\":2,\"title\":\"为什么选择 QFurina？\",\"slug\":\"为什么选择-qfurina\",\"link\":\"#为什么选择-qfurina\",\"children\":[]}],\"git\":{\"updatedTime\":1724918760000},\"filePathRelative\":\"guide/readme.md\"}")
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
