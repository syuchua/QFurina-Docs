# NapCat 对接指南

NapCat 是一个轻量级的 QQ 机器人框架，本指南将帮助您将 QFurina 与 NapCat 进行对接。

## 准备工作

1. 确保您已经安装了 QFurina。
2. 下载并安装 NapCat。

## 配置步骤

1. 编辑 QFurina 的配置文件 `config/config.json`：

   ```json
   {
     "connection_type": "http",
     "http_url": "http://127.0.0.1:5700",
     "ws_reverse_url": "",
     "use_http": true
   }
   ```

   如果 NapCat 运行在不同的 IP 或端口，请相应地修改 `http_url`。

2. 配置 NapCat：
   
   编辑 NapCat 的配置文件，确保 HTTP 服务器已启用，并设置正确的端口（默认为 5700）。

3. 启动 NapCat 和 QFurina 服务。

## 验证连接

1. 启动 QFurina：

   ```bash
   python main.py
   ```

2. 检查 QFurina 的日志输出，确保没有连接错误。

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