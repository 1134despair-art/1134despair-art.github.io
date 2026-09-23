const articleContent = {
  agent: {
    meta: "AI 产品 · 6 分钟阅读",
    title: "智能体产品，不止是把对话框放进系统",
    body: `
      <p>智能体真正进入业务系统后，用户面对的不是一个“会聊天的模型”，而是一条需要稳定完成任务的业务链路。产品经理的工作，也会从设计对话转向设计确定性。</p>
      <blockquote>模型负责理解与生成，产品机制负责让结果可用、可控、可追溯。</blockquote>
      <h3>先定义结果，而不是先定义对话</h3>
      <p>以会议创建为例，目标不是让用户与智能体聊得自然，而是把通知、附件和历史资料转成一组可提交的结构化字段。因此在方案阶段，我会先明确字段来源、必填条件、置信度和提交边界，再决定交互形态。</p>
      <h3>每个自动化动作都要有兜底</h3>
      <p>抽取失败怎么办？多个候选值如何选择？内容变化后是否重新生成？这些问题决定了产品能否进入真实生产环境。合理的做法通常包括失败提示、人工复核、原文定位、版本记录和操作日志。</p>
      <h3>把权限和审计放在第一版</h3>
      <p>企业场景中的“能做”与“允许做”是两件事。智能体读取了哪些资料、代表谁执行、结果由谁确认，都应在产品规则中明确，而不是上线前最后补一层权限判断。</p>
      <p><strong>我的判断：</strong>智能体产品的价值不在于替用户多说几句话，而在于减少一次业务任务中的信息搬运、重复确认和机械操作。</p>`
  },
  device: {
    meta: "设备产品 · 7 分钟阅读",
    title: "软硬件联动项目，需求边界如何画清楚",
    body: `
      <p>软硬件项目最常见的问题，并不是团队不努力，而是同一个“功能正常”在 App、服务端、固件和设备四方眼中有四种定义。</p>
      <blockquote>把一次操作写成完整状态迁移，比画十张静态页面更有用。</blockquote>
      <h3>用链路描述需求</h3>
      <p>以设备激活为例，至少要说明设备如何被发现、身份如何校验、授权从哪里获取、结果如何写回、失败后是否允许重试。每一段都要有发起方、响应方、超时规则和可观察状态。</p>
      <h3>区分设备状态与页面状态</h3>
      <p>页面显示“已连接”，不一定代表设备可执行指令。蓝牙连接、账号绑定、设备授权、固件兼容和业务可用应该是不同状态，混在一个字段里会让排障变得困难。</p>
      <h3>提前定义异常与恢复</h3>
      <p>现场网络不稳定、设备断电、指令重复和升级中断都不是边角情况。PRD 应明确幂等规则、断点策略、重试次数、错误码映射和售后处理入口。</p>
      <p><strong>我的判断：</strong>边界清晰不是把责任推给某一端，而是让每一端都知道自己要提供什么信号，下一端又依据什么继续。</p>`
  },
  prd: {
    meta: "B 端产品 · 5 分钟阅读",
    title: "一份能推进交付的 PRD，应该回答什么",
    body: `
      <p>B 端系统的复杂度很少来自页面数量，更多来自角色、规则和例外。只描述“页面上有什么”，通常不足以支撑研发、测试与验收。</p>
      <blockquote>好的 PRD 不是功能说明书，而是团队对业务规则达成一致的载体。</blockquote>
      <h3>谁在什么条件下做什么</h3>
      <p>先把角色、前置条件、触发动作和预期结果写清楚。一个功能如果无法放进这句话，往往说明场景还没有被真正理解。</p>
      <h3>字段、状态、权限、异常</h3>
      <p>这是我检查复杂需求的四个基本维度：数据从哪里来、状态如何流转、每个角色能看能做什么、链路失败后如何恢复。原型负责呈现，规则表和流程图负责消除歧义。</p>
      <h3>验收口径要与需求一起出现</h3>
      <p>如果上线前才讨论“怎样算完成”，范围一定会漂移。关键场景、边界值和异常路径都应该在评审时转成可验证的验收条件。</p>
      <p><strong>我的判断：</strong>文档的价值不在于篇幅，而在于它能否让不同岗位基于同一组事实做决定。</p>`
  }
};

