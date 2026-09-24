const articleContent = {
  agent: {
    meta: "项目复盘 · AI 产品 · 2026.09.23 · 8 分钟阅读",
    title: "我怎么把会议智能体从“能对话”做成可交付流程",
    summary: "以真实会议项目为背景，复盘如何把场景、结构化回填、人工复核和多端联调组织成可交付流程。",
    related: [{ href: "./cases/shark.html", title: "鲨鱼妹妹设备服务体系", note: "查看多端业务与服务流程如何被组织成产品闭环" }],
    body: `
      <p>国家管网无纸化会议项目启动时，需求看起来像“做一个会议智能体”。如果顺着这句话往下画，很容易得到一个会回答问题的聊天框，却解决不了会议筹备、材料流转和纪要归档中的真实耗时。</p>
      <blockquote>这个项目真正要交付的不是一次对话，而是一条从信息进入系统到会议资料完成归档的业务链路。</blockquote>
      <h3>先把一句需求拆成 8 个业务场景</h3>
      <p>我先跟着会议全流程梳理角色和动作，把会议创建、通知识别、附件上传、材料摘要、纪要生成、人工复核、结果归档和日志审计拆成 8 个关键场景。每个场景都明确输入、输出、负责人和完成条件，避免团队把“AI 能做”误解成“产品已经可用”。</p>
      <h3>把非结构化材料变成可确认的字段</h3>
      <p>会议通知、附件和历史材料的写法并不统一。我在 PRD 中定义字段来源、必填条件、候选值、置信度和回填规则；系统可以识别和建议，但正式创建前必须让用户看到原文依据并确认。AI 负责减少录入，产品机制负责保证结果可信。</p>
      <h3>失败兜底与人工复核必须进入第一版</h3>
      <p>抽取失败、多个时间冲突、附件更新、权限不足都不是边角问题。我把失败提示、重新识别、人工修改、版本记录、权限校验和操作日志放进第一版范围，让每一次自动化都有可恢复路径，也让结果可以被追溯。</p>
      <h3>多端联调时，用同一份状态定义说话</h3>
      <p>项目同时涉及 Agent 平台、WESIS、weact、Java 后端和实时通道。我的工作不止是交付原型，而是推动各端对字段含义、状态变化、接口时机和异常返回形成一致理解，再据此组织联调与验收。</p>
      <h3>上线结果与复盘</h3>
      <p>项目最终完成会议通知与附件自动识别、结构化回填、材料 AI 摘要和纪要生成等关键流程，并形成可复用的多端协同方法。</p>
      <p><strong>我的判断：</strong>做 AI 产品时，应先定义业务结果、人工确认点和失败路径，再选择模型与交互。一个智能体真正进入生产环境的标志，不是它能回答多少问题，而是它能否稳定完成一项工作。</p>`
  },
  device: {
    meta: "IoT 实践 · 2026.09.23 · 9 分钟阅读",
    title: "一个软硬件结合 App，怎样从设备连接走到售后闭环",
    summary: "以软硬件项目为背景，说明为什么产品不能只画 App 页面，以及设备、软件、后台与服务之间的边界如何定义。",
    related: [
      { href: "./cases/shark.html", title: "鲨鱼妹妹设备服务体系", note: "IoT + App + 后台 + 售后" },
      { href: "./cases/fiber.html", title: "光纤互联 App", note: "专业设备 + App + 作业场景" },
      { href: "./cases/cycling.html", title: "蓝图骑行", note: "智能硬件 + App + 用户产品" }
    ],
    body: `
      <p>六马达熔接机设备管理项目最初可以被理解成“给设备配一个 App”。真正进入调研后，我发现用户面对的是一条更长的链路：设备被销售、激活、授权、连接、使用、升级，发生故障后还要进入售后。</p>
      <blockquote>软硬件产品不能只画手机页面。设备、App、后台和服务团队共同完成的，才是一项完整功能。</blockquote>
      <h3>先画清用户、设备与服务的关系</h3>
      <p>我从销售、激活、使用到售后逐段梳理，建立用户、设备、激活码、固件版本、熔接记录和售后订单之间的数据关系。这样做的目的，是先确定数据归属和业务责任，再决定每个页面展示什么。</p>
      <h3>连接成功不等于业务可用</h3>
      <p>在需求中，我把蓝牙连接、账号绑定、设备激活、授权校验、固件兼容和业务可用拆成不同状态。页面上的一个“已连接”无法覆盖这些差异；状态混在一起，用户无法判断问题，客服和研发也很难排查。</p>
      <h3>一次指令必须写成完整链路</h3>
      <p>以参数下发为例，我会明确谁发起、设备何时响应、数据如何回传、超时如何提示、重复操作是否允许，以及失败后从哪里恢复。这些规则被同步到 App、小程序、后台与设备侧，成为联调时共同使用的语言。</p>
      <h3>把售后放进产品主流程</h3>
      <p>设备异常不是产品之外的事情。故障信息、设备身份、使用记录和固件版本都应该跟随报修进入服务流程，用户能够看到处理进度，后台能够定位责任和历史。这样才从“能控制设备”走到“能服务设备”。</p>
      <h3>100+ 页面背后是状态与规则</h3>
      <p>项目最终完成 App、小程序和后台 100+ 页面逻辑，打通设备激活、授权校验、参数设置、固件发布和售后订单等核心流程，累计服务设备终端 2000+ 台。</p>
      <p><strong>我的判断：</strong>软硬件项目的边界不是一张职责表，而是每一端需要提供什么信号、下一端依据什么继续，以及异常时谁来恢复。页面只是这些规则的可视化结果。</p>`
  },
  prd: {
    meta: "B 端产品 · 2026.09.23 · 7 分钟阅读",
    title: "从售前到产品经理，我学会先把交付问题问清楚",
    summary: "从年处理 200+ 需求的售前经历出发，复盘如何把客户语言转成字段、状态、权限、异常和验收口径。",
    related: [
      { href: "./cases/shark.html", title: "鲨鱼妹妹设备服务体系", note: "查看复杂业务如何被拆成跨端方案" },
      { href: "./works.html", title: "全部作品", note: "浏览 7 个已公开的产品项目" }
    ],
    body: `
      <p>我不是从标准的产品助理路径进入产品岗位。前三年多，我在企业采购与政企数字化项目中做售前：听客户描述问题、评估能不能做、跟研发确认边界，再回到现场解释方案。</p>
      <blockquote>售前经历给我的最大影响，是写需求时会提前想到：客户为什么要它、团队怎样实现、最后凭什么验收。</blockquote>
      <h3>年处理 200+ 需求后，我不再急着画页面</h3>
      <p>在企业采购平台中，我每年承接和跟进 200+ 项需求。客户常用“增加一个按钮”“限制一下额度”描述目标，但真正需要确认的是业务角色、规则生效范围、历史数据、跨端一致性和失败后的处理方式。问题没问清楚，原型越快，返工越早。</p>
      <h3>把客户语言翻译成四类产品规则</h3>
      <p>后来我形成了固定的检查方式：字段从哪里来，状态怎样流转，角色具有什么权限，异常发生后如何恢复。原型负责让方案可见，流程图、规则表和 PRD 负责让团队对同一件事形成一致理解。</p>
      <h3>验收口径要和需求同时出现</h3>
      <p>电子签章、品类限额和设备管理项目都让我意识到，如果上线前才讨论“怎样算完成”，范围一定会漂移。我会在评审阶段把主流程、边界值、异常路径和跨端表现转成可验证条件，让测试与客户验收使用同一套口径。</p>
      <h3>产品经理不是需求的中转站</h3>
      <p>从售前转到产品经理后，我仍保留面向现场的工作方式，但责任更完整：除了理解和说明，还要做取舍、管理版本、推动研发测试协同，并对最终结果负责。我的价值不是把客户原话写进文档，而是把问题整理成团队能共同执行的决定。</p>
      <h3>我现在如何判断一份 PRD 是否够用</h3>
      <p>我会问四个问题：研发能否据此实现，测试能否据此验证，客户能否据此确认，未来出现问题时能否追溯当时的决定。只要其中一个答案是否定的，文档就还没有完成。</p>
      <p><strong>我的判断：</strong>产品文档的价值不在篇幅，而在于它能否让不同岗位基于同一组事实做决定，并把一次项目经验沉淀为下一次可以复用的方法。</p>`
  }
};

