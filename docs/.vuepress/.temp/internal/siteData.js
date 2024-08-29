export const siteData = JSON.parse("{\"base\":\"/QFurina-Docs/\",\"lang\":\"zh-CN\",\"title\":\"QFurina\",\"description\":\"一个简单的QQ机器人后端框架，支持AI对话、绘图、语音、联网等功能以及支持自定义的插件系统\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/logo.png\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
