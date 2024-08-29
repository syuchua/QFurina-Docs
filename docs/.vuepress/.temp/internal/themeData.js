export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"repo\":\"syuchua/QFurina\",\"docsRepo\":\"syuchua/QFurina-Docs\",\"docsBranch\":\"main\",\"docsDir\":\"docs\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"快速开始\",\"link\":\"/guide/\"},{\"text\":\"功能\",\"children\":[{\"text\":\"AI对话\",\"link\":\"/features/ai-chat\"},{\"text\":\"绘图\",\"link\":\"/features/drawing\"},{\"text\":\"语音\",\"link\":\"/features/voice\"},{\"text\":\"联网\",\"link\":\"/features/networking\"}]},{\"text\":\"插件系统\",\"link\":\"/plugins/\"},{\"text\":\"API参考\",\"link\":\"/api/\"}],\"sidebar\":{\"/guide/\":[{\"text\":\"指南\",\"children\":[{\"text\":\"QFurina 简介\",\"link\":\"/guide/\"},{\"text\":\"安装与配置\",\"link\":\"/guide/installation\"},{\"text\":\"基本使用\",\"link\":\"/guide/usage\"},{\"text\":\"平台对接\",\"children\":[{\"text\":\"Llonebot\",\"link\":\"/guide/platforms/llonebot\"},{\"text\":\"NapCat\",\"link\":\"/guide/platforms/napcat\"},{\"text\":\"Lagrange\",\"link\":\"/guide/platforms/lagrange\"}]}]}],\"/features/\":[{\"text\":\"功能详解\",\"children\":[{\"text\":\"AI对话系统\",\"link\":\"/features/ai-chat\"},{\"text\":\"图像生成功能\",\"link\":\"/features/drawing\"},{\"text\":\"语音处理能力\",\"link\":\"/features/voice\"},{\"text\":\"网络连接与交互\",\"link\":\"/features/networking\"}]}],\"/plugins/\":[{\"text\":\"插件开发\",\"children\":[{\"text\":\"插件系统概述\",\"link\":\"/plugins/\"},{\"text\":\"创建你的第一个插件\",\"link\":\"/plugins/development\"},{\"text\":\"插件API参考\",\"link\":\"/plugins/api\"}]}],\"/api/\":[{\"text\":\"API文档\",\"children\":[{\"text\":\"QFurina 核心API\",\"link\":\"/api/\"},{\"text\":\"QFurinaClient 客户端\",\"link\":\"/api/client\"},{\"text\":\"QFurinaMessage 消息处理\",\"link\":\"/api/message\"},{\"text\":\"QFurinaPlugin 插件接口\",\"link\":\"/api/plugin\"}]}]},\"editLink\":true,\"editLinkText\":\"在 GitHub 上编辑此页\",\"lastUpdated\":true,\"lastUpdatedText\":\"上次更新\",\"contributors\":false,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
