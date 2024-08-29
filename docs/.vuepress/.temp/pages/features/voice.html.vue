<template><div><h1 id="语音处理能力" tabindex="-1"><a class="header-anchor" href="#语音处理能力"><span>语音处理能力</span></a></h1>
<p>QFurina 的语音处理功能允许机器人生成语音消息，增强了与用户的交互体验。这个功能主要包括 AI 语音生成，可以将文本转换为自然流畅的语音。</p>
<h2 id="主要特性" tabindex="-1"><a class="header-anchor" href="#主要特性"><span>主要特性</span></a></h2>
<ol>
<li><strong>文本转语音</strong>：将文本消息转换为语音消息。</li>
<li><strong>多种音色</strong>：支持多种不同的音色和语言。</li>
<li><strong>情感表达</strong>：能够在语音中表达不同的情感和语气。</li>
<li><strong>自定义参数</strong>：允许调整语速、音调等参数。</li>
</ol>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<ol>
<li>
<p><strong>生成语音消息</strong>：
使用特定命令将文本转换为语音。</p>
<p>例如：<code v-pre>/tts 你好，我是 QFurina</code></p>
</li>
<li>
<p><strong>切换音色</strong>：
选择不同的音色来生成语音。</p>
<p>例如：<code v-pre>/voice 女声1 你好，很高兴认识你</code></p>
</li>
<li>
<p><strong>调整语音参数</strong>：
使用参数来自定义语音效果。</p>
<p>例如：<code v-pre>/tts -s 1.2 -p 1.1 这是一条快速且高音的语音消息</code></p>
</li>
</ol>
<h2 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项"><span>配置选项</span></a></h2>
<p>在 <code v-pre>config.json</code> 文件中，您可以自定义语音处理功能的行为：</p>
<ul>
<li><code v-pre>tts_api</code>: 设置使用的文本转语音 API</li>
<li><code v-pre>default_voice</code>: 设置默认使用的音色</li>
<li><code v-pre>voice_speed</code>: 设置默认语速</li>
<li><code v-pre>voice_pitch</code>: 设置默认音调</li>
</ul>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ul>
<li>语音生成可能需要一定的处理时间，尤其是长文本。</li>
<li>某些平台可能不支持直接发送语音消息，在这种情况下，可能会以文件形式发送。</li>
<li>使用第三方 API 时，请注意遵守相关的使用条款和限制。</li>
</ul>
<h2 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法"><span>高级用法</span></a></h2>
<ul>
<li><strong>语音合成与 AI 对话结合</strong>：将 AI 生成的回复直接转换为语音消息。</li>
<li><strong>多语言支持</strong>：使用不同语言的音色来生成多语言语音消息。</li>
<li><strong>情感分析</strong>：根据文本内容自动选择合适的语气和情感。</li>
</ul>
<p>如果您在使用语音处理功能时遇到任何问题，或有改进建议，请在我们的 <a href="https://github.com/syuchua/QFurina/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 上反馈。</p>
</div></template>


