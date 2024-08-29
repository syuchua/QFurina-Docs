import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'

export default defineUserConfig({

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'QFurina',
      description: '一个简单的QQ机器人后端框架，支持AI对话、绘图、语音、联网等功能以及支持自定义的插件系统',
    },
  },

  lang: 'zh-CN',
  title: 'QFurina',
  description: '一个简单的QQ机器人后端框架，支持AI对话、绘图、语音、联网等功能以及支持自定义的插件系统',
  
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { rel: 'canonical', href: 'https://qfurina.yuchu.me' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'syuchua/QFurina',
    docsRepo: 'syuchua/QFurina-Docs',
    docsBranch: 'main',
    docsDir: 'docs',

    navbar: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/' },
      { 
        text: '功能', 
        children: [
          { text: 'AI对话', link: '/features/ai-chat' },
          { text: '绘图', link: '/features/drawing' },
          { text: '语音', link: '/features/voice' },
          { text: '联网', link: '/features/networking' },
        ]
      },
      { text: '插件系统', link: '/plugins/' },
      { text: 'API参考', link: '/api/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            { text: 'QFurina 简介', link: '/guide/' },
            { text: '安装与配置', link: '/guide/installation' },
            { text: '基本使用', link: '/guide/usage' },
            {
              text: '平台对接',
              children: [
                { text: 'Llonebot', link: '/guide/platforms/llonebot' },
                { text: 'NapCat', link: '/guide/platforms/napcat' },
                { text: 'Lagrange', link: '/guide/platforms/lagrange' },
              ],
            },
          ],
        },
      ],
      '/features/': [
        {
          text: '功能详解',
          children: [
            { text: 'AI对话系统', link: '/features/ai-chat' },
            { text: '图像生成功能', link: '/features/drawing' },
            { text: '语音处理能力', link: '/features/voice' },
            { text: '网络连接与交互', link: '/features/networking' },
          ],
        },
      ],
      '/plugins/': [
        {
          text: '插件开发',
          children: [
            { text: '插件系统概述', link: '/plugins/' },
            { text: '创建你的第一个插件', link: '/plugins/development' },
            { text: '插件API参考', link: '/plugins/api' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API文档',
          children: [
            { text: 'QFurina 核心API', link: '/api/' },
            { text: 'QFurinaClient 客户端', link: '/api/client' },
            { text: 'QFurinaMessage 消息处理', link: '/api/message' },
            { text: 'QFurinaPlugin 插件接口', link: '/api/plugin' },
          ],
        },
      ],
    },

    editLink: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    contributors: false
    }),

  bundler: viteBundler(),
  base: '/',


  markdown: {
    headers: {
      level: [2, 3, 4]
    },
    code: {
      lineNumbers: true
    }
  },

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
      },
    }),
    copyCodePlugin({
      showInMobile: true,
    }),
    mediumZoomPlugin({}),
  ],
})