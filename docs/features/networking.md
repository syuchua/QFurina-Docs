# 网络连接与交互

QFurina 的网络连接与交互功能由`openinterpreter`和`duckduckgo`的免费api实现，允许机器人进行各种网络操作，如天气查询、联网搜索等。这些功能大大增强了机器人的实用性和信息获取能力。

## 主要特性

1. **联网搜索**：进行网络搜索并返回结果。
2. **网页内容抓取**：获取和解析网页内容。
3. **API 集成**：与各种第三方 API 进行交互。

## 使用方法

   直接对话，并告诉机器人把`#search`标签放在要搜索的东西钱包
   例如；`芙芙搜一下原神里的芙宁娜`

   或者直接发送链接，例如：
   `芙芙读一下这个链接：https://github.com/syuchua/QFurina`

   当然，你也可以主动使用`#search`标签发起搜索

## 注意事项

- 网络请求可能会受到延迟或失败的影响，请做好错误处理。
- 某些 API 可能需要付费使用，请注意控制使用量。
- 在抓取网页内容时，请遵守网站的 robots.txt 规则和使用条款。

## 高级用法

   集成[高德开放平台](https://lbs.amap.com/)的天气查询api，先获取api_key，然后下载插件
   ```bash
   /plugin https://github.com/syuchua/WeatherPlugin
   ```
   在config.json里配置api_key

   使用`/天气 + 城市名`获取对应城市今日天气
   使用`/天气预报 + 城市名`获取对应城市未来三天天气预报

如果您在使用网络连接与交互功能时遇到任何问题，或有新功能建议，请在我们的 [GitHub Issues](https://github.com/syuchua/QFurina/issues) 上提出。