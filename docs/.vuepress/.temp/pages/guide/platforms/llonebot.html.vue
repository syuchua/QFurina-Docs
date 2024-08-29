<template><div><h1 id="llonebot-对接指南" tabindex="-1"><a class="header-anchor" href="#llonebot-对接指南"><span>Llonebot 对接指南</span></a></h1>
<p>Llonebot 是一个流行的 QQ 机器人框架，本指南将帮助您将 QFurina 与 Llonebot 进行对接。</p>
<h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2>
<ol>
<li>确保您已经安装了 QFurina 和 Llonebot。</li>
<li>获取 Llonebot 的连接信息（通常是 WebSocket 地址和端口）。</li>
</ol>
<h2 id="配置步骤" tabindex="-1"><a class="header-anchor" href="#配置步骤"><span>配置步骤</span></a></h2>
<ol>
<li>
<p>编辑 QFurina 的配置文件 <code v-pre>config/config.json</code>：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"connection_type"</span><span class="token operator">:</span> <span class="token string">"ws_reverse"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"ws_reverse_url"</span><span class="token operator">:</span> <span class="token string">"ws://your_llonebot_ip:your_port"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"ws_reverse_api_url"</span><span class="token operator">:</span> <span class="token string">"ws://your_llonebot_ip:your_port/api"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"ws_reverse_event_url"</span><span class="token operator">:</span> <span class="token string">"ws://your_llonebot_ip:your_port/event"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"use_http"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code v-pre>your_llonebot_ip</code> 和 <code v-pre>your_port</code> 替换为您的 Llonebot 实际地址和端口。</p>
</li>
<li>
<p>在 Llonebot 的配置文件中，确保启用了反向 WebSocket 连接：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">servers</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">ws_reverse</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">universal</span><span class="token punctuation">:</span> ws<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>8080/onebot/v11/ws</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的地址应该与 QFurina 运行的地址和端口相匹配。</p>
</li>
<li>
<p>重启 Llonebot 和 QFurina 服务。</p>
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
<p><strong>连接失败</strong>：</p>
<ul>
<li>检查 IP 地址和端口是否正确。</li>
<li>确保防火墙没有阻止连接。</li>
</ul>
</li>
<li>
<p><strong>无法接收消息</strong>：</p>
<ul>
<li>验证 Llonebot 的事件推送是否正确配置。</li>
<li>检查 QFurina 的日志是否显示接收到事件。</li>
</ul>
</li>
<li>
<p><strong>无法发送消息</strong>：</p>
<ul>
<li>确保 QFurina 有正确的发送权限。</li>
<li>检查 Llonebot 的 API 调用是否成功。</li>
</ul>
</li>
</ol>
<p>如果您遇到其他问题，请查看 <RouteLink to="/guide/faq.html">常见问题解答</RouteLink> 或在我们的 <a href="https://github.com/syuchua/QFurina/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 上提问。</p>
</div></template>


