<template><div><h1 id="创建你的第一个-qfurina-插件" tabindex="-1"><a class="header-anchor" href="#创建你的第一个-qfurina-插件"><span>创建你的第一个 QFurina 插件</span></a></h1>
<p>本指南将带你一步步创建一个简单的 QFurina 插件。我们将创建一个 &quot;Hello World&quot; 插件，它会响应特定的命令并发送一条问候消息。</p>
<h2 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件"><span>前提条件</span></a></h2>
<ul>
<li>已安装 QFurina</li>
<li>基本的 Python 编程知识</li>
</ul>
<h2 id="步骤-1-创建插件目录" tabindex="-1"><a class="header-anchor" href="#步骤-1-创建插件目录"><span>步骤 1：创建插件目录</span></a></h2>
<p>在 QFurina 的 <code v-pre>plugins</code> 目录下创建一个新文件夹，命名为 <code v-pre>hello_world</code>：</p>
<div class="language-text line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-text"><code><span class="line"><span class="line"><span>QFurina/</span></span></span>
<span class="line"><span class="line"><span>└── plugins/</span></span></span>
<span class="line"><span class="line"><span>└── hello_world/</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="步骤-2-创建主插件文件" tabindex="-1"><a class="header-anchor" href="#步骤-2-创建主插件文件"><span>步骤 2：创建主插件文件</span></a></h2>
<p>要创建一个新插件，您需要：</p>
<ol>
<li>在 <code v-pre>plugins</code> 目录下创建一个新的文件夹。</li>
<li>在该文件夹中创建一个主 Python 文件（如 <code v-pre>example_plugin.py</code>）。</li>
<li>在主文件中定义一个继承自 <code v-pre>PluginBase</code> 的类。</li>
<li>使用 <code v-pre>@PluginBase.register</code> 装饰器注册您的插件。</li>
</ol>
<p>示例插件代码：
在 <code v-pre>hello_world</code> 目录中创建一个名为 <code v-pre>hello_world.py</code> 的文件：</p>
<div class="language-python line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-python"><code><span class="line"><span class="line"><span style="color:#F97583">from</span><span style="color:#E1E4E8"> app.plugin.plugin_base </span><span style="color:#F97583">import</span><span style="color:#E1E4E8"> PluginBase</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#B392F0">@PluginBase.register</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"example"</span><span style="color:#E1E4E8">)</span></span></span>
<span class="line"><span class="line"><span style="color:#F97583">class</span><span style="color:#B392F0"> ExamplePlugin</span><span style="color:#E1E4E8">(</span><span style="color:#B392F0">PluginBase</span><span style="color:#E1E4E8">):</span></span></span>
<span class="line"><span class="line"><span style="color:#F97583">    def</span><span style="color:#79B8FF"> __init__</span><span style="color:#E1E4E8">(self):</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">        super</span><span style="color:#E1E4E8">().</span><span style="color:#79B8FF">__init__</span><span style="color:#E1E4E8">()</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">        self</span><span style="color:#E1E4E8">.name </span><span style="color:#F97583">=</span><span style="color:#9ECBFF"> "Example Plugin"</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">        self</span><span style="color:#E1E4E8">.version </span><span style="color:#F97583">=</span><span style="color:#9ECBFF"> "1.0.0"</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">        self</span><span style="color:#E1E4E8">.description </span><span style="color:#F97583">=</span><span style="color:#9ECBFF"> "This is an example plugin"</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#F97583">    async</span><span style="color:#F97583"> def</span><span style="color:#B392F0"> on_message</span><span style="color:#E1E4E8">(self, message):</span></span></span>
<span class="line"><span class="line"><span style="color:#F97583">        return</span><span style="color:#9ECBFF"> "hello world!"</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#F97583">    async</span><span style="color:#F97583"> def</span><span style="color:#B392F0"> on_file_upload</span><span style="color:#E1E4E8">(self, file_path):</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">        # 处理文件上传的逻辑</span></span></span>
<span class="line"><span class="line"><span style="color:#F97583">        pass</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="步骤-3-创建插件配置文件" tabindex="-1"><a class="header-anchor" href="#步骤-3-创建插件配置文件"><span>步骤 3：创建插件配置文件</span></a></h2>
<p>在 <code v-pre>hello_world</code> 目录中创建一个名为 <code v-pre>plugin.json</code> 的文件并填写配置信息(如果用到)：</p>
<div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-json"><code><span class="line"><span class="line"><span style="color:#E1E4E8">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "api_url"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"https://example.com"</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF">   "api_key"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"your-key"</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8">}</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="步骤-4-启用插件" tabindex="-1"><a class="header-anchor" href="#步骤-4-启用插件"><span>步骤 4：启用插件</span></a></h2>
<p>在 QFurina 的主配置文件 <code v-pre>config.json</code> 中，找到 <code v-pre>ENABLED_PLUGINS</code> 部分，添加你的插件名：</p>
<div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre  class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8 language-json"><code><span class="line"><span class="line"><span style="color:#9ECBFF">   "ENABLED_PLUGINS"</span><span style="color:#E1E4E8">: [</span></span></span>
<span class="line"><span class="line"><span style="color:#9ECBFF">      "hello_world"</span><span style="color:#E1E4E8">,</span></span></span>
<span class="line"><span class="line"><span style="color:#6A737D">   // 其他已启用的插件...</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8">]</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="步骤-5-测试插件" tabindex="-1"><a class="header-anchor" href="#步骤-5-测试插件"><span>步骤 5：测试插件</span></a></h2>
<ol>
<li>重启 QFurina 或者使用插件重载命令：<code v-pre>/reload_plugin hello_world</code></li>
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
</ul>
<!-- - 浏览 [社区插件仓库](https://github.com/syuchua/QFurina-plugins) 获取灵感。 -->
<ul>
<li>在 <a href="https://github.com/syuchua/QFurina/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> 上提出问题或分享你的插件。</li>
</ul>
<p>祝你开发愉快！</p>
</div></template>


