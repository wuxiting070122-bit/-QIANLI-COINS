# 千里铜钱 · Qianli Coins

手机优先的铜钱占卜与文化探索小应用。以周易六十四卦为核心，将起卦、卦辞解读、本地文化知识、共读讨论与足迹记录整合在一个底部 tab 的 SPA 中。

## 预览

直接用浏览器打开 `index.html` 即可，推荐手机模式或真机访问。默认语言为英文，可在设置切换中文。

## 技术栈

- 纯前端：HTML5 + CSS3 + 原生 JavaScript
- 本地数据：六十四卦、文化词条、足迹全部内嵌在 JS 中
- 动画：Anime.js v4.5.0 MIT，已本地打包在 `js/vendor/`
- 无后端、无构建步骤、无外部 CDN

## 文件结构

```
qianli-coins/
├── index.html          # 入口
├── style.css           # 主样式
├── culture.css         # 文化页样式
├── studio.css          # 起卦/铜钱动画样式
├── motion.css          # 交互动效
├── original-art.css    # 原创视觉补充
├── icon.svg            # 站点图标
├── js/
│   ├── boot.js         # 启动、路由、语言包加载
│   ├── app.js          # 主应用逻辑
│   ├── engine.js       # 起卦引擎
│   ├── hexagrams.js    # 卦象数据
│   ├── journey.js      # 足迹/本地记忆
│   ├── knowledge.js    # 文化知识库
│   ├── motion.js       # 动画封装
│   ├── studio.js       # 铜钱投掷 UI
│   └── locales/        # 中英文语言包
│       └── en/
└── assets/
    └── qianli-round-logo.svg
```

## 资源说明

- `js/vendor/anime.umd.min.js` 与 `anime.LICENSE.md` 来自 [Anime.js](https://github.com/juliangarnier/anime)，MIT 许可证。
- 图标与 SVG 为项目原创。

## 部署

将本目录整体上传至任意静态托管空间，访问平台提供的 HTTPS 链接，用手机打开检查。若希望直接跳到铜钱欢迎页，分享链接末尾加 `/#home`。
