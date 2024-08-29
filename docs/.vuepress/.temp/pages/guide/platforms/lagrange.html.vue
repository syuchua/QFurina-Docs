<template><div><h1 id="lagrange-对接指南" tabindex="-1"><a class="header-anchor" href="#lagrange-对接指南"><span>Lagrange 对接指南</span></a></h1>
<p>Lagrange 是一个跨平台的 QQ 客户端，本指南将帮助您将 QFurina 与 Lagrange 进行对接。</p>
<h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2>
<ol>
<li>
<p>确保您已经安装了 QFurina。</p>
</li>
<li>
<p>下载并安装 Lagrange。
官方文档：</p>
<p>https://lagrangedev.github.io/Lagrange.Doc/</p>
</li>
<li>
<p>在 Lagrange 中启用 OneBot 协议支持。</p>
</li>
</ol>
<h2 id="配置步骤" tabindex="-1"><a class="header-anchor" href="#配置步骤"><span>配置步骤</span></a></h2>
<ol>
<li>
<p>在 Lagrange 中配置 OneBot 协议：</p>
<ul>
<li>打开 Lagrange 设置</li>
<li>找到 OneBot 协议设置</li>
<li>启用 OneBot 协议</li>
<li>设置监听地址和端口(修改配置文件)</li>
</ul>
<div class="language-JSON line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-JSON"><code><span class="line"><span class="line"><span style="color:#E1E4E8"> {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "Type"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"ReverseWebSocket"</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "Host"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"0.0.0.0"</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "Port"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">8011</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "Suffix"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"/ws"</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "ReconnectInterval"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">5000</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "HeartBeatInterval"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">5000</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "HeartBeatEnable"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "AccessToken"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">""</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8"> },</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>编辑 QFurina 的配置文件 <code v-pre>config/config.json</code>：</p>
<div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-json"><code><span class="line"><span class="line"><span style="color:#E1E4E8">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">  "connection_type"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"ws_reverse"</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8">}</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>启动 Lagrange 和 QFurina 服务。</p>
</li>
</ol>
<h2 id="验证连接" tabindex="-1"><a class="header-anchor" href="#验证连接"><span>验证连接</span></a></h2>
<ol>
<li>
<p>启动 QFurina：</p>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-bash"><code><span class="line"><span class="line"><span style="color:#B392F0">python</span><span style="color:#9ECBFF"> main.py</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>检查 QFurina 的日志输出，确保没有连接错误。
如果连接无误的话，你可以看到：</p>
<p><img src="https://img.yuchu.me/file/f8f9c5d0cbe210269acb6.png" alt=""></p>
</li>
<li>
<p>在 Lagrange 中向机器人发送消息，测试是否能正常回复。</p>
</li>
</ol>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<ol>
<li>
<p><strong>连接失败</strong>：</p>
<ul>
<li>确保 Lagrange 中的 OneBot 协议已正确启用。</li>
<li>检查防火墙设置，确保允许相应端口的通信。</li>
</ul>
</li>
<li>
<p><strong>消息发送失败</strong>：</p>
<ul>
<li>验证 QFurina 是否有正确的发送权限。</li>
<li>检查 Lagrange 的日志，查看是否有错误信息。</li>
</ul>
</li>
<li>
<p><strong>功能限制</strong>：</p>
<ul>
<li>注意 Lagrange 可能不支持某些高级功能，如群管理操作。</li>
</ul>
</li>
</ol>
<p>如果您在对接过程中遇到任何问题，请查看我们的 <RouteLink to="/guide/faq.html">常见问题解答</RouteLink> 或在 <a href="https://github.com/syuchua/QFurina/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 上提问。</p>
</div></template>