const articleOrder = ["agent", "device", "prd"];

const root = document.documentElement;
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const themeButton = document.querySelector(".theme-toggle");
const header = document.querySelector(".site-header");
const progress = document.querySelector(".reading-progress span");
const dialog = document.querySelector("#article-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogProgress = document.querySelector(".dialog-reading-progress span");
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
  if (!themeButton) return;
  const icon = themeButton.querySelector("i, svg");
  if (icon) {
    const replacement = document.createElement("i");
    replacement.dataset.lucide = root.dataset.theme === "dark" ? "sun" : "moon";
    replacement.setAttribute("aria-hidden", "true");
    icon.replaceWith(replacement);
    renderIcons();
  }
}

if (menuButton && nav) {
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
}

themeButton?.addEventListener("click", () => {
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
  if (!article || !dialog || !dialogContent || !dialogProgress) return;
  activeArticle = key;
  const articleIndex = articleOrder.indexOf(key);
  const previousKey = articleOrder[articleIndex - 1];
  const nextKey = articleOrder[articleIndex + 1];
  const relatedProjects = article.related.map((project) => `<a href="${project.href}"><strong>${project.title}</strong><span>${project.note}</span><i data-lucide="arrow-right" aria-hidden="true"></i></a>`).join("");
  dialogContent.innerHTML = `<p class="article-meta">${article.meta}</p><h2>${article.title}</h2><p class="article-summary">${article.summary}</p>${article.body}<aside class="article-related"><p class="section-kicker">Related Projects</p><h3>相关项目</h3><div>${relatedProjects}</div></aside><div class="article-actions"><button class="button button-secondary copy-link" type="button"><i data-lucide="link-2" aria-hidden="true"></i>复制文章链接</button><div class="article-pagination">${previousKey ? `<button type="button" data-open-article="${previousKey}"><span>上一篇</span><strong>${articleContent[previousKey].title}</strong></button>` : ""}${nextKey ? `<button type="button" data-open-article="${nextKey}"><span>下一篇</span><strong>${articleContent[nextKey].title}</strong></button>` : ""}</div></div>`;
  const headings = [...dialogContent.querySelectorAll(":scope > h3")];
  if (headings.length) {
    const toc = document.createElement("nav");
    toc.className = "article-toc";
    toc.setAttribute("aria-label", "文章目录");
    toc.innerHTML = `<strong>本文目录</strong><ol>${headings.map((heading, index) => {
      heading.id = `${key}-section-${index + 1}`;
      return `<li><a href="#${heading.id}">${heading.textContent}</a></li>`;
    }).join("")}</ol>`;
    dialogContent.querySelector(".article-summary").after(toc);
  }
  dialogContent.querySelector(".copy-link").addEventListener("click", copyArticleLink);
  dialogContent.querySelectorAll("[data-open-article]").forEach((button) => {
    button.addEventListener("click", () => openArticle(button.dataset.openArticle));
  });
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  dialogProgress.style.transform = "scaleX(0)";
  if (updateUrl) history.pushState({ article: key }, "", `#note-${key}`);
  renderIcons();
}

function closeArticle(updateUrl = true) {
  if (!dialog?.open) return;
  dialog.close();
  activeArticle = null;
  if (updateUrl && window.location.hash.startsWith("#note-")) history.replaceState(null, "", "#writing");
  articleTrigger?.focus();
}

dialog?.addEventListener("scroll", () => {
  const scrollable = dialog.scrollHeight - dialog.clientHeight;
  const ratio = scrollable > 0 ? dialog.scrollTop / scrollable : 0;
  if (dialogProgress) dialogProgress.style.transform = `scaleX(${ratio})`;
}, { passive: true });

document.querySelectorAll(".article-open").forEach((button) => {
  button.addEventListener("click", () => {
    articleTrigger = button;
    openArticle(button.dataset.article);
  });
});

document.querySelector(".dialog-close")?.addEventListener("click", () => closeArticle());
dialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeArticle();
});
dialog?.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) closeArticle();
});

