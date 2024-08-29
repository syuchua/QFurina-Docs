<template><div><h1 id="图像生成功能" tabindex="-1"><a class="header-anchor" href="#图像生成功能"><span>图像生成功能</span></a></h1>
<p>QFurina 的图像生成功能允许用户通过文本描述来创建独特的图像，或者从特定来源获取图片。这个功能结合了 AI 绘画技术和网络图片获取能力。</p>
<h2 id="主要特性" tabindex="-1"><a class="header-anchor" href="#主要特性"><span>主要特性</span></a></h2>
<ol>
<li><strong>AI 绘画</strong>：根据文本提示生成原创图像。</li>
<li><strong>Pixiv 图片获取</strong>：从 Pixiv 平台获取并发送图片。</li>
<li><strong>关键词图片</strong>：根据指定关键词发送相关图片。</li>
<li><strong>随机图片</strong>：发送随机图片。</li>
</ol>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<ol>
<li><strong>AI 绘画</strong>：
首先配置插件:
查看<a href="https://github.com/syuchua/AIDrawingPlugin" target="_blank" rel="noopener noreferrer">项目仓库</a>，自行搭建worker</li>
</ol>
<p>下载插件</p>
<div class="language-bash line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-bash"><code><span class="line"><span class="line"><span style="color:#B392F0">/plugin</span><span style="color:#9ECBFF"> https://github.com/syuchua/AIDrawingPlugin</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在插件目录下的config.json配置worker链接</p>
<p>使用特定命令触发 AI 绘画功能。</p>
<p>例如：<code v-pre>/draw-v1 一只在月光下奔跑的狼</code></p>
<ol start="2">
<li>
<p><strong>获取 Pixiv 图片</strong>：
使用[来份色图|来份涩图|再来一张]获取随机色图</p>
<p>使用[来一张|发一张]+关键词获取指定关键词的色图</p>
<p>例如：<code v-pre>芙芙来一张卡芙卡</code></p>
</li>
</ol>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ul>
<li>AI 绘画功能可能需要较长时间处理，请耐心等待。</li>
<li>从外部源获取的图片可能受版权保护，请遵守相关法律和平台规则。</li>
<li>生成的图像内容可能不适合所有年龄段，请谨慎使用。</li>
</ul>
<p>如果您在使用图像生成功能时遇到任何问题，或有新功能建议，请在我们的 <a href="https://github.com/syuchua/QFurina/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 上提出。</p>
</div></template>


