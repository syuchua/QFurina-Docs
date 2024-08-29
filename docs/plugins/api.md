# 插件基类

```python
import os, json
from abc import ABC, abstractmethod
from typing import Dict, Any, List
from app.logger import logger
from app.Core.config import Config

config = Config.get_instance()

class PluginBase(ABC):
    plugins: Dict[str, Any] = {}

    @classmethod
    def register(cls, name):
        def decorator(plugin_class):
            cls.plugins[name] = plugin_class
            plugin_class.register_name = name # 设置插件的注册名称
            return plugin_class
        return decorator

    def __init__(self):
        self.name = "Base Plugin"
        self.version = "1.0.0"
        self.description = "Base plugin class"
        self.enabled = False
        self.priority = 0
        self.register_name = getattr(self.__class__, 'register_name', self.name.lower().replace(' ', '_'))
        self.plugin_dir = os.path.dirname(os.path.abspath(self.__class__.__module__))
        self.config_file = os.path.join(self.plugin_dir, 'config.json')
        self.ensure_config()
        self.load_config()

    def ensure_config(self):
        """确保插件配置文件存在"""
        if not os.path.exists(self.config_file):
            with open(self.config_file, 'w', encoding='utf-8') as f:
                json.dump({}, f, ensure_ascii=False, indent=4)

    def get_plugin_path(self, filename: str) -> str:
        """获取插件文件的完整路径"""
        return os.path.join(self.plugin_dir, filename)

    def load_config(self):
        """加载插件配置"""

        with open(self.config_file, 'r', encoding='utf-8') as f:
            self.config = json.load(f)

    def save_config(self):
        """保存插件配置"""
        with open(self.config_file, 'w', encoding='utf-8') as f:
            json.dump(self.config, f, ensure_ascii=False, indent=4)

    
    @abstractmethod
    async def on_load(self):
        """当插件被加载时调用"""
        pass

    @abstractmethod
    async def on_unload(self):
        """当插件被卸载时调用"""
        pass

    async def on_enable(self):
        """当插件被启用时调用"""
        self.enabled = True

    async def on_disable(self):
        """当插件被禁用时调用"""
        self.enabled = False

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

    @classmethod
    def get_all_plugins(cls) -> Dict[str, Any]:
        """获取所有注册的插件"""
        return cls.plugins
```

# onebotv11相关配置
```python
# onebot v11.py
from enum import Enum
from typing import TypedDict, List, Union

# 定义消息类型枚举
class MessageType(Enum):
    PRIVATE = "private"  # 私聊消息
    GROUP = "group"  # 群聊消息

# 定义事件类型枚举
class EventType(Enum):
    MESSAGE = "message"  # 消息事件
    NOTICE = "notice"  # 通知事件
    REQUEST = "request"  # 请求事件
    META_EVENT = "meta_event"  # 元事件

# 定义通知类型枚举
class NoticeType(Enum):
    GROUP_UPLOAD = "group_upload"  # 群文件上传
    GROUP_ADMIN = "group_admin"  # 群管理员变动
    GROUP_DECREASE = "group_decrease"  # 群成员减少
    GROUP_INCREASE = "group_increase"  # 群成员增加
    GROUP_BAN = "group_ban"  # 群禁言
    FRIEND_ADD = "friend_add"  # 好友添加
    GROUP_RECALL = "group_recall"  # 群消息撤回
    FRIEND_RECALL = "friend_recall"  # 好友消息撤回
    POKE = "poke"  # 戳一戳
    LUCKY_KING = "lucky_king"  # 运气王
    HONOR = "honor"  # 群荣誉变更

# 定义请求类型枚举
class RequestType(Enum):
    FRIEND = "friend"  # 好友请求
    GROUP = "group"  # 群请求

# 定义消息段类型
class MessageSegment(TypedDict):
    type: str  # 消息段类型
    data: dict  # 消息段数据

# 定义发送者信息类型
class Sender(TypedDict):
    user_id: int  # 用户ID
    nickname: str  # 昵称
    sex: str  # 性别
    age: int  # 年龄
    card: str  # 群名片
    area: str  # 地区
    level: str  # 等级
    role: str  # 角色
    title: str  # 头衔

# 定义群消息事件类型
class GroupMessageEvent(TypedDict):
    post_type: str  # 上报类型
    message_type: str  # 消息类型
    time: int  # 事件发生的时间戳
    self_id: int  # 收到事件的机器人 QQ 号
    sub_type: str  # 消息子类型
    message_id: int  # 消息 ID
    user_id: int  # 发送者 QQ 号
    message: Union[str, List[MessageSegment]]  # 消息内容
    raw_message: str  # 原始消息内容
    font: int  # 字体
    sender: Sender  # 发送人信息
    group_id: int  # 群号

# 定义私聊消息事件类型
class PrivateMessageEvent(TypedDict):
    post_type: str  # 上报类型
    message_type: str  # 消息类型
    time: int  # 事件发生的时间戳
    self_id: int  # 收到事件的机器人 QQ 号
    sub_type: str  # 消息子类型
    message_id: int  # 消息 ID
    user_id: int  # 发送者 QQ 号
    message: Union[str, List[MessageSegment]]  # 消息内容
    raw_message: str  # 原始消息内容
    font: int  # 字体
    sender: Sender  # 发送人信息

# 可以继续添加其他事件类型的定义...

# 判断是否为群消息
def is_group_message(event: dict) -> bool:
    return event.get('message_type') == MessageType.GROUP.value

# 判断是否为私聊消息
def is_private_message(event: dict) -> bool:
    return event.get('message_type') == MessageType.PRIVATE.value

# 获取用户ID
def get_user_id(event: dict) -> int:
    return event.get('user_id', 0)

# 获取群ID
def get_group_id(event: dict) -> int:
    return event.get('group_id', 0)

# 获取消息内容
def get_message_content(event: dict) -> str:
    return event.get('raw_message', '')

def get_sender(event: dict) -> Sender:
    return event.get('sender', {})

def get_username(event: dict) -> str:
    return event.get('sender', {}).get('nickname', '')
```