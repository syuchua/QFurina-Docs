import comp from "D:/vue-press/QFurina/docs/.vuepress/.temp/pages/plugins/api.html.vue"
const data = JSON.parse("{\"path\":\"/plugins/api.html\",\"title\":\"插件基类\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1724918760000},\"filePathRelative\":\"plugins/api.md\"}")
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
