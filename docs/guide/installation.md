# 安装与配置

本指南将帮助您安装和配置 QFurina。QFurina 支持多种部署方式，包括 Docker 部署和本地部署。

## 系统要求

- Python 3.11+
- pip (Python 包管理器)
- Git (用于克隆仓库)

## Docker 部署 (推荐)

Docker 部署是最简单和推荐的方式，它已经集成了 [NapCat](https://github.com/NapNeko/NapCatQQ) 和 MongoDB 数据库。

1. 克隆项目并进入目录：

   ```bash
   git clone -b dev https://github.com/syuchua/QFurina.git
   cd QFurina && mkdir data && cd data && mkdir music && cd ../
   ```

2. 编辑配置文件：

   ```bash
   nano config/config.json
   ```
  
   根据需要修改配置文件内容。如果需要配置 GPT 以外的模型，可以修改 `model.json`，其中 `vision` 项表示模型是否支持识图。

3. 编辑docker-compose.yaml，修改机器人账号：

   ```bash
   nano docker-compose.yaml
   ```
   找到napcat部分：

   ```yaml
   napcat:
    image: mlikiowa/napcat-docker:latest
    container_name: napcat
    environment:
      - ACCOUNT=123456789 # 修改为机器人QQ号
      - WSR_ENABLE=true
      - WS_URLS=["ws://qq_bot:8011/ws"]
    ports:
      - "6099:6099"
    volumes:
      - ./napcat:/app/napcat
    restart: always
    depends_on:
      - qq_bot
   ```


4. 启动服务：

   ```bash
   docker-compose up -d
   ```


5. 查看napcat日志，扫码登录：

   ```bash
   docker logs napcat
   ```

## 本地部署

如果您prefer更灵活的配置或者无法使用 Docker，可以选择本地部署。

1. 克隆项目：

   ```bash
   git clone -b dev https://github.com/syuchua/QFurina.git
   cd QFurina && mkdir data && cd data && mkdir music && cd ../
   ```

2. 创建虚拟环境 (可选但推荐)：

   ```bash
   python -m venv venv
   source venv/bin/activate  # Windows 使用: venv\Scripts\activate
   ```

3. 安装依赖：

   ```bash
   pip install -r requirements.txt
   ```

4. 配置：
   编辑 `config/config.json` 文件，根据需要修改配置。主要配置项包括：

   - `openai_api_key`: OpenAI API 密钥
   - `model`: 使用的模型 (默认: gpt-3.5-turbo)
   - `self_id`: 机器人 QQ 号
   - `admin_id`: 管理员 QQ 号
   - `nicknames`: 机器人昵称列表
   - `system_message`: 系统消息配置，包括 `character` (机器人人格)
   - `connection_type`: 连接类型 (http 或 ws_reverse)
   - `proxy_api_base`: API 请求地址
   - `reply_probability`: 无昵称时的回复频率
   - `r18`: R18 内容设置 (0 关闭, 1 开启, 2 随机)

   完整配置选项请参考 `example.json.txt`。

5. 安装并配置 MongoDB：
   请参考 [MongoDB 官方文档](https://docs.mongodb.com/manual/installation/) 安装 MongoDB。

6. 运行：

   ```bash
   python main.py
   ```

## 下一步

安装完成后，您需要选择一个消息平台进行对接。QFurina 支持多种消息平台，包括 Llonebot、NapCat 和 Lagrange 等。请参考以下指南进行平台对接：

- [Llonebot 对接指南](/guide/platforms/llonebot.html)
- [NapCat 对接指南](/guide/platforms/napcat.html)
- [Lagrange 对接指南](/guide/platforms/lagrange.html)

如果您在安装过程中遇到任何问题，请查看我们的 [常见问题解答](/guide/faq.html) 或在 [GitHub Issues](https://github.com/syuchua/QFurina/issues) 上提问。