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
<p>语音功能需要自行配置<a href="https://cloud.yuchu.me/s/J2um" target="_blank" rel="noopener noreferrer">gpt-sovits整合包</a></p>
<p>使用特定命令来让机器人发送语音。</p>
<p>例如：<code v-pre>#voice (想要发送的语音)</code></p>
<p>或者交给机器人自由发挥：</p>
<p>例如：<code v-pre>想听芙芙的语音了，你如果想发送语音的话，可以把#voice标签放在回复的开头。</code></p>
<h2 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项"><span>配置选项</span></a></h2>
<p>在 <code v-pre>config.json</code> 文件中，您可以自定义语音处理功能的行为：</p>
<ul>
<li><code v-pre>voice_service_url</code>: 设置使用的文本转语音 API</li>
<li><code v-pre>cha_name</code>: 使用的音色</li>
<li><code v-pre>audio_save_path</code>: 音频文件保存位置</li>
</ul>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ul>
<li>语音生成可能需要一定的处理时间，尤其是长文本。</li>
<li>某些平台可能不支持直接发送语音消息，在这种情况下，可能会以文件形式发送。</li>
<li>使用第三方 API 时，请注意遵守相关的使用条款和限制。</li>
</ul>
<h2 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法"><span>高级用法</span></a></h2>
<p>发送音乐：将音乐文件(.mp3,.wav)放入<code v-pre>data/music</code>目录下，使用命令<code v-pre>music_list</code>查看歌曲列表
发送<code v-pre>点歌</code>+<code v-pre>歌曲名</code>点歌，支持模糊匹配
例如：<code v-pre>芙芙点歌 使一颗心</code>，即可点歌<code v-pre>《使一颗心免于哀伤》</code></p>
<p><a href="https://cloud.yuchu.me/s/KRCv" target="_blank" rel="noopener noreferrer">附赠一些网上搜集的AI翻唱资源</a></p>
<p>如果您在使用语音处理功能时遇到任何问题，或有改进建议，请在我们的 <a href="https://github.com/syuchua/QFurina/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 上反馈。</p>
</div></template>


