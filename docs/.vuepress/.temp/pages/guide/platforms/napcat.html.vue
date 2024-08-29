<template><div><h1 id="napcat-对接指南" tabindex="-1"><a class="header-anchor" href="#napcat-对接指南"><span>NapCat 对接指南</span></a></h1>
<p>NapCat 是一个轻量级的 QQ 机器人框架，本指南将帮助您将 QFurina 与 NapCat 进行对接。</p>
<h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2>
<ol>
<li>确保您已经安装了 QFurina。</li>
<li>下载并安装 NapCat。</li>
</ol>
<h2 id="配置步骤" tabindex="-1"><a class="header-anchor" href="#配置步骤"><span>配置步骤</span></a></h2>
<ol>
<li>
<p>编辑 QFurina 的配置文件 <code v-pre>config/config.json</code>：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"connection_type"</span><span class="token operator">:</span> <span class="token string">"http"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"http_url"</span><span class="token operator">:</span> <span class="token string">"http://127.0.0.1:5700"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"ws_reverse_url"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"use_http"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 NapCat 运行在不同的 IP 或端口，请相应地修改 <code v-pre>http_url</code>。</p>
</li>
<li>
<p>配置 NapCat：</p>
<p>编辑 NapCat 的配置文件，确保 HTTP 服务器已启用，并设置正确的端口（默认为 5700）。</p>
</li>
<li>
<p>启动 NapCat 和 QFurina 服务。</p>
</li>
</ol>
<h2 id="验证连接" tabindex="-1"><a class="header-anchor" href="#验证连接"><span>验证连接</span></a></h2>
<ol>
<li>
<p>启动 QFurina：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">python main.py</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>检查 QFurina 的日志输出，确保没有连接错误。</p>
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


