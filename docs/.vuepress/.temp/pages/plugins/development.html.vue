<template><div><h1 id="创建你的第一个-qfurina-插件" tabindex="-1"><a class="header-anchor" href="#创建你的第一个-qfurina-插件"><span>创建你的第一个 QFurina 插件</span></a></h1>
<p>本指南将带你一步步创建一个简单的 QFurina 插件。我们将创建一个 &quot;Hello World&quot; 插件，它会响应特定的命令并发送一条问候消息。</p>
<h2 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件"><span>前提条件</span></a></h2>
<ul>
<li>已安装 QFurina</li>
<li>基本的 Python 编程知识</li>
</ul>
<h2 id="步骤-1-创建插件目录" tabindex="-1"><a class="header-anchor" href="#步骤-1-创建插件目录"><span>步骤 1：创建插件目录</span></a></h2>
<p>在 QFurina 的 <code v-pre>plugins</code> 目录下创建一个新文件夹，命名为 <code v-pre>hello_world</code>：</p>
<p>QFurina/
└── plugins/
└── hello_world/</p>
<h2 id="步骤-2-创建主插件文件" tabindex="-1"><a class="header-anchor" href="#步骤-2-创建主插件文件"><span>步骤 2：创建主插件文件</span></a></h2>
<p>在 <code v-pre>hello_world</code> 目录中创建一个名为 <code v-pre>hello_world.py</code> 的文件：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">from app.plugin.plugin_base import PluginBase</span>
<span class="line">@PluginBase.register("hello_world")</span>
<span class="line">class HelloWorldPlugin(PluginBase):</span>
<span class="line">def init(self):</span>
<span class="line">super().init()</span>
<span class="line">self.name = "Hello World Plugin"</span>
<span class="line">self.version = "1.0.0"</span>
<span class="line">self.description = "A simple hello world plugin for QFurina"</span>
<span class="line">async def on_message(self, message):</span>
<span class="line">if message.content.strip().lower() == "/hello":</span>
<span class="line">await message.reply("Hello, World! I'm a QFurina plugin!")</span>
<span class="line">def on_load(self):</span>
<span class="line">print(f"{self.name} v{self.version} loaded successfully!")</span>
<span class="line">def on_unload(self):</span>
<span class="line">print(f"{self.name} unloaded successfully!")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="步骤-3-创建插件配置文件" tabindex="-1"><a class="header-anchor" href="#步骤-3-创建插件配置文件"><span>步骤 3：创建插件配置文件</span></a></h2>
<p>在 <code v-pre>hello_world</code> 目录中创建一个名为 <code v-pre>plugin.json</code> 的文件：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{</span>
<span class="line">"name": "Hello World",</span>
<span class="line">"version": "1.0.0",</span>
<span class="line">"description": "A simple hello world plugin for QFurina",</span>
<span class="line">"author": "Your Name",</span>
<span class="line">"main": "hello_world.py",</span>
<span class="line">"requirements": []</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="步骤-4-启用插件" tabindex="-1"><a class="header-anchor" href="#步骤-4-启用插件"><span>步骤 4：启用插件</span></a></h2>
<p>在 QFurina 的主配置文件 <code v-pre>config.json</code> 中，找到 <code v-pre>ENABLED_PLUGINS</code> 部分，添加你的插件名：
&quot;ENABLED_PLUGINS&quot;: [
&quot;hello_world&quot;,
// 其他已启用的插件...
]</p>
<h2 id="步骤-5-测试插件" tabindex="-1"><a class="header-anchor" href="#步骤-5-测试插件"><span>步骤 5：测试插件</span></a></h2>
<ol>
<li>重启 QFurina 或者使用插件重载命令：<code v-pre>/plugin reload hello_world</code></li>
<li>在与机器人的对话中输入 <code v-pre>/hello</code></li>
<li>机器人应该会回复 &quot;Hello, World! I'm a QFurina plugin!&quot;</li>
</ol>
<h2 id="进阶开发" tabindex="-1"><a class="header-anchor" href="#进阶开发"><span>进阶开发</span></a></h2>
<ol>
<li>
<p><strong>添加配置选项</strong>：
在 <code v-pre>plugin.json</code> 中添加配置选项，然后在插件中读取这些配置。</p>
</li>
<li>
<p><strong>使用数据库</strong>：
如果你的插件需要存储数据，可以使用 QFurina 提供的数据库接口。</p>
</li>
<li>
<p><strong>添加命令处理器</strong>：
实现 <code v-pre>on_command</code> 方法来处理特定的命令。</p>
</li>
<li>
<p><strong>响应事件</strong>：
实现其他事件处理方法，如 <code v-pre>on_member_join</code>、<code v-pre>on_group_message</code> 等。</p>
</li>
<li>
<p><strong>使用 QFurina API</strong>：
利用 QFurina 提供的 API 来实现更复杂的功能。</p>
</li>
</ol>
<h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2>
<ol>
<li><strong>错误处理</strong>：使用 try-except 块来捕获和处理异常。</li>
<li><strong>异步编程</strong>：尽可能使用异步函数来提高性能。</li>
<li><strong>文档</strong>：为你的函数和类添加清晰的文档字符串。</li>
<li><strong>测试</strong>：编写单元测试来确保你的插件功能正常。</li>
</ol>
<h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步"><span>下一步</span></a></h2>
<ul>
<li>查看 <RouteLink to="/plugins/api.html">插件 API 参考</RouteLink> 了解更多可用的 API 和事件。</li>
<li>浏览 <a href="https://github.com/syuchua/QFurina-plugins" target="_blank" rel="noopener noreferrer">社区插件仓库</a> 获取灵感。</li>
<li>在 <a href="https://github.com/syuchua/QFurina/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 上提出问题或分享你的插件。</li>
</ul>
<p>祝你开发愉快！</p>
</div></template>


