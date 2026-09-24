# 吴昊个人博客

一个无需构建即可部署的响应式产品实践型个人网站，聚焦 B 端产品、AI、IoT 软硬件协同和端到端交付。包含精选案例、全部作品、实践文章、深色主题、文章目录与 RSS。

## 本地预览

直接打开 `index.html`，或在目录中启动任意静态文件服务。

## 部署

将本目录内容发布到 `ruanyi.top` 和 `www.ruanyi.top` 对应站点根目录即可。建议将两个域名都指向同一份文件，并选择其中一个作为规范域名做 301 跳转。

## 内容维护

- 首页精选案例：编辑 `index.html` 中的 `.selected-case`
- 全部作品：编辑 `works.html` 中的 `.project-card`
- 案例详情：编辑 `cases/` 目录下对应的 HTML 文件
- 问题类型与工作方式：编辑 `index.html` 中的 `.problem-grid` 和 `.workflow-list`
- 文章内容：编辑 `script.js` 中的 `articleContent`
- 样式与主题：编辑 `styles-v2.css` 顶部的颜色变量
- SEO：新增页面时同步维护页面元数据和 `sitemap.xml`
- RSS：新增文章时同步维护 `rss.xml`
