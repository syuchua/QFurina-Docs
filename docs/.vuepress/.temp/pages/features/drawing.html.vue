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
<li>
<p><strong>AI 绘画</strong>：
使用特定命令触发 AI 绘画功能。</p>
<p>例如：<code v-pre>/draw 一只在月光下奔跑的狼</code></p>
</li>
<li>
<p><strong>获取 Pixiv 图片</strong>：
使用命令从 Pixiv 获取图片。</p>
<p>例如：<code v-pre>/pixiv 风景</code></p>
</li>
<li>
<p><strong>关键词图片</strong>：
使用关键词命令获取相关图片。</p>
<p>例如：<code v-pre>/image 猫咪</code></p>
</li>
<li>
<p><strong>随机图片</strong>：
使用随机图片命令。</p>
<p>例如：<code v-pre>/random_image</code></p>
</li>
</ol>
<h2 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项"><span>配置选项</span></a></h2>
<p>在 <code v-pre>config.json</code> 文件中，您可以自定义图像生成功能的行为：</p>
<ul>
<li><code v-pre>drawing_api</code>: 设置使用的绘画 API（如 &quot;stable-diffusion&quot;）</li>
<li><code v-pre>pixiv_username</code> 和 <code v-pre>pixiv_password</code>: 设置 Pixiv 账号信息（如果使用 Pixiv 功能）</li>
<li><code v-pre>image_sources</code>: 配置图片来源和关键词</li>
</ul>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ul>
<li>AI 绘画功能可能需要较长时间处理，请耐心等待。</li>
<li>从外部源获取的图片可能受版权保护，请遵守相关法律和平台规则。</li>
<li>生成的图像内容可能不适合所有年龄段，请谨慎使用。</li>
</ul>
<h2 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法"><span>高级用法</span></a></h2>
<ul>
<li><strong>自定义提示词</strong>：学习如何编写有效的提示词以获得更好的 AI 绘画结果。</li>
<li><strong>图像后处理</strong>：结合其他图像处理工具，对生成的图像进行进一步编辑或优化。</li>
<li><strong>批量生成</strong>：使用脚本批量生成多张图像，用于创作或研究目的。</li>
</ul>
<p>如果您在使用图像生成功能时遇到任何问题，或有新功能建议，请在我们的 <a href="https://github.com/syuchua/QFurina/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 上提出。</p>
</div></template>