const workSection = document.querySelector("#work");
const writingSection = document.querySelector("#writing");
if (workSection && writingSection) workSection.before(writingSection);

const root = document.documentElement;
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const themeButton = document.querySelector(".theme-toggle");
const header = document.querySelector(".site-header");
const progress = document.querySelector(".reading-progress span");
const dialog = document.querySelector("#article-dialog");
const dialogContent = document.querySelector("#dialog-content");
const toast = document.createElement("div");
toast.className = "toast";
toast.setAttribute("role", "status");
toast.setAttribute("aria-live", "polite");
document.body.append(toast);
let activeArticle = null;
let articleTrigger = null;
let toastTimer = null;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.dataset.theme = savedTheme;

function renderIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function updateThemeIcon() {
  const icon = themeButton.querySelector("i, svg");
  if (icon) {
    const replacement = document.createElement("i");
    replacement.dataset.lucide = root.dataset.theme === "dark" ? "sun" : "moon";
    replacement.setAttribute("aria-hidden", "true");
    icon.replaceWith(replacement);
    renderIcons();
  }
}

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "关闭导航" : "打开导航");
});

nav.addEventListener("click", () => {
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
});

themeButton.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", root.dataset.theme);
  updateThemeIcon();
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-button.active")?.classList.remove("active");
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      card.hidden = filter !== "all" && !card.dataset.category.split(" ").includes(filter);
    });
  });
});

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

async function copyArticleLink() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("文章链接已复制");
  } catch {
    showToast("复制失败，请从地址栏复制");
  }
}

function openArticle(key, updateUrl = true) {
  const article = articleContent[key];
  if (!article) return;
  activeArticle = key;
  dialogContent.innerHTML = `<p class="article-meta">${article.meta}</p><h2>${article.title}</h2>${article.body}<div class="article-actions"><button class="button button-secondary copy-link" type="button"><i data-lucide="link-2" aria-hidden="true"></i>复制文章链接</button></div>`;
  dialogContent.querySelector(".copy-link").addEventListener("click", copyArticleLink);
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  if (updateUrl) history.pushState({ article: key }, "", `#note-${key}`);
  renderIcons();
}

function closeArticle(updateUrl = true) {
  if (!dialog.open) return;
  dialog.close();
  activeArticle = null;
  if (updateUrl && window.location.hash.startsWith("#note-")) history.replaceState(null, "", "#writing");
  articleTrigger?.focus();
}

document.querySelectorAll(".article-open").forEach((button) => {
  button.addEventListener("click", () => {
    articleTrigger = button;
    openArticle(button.dataset.article);
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => closeArticle());
dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeArticle();
});
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) closeArticle();
});

window.addEventListener("popstate", () => {
  const match = window.location.hash.match(/^#note-(agent|device|prd)$/);
  if (match) openArticle(match[1], false);
  else closeArticle(false);
});

const observedSections = ["top", "writing", "work", "about"]
  .map((id) => document.querySelector(`#${id}`))
  .filter(Boolean);
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
}, { rootMargin: "-25% 0px -60%", threshold: [0, .2, .5] });
observedSections.forEach((section) => sectionObserver.observe(section));

const revealItems = document.querySelectorAll(".article-item, .project-card, .capability-grid > div, .experience-row");
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, { rootMargin: "0px 0px -8%", threshold: .08 });
revealItems.forEach((item) => {
  item.classList.add("reveal");
  revealObserver.observe(item);
});

function onScroll() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.transform = `scaleX(${ratio})`;
  header.classList.toggle("scrolled", window.scrollY > 12);
  if (window.scrollY < 120) {
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "#top"));
  }
}

window.addEventListener("scroll", onScroll, { passive: true });
document.querySelector("#year").textContent = new Date().getFullYear();
window.addEventListener("load", renderIcons);
updateThemeIcon();
onScroll();

const initialArticle = window.location.hash.match(/^#note-(agent|device|prd)$/);
if (initialArticle) openArticle(initialArticle[1], false);
