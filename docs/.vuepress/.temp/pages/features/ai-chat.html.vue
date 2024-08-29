<template><div><h1 id="ai-对话系统" tabindex="-1"><a class="header-anchor" href="#ai-对话系统"><span>AI 对话系统</span></a></h1>
<p>QFurina 的 AI 对话系统是其核心功能之一，它利用先进的自然语言处理技术，为用户提供智能、自然的对话体验。</p>
<h2 id="主要特性" tabindex="-1"><a class="header-anchor" href="#主要特性"><span>主要特性</span></a></h2>
<ol>
<li><strong>智能对话</strong>：能够理解和回应复杂的用户输入，提供连贯、有意义的回复。</li>
<li><strong>角色扮演</strong>：支持多种预设角色，可以模拟不同人物或场景的对话风格。</li>
<li><strong>上下文理解</strong>：能够在对话中保持上下文，使交互更加自然流畅。</li>
<li><strong>多轮对话</strong>：支持长时间的多轮对话，保持对话的连贯性和逻辑性。</li>
<li><strong>个性化回复</strong>：根据用户的对话历史和偏好，提供个性化的回应。</li>
</ol>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2>
<ol>
<li>
<p><strong>开始对话</strong>：
直接在群聊或私聊中提及机器人的名字或使用特定的触发词来开始对话。</p>
<p>例如：<code v-pre>@QFurina 你好，今天天气怎么样？</code></p>
</li>
<li>
<p><strong>重置对话</strong>：
如果想开始新的对话主题，可以使用重置命令。</p>
<p>例如：<code v-pre>/reset</code></p>
</li>
<li>
<p><strong>查看对话历史</strong>：
使用特定命令查看最近的对话历史。</p>
<p>例如：<code v-pre>/history 10</code></p>
</li>
</ol>
<h2 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项"><span>配置选项</span></a></h2>
<p>在 <code v-pre>config.json</code> 文件中，您可以自定义 AI 对话系统的行为：</p>
<ul>
<li><code v-pre>model</code>: 选择使用的 AI 模型（如 &quot;gpt-3.5-turbo&quot;）</li>
<li><code v-pre>system_message.character</code>: 设置机器人的默认人格</li>
<li><code v-pre>nicknames</code>: 设置触发机器人回复的昵称列表</li>
<li><code v-pre>reply_probability</code>: 设置无昵称时的随机回复概率</li>
</ul>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>
<ul>
<li>AI 对话系统依赖于外部 API（如 OpenAI），请确保您有有效的 API 密钥。</li>
<li>对话内容可能会被发送到外部服务器进行处理，请注意保护隐私信息。</li>
<li>AI 生成的内容可能存在偏差或不准确，请谨慎使用。</li>
</ul>
<h2 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法"><span>高级用法</span></a></h2>
<ul>
<li><strong>自定义提示词</strong>：通过修改系统消息，可以微调 AI 的行为和风格。</li>
<li><strong>结合其他功能</strong>：AI 对话可以与其他功能（如图像生成、语音合成）结合使用，创造更丰富的交互体验。</li>
</ul>
<p>如果您在使用 AI 对话系统时遇到任何问题，或有改进建议，请随时在我们的 <a href="https://github.com/syuchua/QFurina/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 上反馈。</p>
</div></template>


