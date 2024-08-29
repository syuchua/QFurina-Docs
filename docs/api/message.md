```python
    async def on_message(self, message: Dict[str, Any]) -> str:
        """当收到消息时调用"""
        return None

    async def on_file_upload(self, file_path: str):
        """当文件被上传时调用"""
        pass

    def get_commands(self) -> List[Dict[str, str]]:
        """获取插件支持的命令列表"""
        return []

    async def handle_command(self, command: str, args: Dict[str, Any]) -> str:
        """处理插件命令"""
        return f"Command '{command}' not implemented for {self.name}"

    def get_help(self) -> str:
        """获取插件帮助信息"""
        commands = self.get_commands()
        if not commands:
            return f"{self.name} v{self.version}\n{self.description}\n该插件没有可用的命令。"
        
        help_text = f"{self.name} v{self.version}\n{self.description}\n\n可用命令:\n"
        for cmd in commands:
            help_text += f"/{cmd['name']} - {cmd['description']}\n"
        return help_text
```