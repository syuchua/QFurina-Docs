<template><div><h1 id="网络连接与交互" tabindex="-1"><a class="header-anchor" href="#网络连接与交互"><span>网络连接与交互</span></a></h1>
<p>QFurina 的网络连接与交互功能由<code v-pre>openinterpreter</code>和<code v-pre>duckduckgo</code>的免费api实现，允许机器人进行各种网络操作，如天气查询、联网搜索等。这些功能大大增强了机器人的实用性和信息获取能力。</p>
<h2 id="主要特性" tabindex="-1"><a class="header-anchor" href="#主要特性"><span>主要特性</span></a></h2>
<ol>
<li><strong>联网搜索</strong>：进行网络搜索并返回结果。</li>
<li><strong>网页内容抓取</strong>：获取和解析网页内容。</li>
<li><strong>API 集成</strong>：与各种第三方 API 进行交互。</li>
</ol>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<p>直接对话，并告诉机器人把<code v-pre>#search</code>标签放在要搜索的东西钱包
例如；<code v-pre>芙芙搜一下原神里的芙宁娜</code></p>
<p>或者直接发送链接，例如：
<code v-pre>芙芙读一下这个链接：https://github.com/syuchua/QFurina</code></p>
<p>当然，你也可以主动使用<code v-pre>#search</code>标签发起搜索</p>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ul>
<li>网络请求可能会受到延迟或失败的影响，请做好错误处理。</li>
<li>某些 API 可能需要付费使用，请注意控制使用量。</li>
<li>在抓取网页内容时，请遵守网站的 robots.txt 规则和使用条款。</li>
</ul>
<h2 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法"><span>高级用法</span></a></h2>
<p>集成<a href="https://lbs.amap.com/" target="_blank" rel="noopener noreferrer">高德开放平台</a>的天气查询api，先获取api_key，然后下载插件</p>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-bash"><code><span class="line"><span class="line"><span style="color:#B392F0">/plugin</span><span style="color:#9ECBFF"> https://github.com/syuchua/WeatherPlugin</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在config.json里配置api_key</p>
<p>使用<code v-pre>/天气 + 城市名</code>获取对应城市今日天气
使用<code v-pre>/天气预报 + 城市名</code>获取对应城市未来三天天气预报</p>
<p>如果您在使用网络连接与交互功能时遇到任何问题，或有新功能建议，请在我们的 <a href="https://github.com/syuchua/QFurina/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 上提出。</p>
</div></template>


