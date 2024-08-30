# 创建你的第一个 QFurina 插件

本指南将带你一步步创建一个简单的 QFurina 插件。我们将创建一个 "Hello World" 插件，它会响应特定的命令并发送一条问候消息。

## 前提条件

- 已安装 QFurina
- 基本的 Python 编程知识

## 步骤 1：创建插件目录

在 QFurina 的 `plugins` 目录下创建一个新文件夹，命名为 `hello_world`：

```bash
   QFurina/
   └── plugins/
   └── hello_world/
```


## 步骤 2：创建主插件文件
要创建一个新插件，您需要：

1. 在 `plugins` 目录下创建一个新的文件夹。
2. 在该文件夹中创建一个主 Python 文件（如 `example_plugin.py`）。
3. 在主文件中定义一个继承自 `PluginBase` 的类。
4. 使用 `@PluginBase.register` 装饰器注册您的插件。

示例插件代码：
在 `hello_world` 目录中创建一个名为 `hello_world.py` 的文件：
```python
from app.plugin.plugin_base import PluginBase

@PluginBase.register("example")
class ExamplePlugin(PluginBase):
    def __init__(self):
        super().__init__()
        self.name = "Example Plugin"
        self.version = "1.0.0"
        self.description = "This is an example plugin"

    async def on_message(self, message):
      content = message.get('content', '')
      if "hello plugin" in content.lower()
        return "hello world!"

    async def on_file_upload(self, file_path):
        # 处理文件上传的逻辑
        pass
```



## 步骤 3：创建插件配置文件

在 `hello_world` 目录中创建一个名为 `config.json` 的文件并填写配置信息(如果用到)：
```json
{
   "api_url": "https://example.com",
   "api_key": "your-key"
}
```



## 步骤 4：启用插件

在 QFurina 的主配置文件 `config.json` 中，找到 `ENABLED_PLUGINS` 部分，添加你的插件名：
```json
   "ENABLED_PLUGINS": [
      "hello_world",
   // 其他已启用的插件...
]
```


## 步骤 5：测试插件

1. 重启 QFurina 或者使用插件重载命令：`/reload_plugin hello_world`
2. 在与机器人的对话中输入 `/hello`
3. 机器人应该会回复 "Hello, World! I'm a QFurina plugin!"

## 进阶开发

1. **添加配置选项**：
   在 `plugin.json` 中添加配置选项，然后在插件中读取这些配置。

2. **使用数据库**：
   如果你的插件需要存储数据，可以使用 QFurina 提供的数据库接口。

3. **添加命令处理器**：
   实现 `on_command` 方法来处理特定的命令。

4. **响应事件**：
   实现其他事件处理方法，如 `on_member_join`、`on_group_message` 等。

5. **使用 QFurina API**：
   利用 QFurina 提供的 API 来实现更复杂的功能。

## 最佳实践

1. **错误处理**：使用 try-except 块来捕获和处理异常。
2. **异步编程**：尽可能使用异步函数来提高性能。
3. **文档**：为你的函数和类添加清晰的文档字符串。
4. **测试**：编写单元测试来确保你的插件功能正常。

## 下一步

- 查看 [插件 API 参考](/plugins/api.html) 了解更多可用的 API 和事件。
<!-- - 浏览 [社区插件仓库](https://github.com/syuchua/QFurina-plugins) 获取灵感。 -->
- 在 [GitHub Issues](https://github.com/syuchua/QFurina/issues) 上提出问题或分享你的插件。

祝你开发愉快！