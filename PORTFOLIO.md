# 上传说明 · Qianli Coins

| 指南要求 | 这个项目的处理 |
| --- | --- |
| 独立文件夹、英文命名 | `qianli-coins/`（仓库名建议 `qianli-coins`） |
| 页面和源代码 | `index.html` + `js/` + `css/` + `assets/`，全部纯静态自包含 |
| 资源上传、注意授权 | `assets/` 在；第三方动画库 `js/vendor/anime.umd.min.js` 已附 MIT 许可证 `anime.LICENSE.md`，来源见 `js/vendor/README.md` |
| README 建议上传 | 新增 `README.md` + 本 `PORTFOLIO.md` |
| node_modules / .env / 密钥 | **无需** node_modules；扫描确认无 `.env`、无密钥、无敏感文件 |
| 大型素材 → 另存、给链接 | 无大型素材；SVG/JS/CSS 总和小于 500 KB，直接随仓库上传 |

## 运行方式

直接用浏览器打开 `index.html`，或部署到任意静态托管空间。无构建、无依赖。

## 注意事项

- 本包由 WorkBuddy 线上部署目录整理而来，与线上临时网址 `https://abb1e69fb75f4b459891c629b8b2606e.app.workbuddy.host` 同源。
- 手机优先布局：电脑打开时保持居中的窄屏容器。
- 语言包为自包含 JSON，无外部 CDN 请求。
