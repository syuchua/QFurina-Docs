<template><div><h1 id="napcat-对接指南" tabindex="-1"><a class="header-anchor" href="#napcat-对接指南"><span>NapCat 对接指南</span></a></h1>
<p>NapCat 是一个轻量级的 QQ 机器人框架，本指南将帮助您将 QFurina 与 NapCat 进行对接。</p>
<h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2>
<ol>
<li>
<p>确保您已经安装了 QFurina。
官方文档：
https://napneko.github.io/zh-CN/</p>
</li>
<li>
<p>下载并安装 NapCat。</p>
</li>
</ol>
<h2 id="配置步骤" tabindex="-1"><a class="header-anchor" href="#配置步骤"><span>配置步骤</span></a></h2>
<ol>
<li>
<p>编辑 QFurina 的配置文件 <code v-pre>config/config.json</code>：</p>
<div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-json"><code><span class="line"><span class="line"><span style="color:#E1E4E8">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">  "connection_type"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"ws_reverse"</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8">}</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>配置 NapCat：</p>
<p>编辑 NapCat 的配置文件：</p>
<div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-json"><code><span class="line"><span class="line"><span style="color:#E1E4E8">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "http"</span><span style="color:#E1E4E8">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">      // 是否启用http服务, true为启动，false为禁用</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">      "enable"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">false</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">      // HTTP服务监听的 ip 地址，为空则监听所有地址</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">      "host"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">""</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">      // http服务端口</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">      "port"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">3000</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">      // http上报密钥，可为空</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">      "secret"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">""</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">      // 是否启用http心跳</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">      "enableHeart"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">false</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">      // 是否启用http上报服务</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">      "enablePost"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">false</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">      // http上报地址, 如["http://127.0.0.1:8080/onebot/v11/http"]</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">      "postUrls"</span><span style="color:#E1E4E8">: []</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8">   },</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "ws"</span><span style="color:#E1E4E8">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">      // 是否启用正向websocket服务</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">      "enable"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">false</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">      // 正向websocket服务监听的 ip 地址，为空则监听所有地址</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">      "host"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">""</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">      // 正向websocket服务端口</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">      // 当port与http服务port一致时，host也需与http服务host保持一致，否则可能会导致启动失败</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">      "port"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">3001</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8">   },</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "reverseWs"</span><span style="color:#E1E4E8">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">      // 是否启用反向websocket服务</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">      "enable"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">      // 反向websocket对接的地址, 如["ws://127.0.0.1:8080/onebot/v11/ws"]</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">      "urls"</span><span style="color:#E1E4E8">: [</span><span style="color:#9ECBFF">"ws://127.0.0.1:8011/ws"</span><span style="color:#E1E4E8">]</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8">   },</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "GroupLocalTime"</span><span style="color:#E1E4E8">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">      "Record"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">false</span><span style="color:#E1E4E8">,</span><span style="color:#6A737D">//是否开启本地群聊时间记录</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">      "RecordList"</span><span style="color:#E1E4E8">: []</span><span style="color:#6A737D">//开启全部群 ["-1"]  单个群配置 ["11111"] 多个群 ["1","2","3"]</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8">   },</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">   // 是否开启调试模式，开启后上报消息会携带一个raw字段，为原始消息内容</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "debug"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">false</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">   // ws心跳间隔，单位毫秒</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "heartInterval"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">30000</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">   // 消息上报格式，array为消息组，string为cq码字符串</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "messagePostFormat"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"array"</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">   // 是否将本地文件转换为URL，如果获取不到url则使用base64字段返回文件内容</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "enableLocalFile2Url"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">   // 音乐签名URL，用于处理音乐相关请求</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "musicSignUrl"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">""</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">   // 是否上报自己发送的消息</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "reportSelfMessage"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">false</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">   // access_token，可以为空</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "token"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">""</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8">}</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>启动 NapCat 和 QFurina 服务。</p>
</li>
</ol>
<h2 id="验证连接" tabindex="-1"><a class="header-anchor" href="#验证连接"><span>验证连接</span></a></h2>
<ol>
<li>
<p>启动 QFurina：</p>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-bash"><code><span class="line"><span class="line"><span style="color:#B392F0"> python</span><span style="color:#9ECBFF"> main.py</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>检查 QFurina 的日志输出，确保没有连接错误。
如果连接无误的话，你可以看到：</p>
<p><img src="https://img.yuchu.me/file/f8f9c5d0cbe210269acb6.png" alt=""></p>
</li>
<li>
<p>在 QQ 中向机器人发送消息，测试是否能正常回复。</p>
</li>
</ol>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<ol>
<li>
<p><strong>HTTP 请求失败</strong>：</p>
<ul>
<li>确保 NapCat 的 HTTP 服务器正在运行。</li>
<li>检查防火墙设置，确保允许相应端口的通信。</li>
</ul>
</li>
<li>
<p><strong>消息接收延迟</strong>：</p>
<ul>
<li>考虑使用 WebSocket 连接代替 HTTP 轮询，可以提高实时性。</li>
</ul>
</li>
<li>
<p><strong>权限问题</strong>：</p>
<ul>
<li>确保 NapCat 有足够的权限执行 QFurina 的请求。</li>
</ul>
</li>
</ol>
<p>如果您在对接过程中遇到任何问题，请查看我们的 <RouteLink to="/guide/faq.html">常见问题解答</RouteLink> 或在 <a href="https://github.com/syuchua/QFurina/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 上提问。</p>
</div></template>


