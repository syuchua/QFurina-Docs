# Lagrange 对接指南

Lagrange 是一个跨平台的 QQ 客户端，本指南将帮助您将 QFurina 与 Lagrange 进行对接。

## 准备工作

1. 确保您已经安装了 QFurina。
2. 下载并安装 Lagrange。
   官方文档：

   https://lagrangedev.github.io/Lagrange.Doc/
   
3. 在 Lagrange 中启用 OneBot 协议支持。

## 配置步骤

1. 在 Lagrange 中配置 OneBot 协议：
   - 打开 Lagrange 设置
   - 找到 OneBot 协议设置
   - 启用 OneBot 协议
   - 设置监听地址和端口(修改配置文件)
   ```JSON
    {
      "Type": "ReverseWebSocket",
      "Host": "0.0.0.0",
      "Port": 8011,
      "Suffix": "/ws",
      "ReconnectInterval": 5000,
      "HeartBeatInterval": 5000,
      "HeartBeatEnable": true,
      "AccessToken": "",
    },
   ```

2. 编辑 QFurina 的配置文件 `config/config.json`：

   ```json
   {
     "connection_type": "ws_reverse"
   }
   ```


3. 启动 Lagrange 和 QFurina 服务。

## 验证连接

1. 启动 QFurina：

   ```bash
   python main.py
   ```

2. 检查 QFurina 的日志输出，确保没有连接错误。
   如果连接无误的话，你可以看到：

   ![](https://img.yuchu.me/file/f8f9c5d0cbe210269acb6.png)

3. 在 Lagrange 中向机器人发送消息，测试是否能正常回复。

## 常见问题

1. **连接失败**：
   - 确保 Lagrange 中的 OneBot 协议已正确启用。
   - 检查防火墙设置，确保允许相应端口的通信。

2. **消息发送失败**：
   - 验证 QFurina 是否有正确的发送权限。
   - 检查 Lagrange 的日志，查看是否有错误信息。

3. **功能限制**：
   - 注意 Lagrange 可能不支持某些高级功能，如群管理操作。

如果您在对接过程中遇到任何问题，请查看我们的 [常见问题解答](/guide/faq.html) 或在 [GitHub Issues](https://github.com/syuchua/QFurina/issues) 上提问。