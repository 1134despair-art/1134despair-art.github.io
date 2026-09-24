# 吴昊个人博客

一个无需构建即可部署的响应式个人产品作品集与实践博客，聚焦 B 端产品、AI 智能体、IoT 软硬件协同和端到端交付。包含真实项目复盘、在线作品、深色主题、文章目录与 RSS。

## 本地预览

直接打开 `index.html`，或在目录中启动任意静态文件服务。

## 部署

将本目录内容发布到 `ruanyi.top` 和 `www.ruanyi.top` 对应站点根目录即可。建议将两个域名都指向同一份文件，并选择其中一个作为规范域名做 301 跳转。

## 内容维护

- 项目卡片：编辑 `index.html` 中的 `.project-card`
- 内容栏目：编辑 `index.html` 中的 `.pillar-list`
- 文章内容：编辑 `script.js` 中的 `articleContent`
- 样式与主题：编辑 `styles-v2.css` 顶部的颜色变量
- RSS：新增文章时同步维护 `rss.xml`
