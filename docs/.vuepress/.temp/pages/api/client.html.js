import comp from "D:/vue-press/QFurina/docs/.vuepress/.temp/pages/api/client.html.vue"
const data = JSON.parse("{\"path\":\"/api/client.html\",\"title\":\"插件生命周期函数\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1724944051000},\"filePathRelative\":\"api/client.md\"}")
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
