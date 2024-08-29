# Llonebot 对接指南

Llonebot 是一个流行的 QQ 机器人框架，本指南将帮助您将 QFurina 与 Llonebot 进行对接。

## 准备工作

1. 确保您已经安装了 QFurina 和 Llonebot。
   这里贴上llonebot官方教程地址：
   https://llonebot.github.io/zh-CN/

2. 获取 Llonebot 的连接信息（通常是 WebSocket 地址和端口）。

## 配置步骤

1. 编辑 QFurina 的配置文件 `config/config.json`：

   ```json
   {
     "connection_type": "ws_reverse"
   }
   ```

2. 在 Llonebot 的配置文件中，确保启用了反向 WebSocket 连接：

   ```yaml
   servers:
     - ws_reverse:
         universal: ws://127.0.0.1:8011/ws
   ```

   或者用图形化界面配置

   ![](https://cdn.jsdelivr.net/gh/mazhijia/jsdeliver@main/img/20240720181142.png)


3. 重启 Llonebot 和 QFurina 服务。

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

1. **连接失败**：
   - 检查 IP 地址和端口是否正确。
   - 确保防火墙没有阻止连接。

2. **无法接收消息**：
   - 验证 Llonebot 的事件推送是否正确配置。
   - 检查 QFurina 的日志是否显示接收到事件。

3. **无法发送消息**：
   - 确保 QFurina 有正确的发送权限。
   - 检查 Llonebot 的 API 调用是否成功。

如果您遇到其他问题，请查看 [常见问题解答](/guide/faq.html) 或在我们的 [GitHub Issues](https://github.com/syuchua/QFurina/issues) 上提问。