<template><div><h1 id="安装与配置" tabindex="-1"><a class="header-anchor" href="#安装与配置"><span>安装与配置</span></a></h1>
<p>本指南将帮助您安装和配置 QFurina。QFurina 支持多种部署方式，包括 Docker 部署和本地部署。</p>
<h2 id="系统要求" tabindex="-1"><a class="header-anchor" href="#系统要求"><span>系统要求</span></a></h2>
<ul>
<li>Python 3.8+</li>
<li>pip (Python 包管理器)</li>
<li>Git (用于克隆仓库)</li>
</ul>
<h2 id="docker-部署-推荐" tabindex="-1"><a class="header-anchor" href="#docker-部署-推荐"><span>Docker 部署 (推荐)</span></a></h2>
<p>Docker 部署是最简单和推荐的方式，它已经集成了 <a href="https://github.com/NapNeko/NapCatQQ" target="_blank" rel="noopener noreferrer">NapCat</a> 和 MongoDB 数据库。</p>
<ol>
<li>
<p>克隆项目并进入目录：</p>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-bash"><code><span class="line"><span class="line"><span style="color:#B392F0">git</span><span style="color:#9ECBFF"> clone</span><span style="color:#79B8FF"> -b</span><span style="color:#9ECBFF"> dev</span><span style="color:#9ECBFF"> https://github.com/syuchua/QFurina.git</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">cd</span><span style="color:#9ECBFF"> QFurina</span><span style="color:#E1E4E8"> &#x26;&#x26; </span><span style="color:#B392F0">mkdir</span><span style="color:#9ECBFF"> data</span><span style="color:#E1E4E8"> &#x26;&#x26; </span><span style="color:#79B8FF">cd</span><span style="color:#9ECBFF"> data</span><span style="color:#E1E4E8"> &#x26;&#x26; </span><span style="color:#B392F0">mkdir</span><span style="color:#9ECBFF"> music</span><span style="color:#E1E4E8"> &#x26;&#x26; </span><span style="color:#79B8FF">cd</span><span style="color:#9ECBFF"> ../</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编辑配置文件：</p>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-bash"><code><span class="line"><span class="line"><span style="color:#B392F0">nano</span><span style="color:#9ECBFF"> config/config.json</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>根据需要修改配置文件内容。如果需要配置 GPT 以外的模型，可以修改 <code v-pre>model.json</code>，其中 <code v-pre>vision</code> 项表示模型是否支持识图。</p>
</li>
<li>
<p>启动服务：</p>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-bash"><code><span class="line"><span class="line"><span style="color:#B392F0">docker-compose</span><span style="color:#9ECBFF"> up</span><span style="color:#79B8FF"> -d</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>查看日志：</p>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-bash"><code><span class="line"><span class="line"><span style="color:#B392F0">docker-compose</span><span style="color:#9ECBFF"> logs</span><span style="color:#79B8FF"> -f</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="本地部署" tabindex="-1"><a class="header-anchor" href="#本地部署"><span>本地部署</span></a></h2>
<p>如果您prefer更灵活的配置或者无法使用 Docker，可以选择本地部署。</p>
<ol>
<li>
<p>克隆项目：</p>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-bash"><code><span class="line"><span class="line"><span style="color:#B392F0">git</span><span style="color:#9ECBFF"> clone</span><span style="color:#79B8FF"> -b</span><span style="color:#9ECBFF"> dev</span><span style="color:#9ECBFF"> https://github.com/syuchua/QFurina.git</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">cd</span><span style="color:#9ECBFF"> QFurina</span><span style="color:#E1E4E8"> &#x26;&#x26; </span><span style="color:#B392F0">mkdir</span><span style="color:#9ECBFF"> data</span><span style="color:#E1E4E8"> &#x26;&#x26; </span><span style="color:#79B8FF">cd</span><span style="color:#9ECBFF"> data</span><span style="color:#E1E4E8"> &#x26;&#x26; </span><span style="color:#B392F0">mkdir</span><span style="color:#9ECBFF"> music</span><span style="color:#E1E4E8"> &#x26;&#x26; </span><span style="color:#79B8FF">cd</span><span style="color:#9ECBFF"> ../</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>创建虚拟环境 (可选但推荐)：</p>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-bash"><code><span class="line"><span class="line"><span style="color:#B392F0">python</span><span style="color:#79B8FF"> -m</span><span style="color:#9ECBFF"> venv</span><span style="color:#9ECBFF"> venv</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">source</span><span style="color:#9ECBFF"> venv/bin/activate</span><span style="color:#6A737D">  # Windows 使用: venv\Scripts\activate</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>安装依赖：</p>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-bash"><code><span class="line"><span class="line"><span style="color:#B392F0">pip</span><span style="color:#9ECBFF"> install</span><span style="color:#79B8FF"> -r</span><span style="color:#9ECBFF"> requirements.txt</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>配置：
编辑 <code v-pre>config/config.json</code> 文件，根据需要修改配置。主要配置项包括：</p>
<ul>
<li><code v-pre>openai_api_key</code>: OpenAI API 密钥</li>
<li><code v-pre>model</code>: 使用的模型 (默认: gpt-3.5-turbo)</li>
<li><code v-pre>self_id</code>: 机器人 QQ 号</li>
<li><code v-pre>admin_id</code>: 管理员 QQ 号</li>
<li><code v-pre>nicknames</code>: 机器人昵称列表</li>
<li><code v-pre>system_message</code>: 系统消息配置，包括 <code v-pre>character</code> (机器人人格)</li>
<li><code v-pre>connection_type</code>: 连接类型 (http 或 ws_reverse)</li>
<li><code v-pre>proxy_api_base</code>: API 请求地址</li>
<li><code v-pre>reply_probability</code>: 无昵称时的回复频率</li>
<li><code v-pre>r18</code>: R18 内容设置 (0 关闭, 1 开启, 2 随机)</li>
</ul>
<p>完整配置选项请参考 <code v-pre>example.json.txt</code>。</p>
</li>
<li>
<p>安装并配置 MongoDB：
请参考 <a href="https://docs.mongodb.com/manual/installation/" target="_blank" rel="noopener noreferrer">MongoDB 官方文档</a> 安装 MongoDB。</p>
</li>
<li>
<p>运行：</p>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-bash"><code><span class="line"><span class="line"><span style="color:#B392F0">python</span><span style="color:#9ECBFF"> main.py</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步"><span>下一步</span></a></h2>
<p>安装完成后，您需要选择一个消息平台进行对接。QFurina 支持多种消息平台，包括 Llonebot、NapCat 和 Lagrange 等。请参考以下指南进行平台对接：</p>
<ul>
<li><RouteLink to="/guide/platforms/llonebot.html">Llonebot 对接指南</RouteLink></li>
<li><RouteLink to="/guide/platforms/napcat.html">NapCat 对接指南</RouteLink></li>
<li><RouteLink to="/guide/platforms/lagrange.html">Lagrange 对接指南</RouteLink></li>
</ul>
<p>如果您在安装过程中遇到任何问题，请查看我们的 <RouteLink to="/guide/faq.html">常见问题解答</RouteLink> 或在 <a href="https://github.com/syuchua/QFurina/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 上提问。</p>
</div></template>