window.addEventListener("popstate", () => {
  const match = window.location.hash.match(/^#note-(agent|device|prd)$/);
  if (!dialog) return;
  if (match) openArticle(match[1], false);
  else closeArticle(false);
});

const observedSections = ["top", "work", "writing", "about"]
  .map((id) => document.querySelector(`#${id}`))
  .filter(Boolean);
const navLinks = [...document.querySelectorAll(".site-nav a")];
const localNavLinks = navLinks.filter((link) => link.getAttribute("href")?.startsWith("#"));
if (localNavLinks.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    localNavLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-25% 0px -60%", threshold: [0, .2, .5] });
  observedSections.forEach((section) => sectionObserver.observe(section));
}

const revealItems = document.querySelectorAll(".article-item, .project-card, .selected-case, .problem-grid > article, .workflow-list > li, .experience-row");
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
  if (progress) progress.style.transform = `scaleX(${ratio})`;
  header?.classList.toggle("scrolled", window.scrollY > 12);
  if (window.scrollY < 120 && localNavLinks.length) {
    localNavLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "#top"));
  }
}

window.addEventListener("scroll", onScroll, { passive: true });
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
window.addEventListener("load", renderIcons);
updateThemeIcon();
onScroll();

const initialArticle = window.location.hash.match(/^#note-(agent|device|prd)$/);
if (initialArticle && dialog) openArticle(initialArticle[1], false);
