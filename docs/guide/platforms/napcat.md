# NapCat 对接指南

NapCat 是一个轻量级的 QQ 机器人框架，本指南将帮助您将 QFurina 与 NapCat 进行对接。

## 准备工作

1. 确保您已经安装了 QFurina。
   官方文档：
   https://napneko.github.io/zh-CN/

2. 下载并安装 NapCat。

## 配置步骤

1. 编辑 QFurina 的配置文件 `config/config.json`：

   ```json
   {
     "connection_type": "ws_reverse"
   }
   ```

2. 配置 NapCat：
   
   编辑 NapCat 的配置文件：
   ```json
   {
      "http": {
         // 是否启用http服务, true为启动，false为禁用
         "enable": false,
         // HTTP服务监听的 ip 地址，为空则监听所有地址
         "host": "",
         // http服务端口
         "port": 3000,
         // http上报密钥，可为空
         "secret": "",
         // 是否启用http心跳
         "enableHeart": false,
         // 是否启用http上报服务
         "enablePost": false,
         // http上报地址, 如["http://127.0.0.1:8080/onebot/v11/http"]
         "postUrls": []
      },
      "ws": {
         // 是否启用正向websocket服务
         "enable": false,
         // 正向websocket服务监听的 ip 地址，为空则监听所有地址
         "host": "",
         // 正向websocket服务端口
         // 当port与http服务port一致时，host也需与http服务host保持一致，否则可能会导致启动失败
         "port": 3001
      },
      "reverseWs": {
         // 是否启用反向websocket服务
         "enable": true,
         // 反向websocket对接的地址, 如["ws://127.0.0.1:8080/onebot/v11/ws"]
         "urls": ["ws://127.0.0.1:8011/ws"]
      },
      "GroupLocalTime": {
         "Record": false,//是否开启本地群聊时间记录
         "RecordList": []//开启全部群 ["-1"]  单个群配置 ["11111"] 多个群 ["1","2","3"]
      },
      // 是否开启调试模式，开启后上报消息会携带一个raw字段，为原始消息内容
      "debug": false,
      // ws心跳间隔，单位毫秒
      "heartInterval": 30000,
      // 消息上报格式，array为消息组，string为cq码字符串
      "messagePostFormat": "array",
      // 是否将本地文件转换为URL，如果获取不到url则使用base64字段返回文件内容
      "enableLocalFile2Url": true,
      // 音乐签名URL，用于处理音乐相关请求
      "musicSignUrl": "",
      // 是否上报自己发送的消息
      "reportSelfMessage": false,
      // access_token，可以为空
      "token": ""
   }
   ```


3. 启动 NapCat 和 QFurina 服务。

## 验证连接

1. 启动 QFurina：

   ```bash
    python main.py
   ```

2. 检查 QFurina 的日志输出，确保没有连接错误。
   如果连接无误的话，你可以看到：

   ![](https://img.yuchu.me/file/f8f9c5d0cbe210269acb6.png)

3. 在 QQ 中向机器人发送消息，测试是否能正常回复。

## 常见问题

1. **HTTP 请求失败**：
   - 确保 NapCat 的 HTTP 服务器正在运行。
   - 检查防火墙设置，确保允许相应端口的通信。

2. **消息接收延迟**：
   - 考虑使用 WebSocket 连接代替 HTTP 轮询，可以提高实时性。

3. **权限问题**：
   - 确保 NapCat 有足够的权限执行 QFurina 的请求。

如果您在对接过程中遇到任何问题，请查看我们的 [常见问题解答](/guide/faq.html) 或在 [GitHub Issues](https://github.com/syuchua/QFurina/issues) 上提问。