const articleContent = {
  agent: {
    title: "我怎么把会议智能体从“能对话”做成可交付流程",
    summary: "以真实会议项目为背景，复盘如何把场景、结构化回填、人工复核和多端联调组织成可交付流程。",
    author: "吴昊",
    category: "AI 产品 / 项目复盘",
    published: "2026.09.23",
    updated: "2026.09.24",
    reading: "13 分钟阅读",
    related: [{ href: "./cases/shark.html", title: "鲨鱼妹妹设备服务体系", note: "查看多端业务与服务流程如何被组织成产品闭环" }],
    body: `
      <h3>01 为什么“能聊天”还不够</h3>
      <p>无纸化会议项目启动时，客户当时提出的是“做一个会议智能体”。如果直接顺着这句话设计，很容易得到一个可以问答的聊天框，但会议创建、材料整理、纪要确认和结果归档仍然需要人工在多个系统之间来回处理。</p>
      <p>我后来发现，判断智能体是否可用，不能看它回答得像不像人，而要看它能否推动一项业务继续向前。对这个项目来说，真正的交付物是一条从材料进入系统到会议结果完成归档的业务链路。</p>
      <h3>02 原始业务场景</h3>
      <p>会前，工作人员收到通知和附件，要手动识别时间、地点、参会人和议题，再创建会议、整理材料；会中要形成记录；会后还要生成纪要、确认内容并归档。信息来源不统一，任何一次附件更新都可能让前面的录入失效。</p>
      <p>如果只增加一个问答入口，原来的工作步骤一个都不会减少。我先跟着会议全流程确认信息从哪里来、由谁确认、最终进入哪个系统。</p>
      <h3>03 真实用户是谁</h3>
      <p>这个产品并不是给所有参会人提供一个通用助手。高频用户是会议组织与材料处理人员，他们关心的是少录一次、少漏一个字段、在出错时知道如何修改；审核者关心原文依据和最终结果是否可追溯。</p>
      <p>用户角色确定后，产品目标也从“让 AI 更聪明”变成“减少重复录入，同时保留必要确认”。</p>
      <h3>04 把需求拆成 8 个核心场景</h3>
      <p>我把原始需求拆成会议创建、通知识别、附件上传、材料摘要、纪要生成、人工复核、结果归档和日志审计 8 个场景。每个场景都明确输入、输出、负责人和完成条件。</p>
      <p>这一步让研发发现，一次“自动创建会议”背后还包含文件解析、字段映射、权限校验和多端同步。团队不再用一句“模型识别”概括全部工作。</p>
      <h3>05 为什么需要结构化回填</h3>
      <p>会议通知和附件的写法并不统一，但业务系统需要稳定字段。我在 PRD 中定义字段来源、必填条件、候选值、置信度与回填规则，让 AI 的输出进入可编辑表单，而不是停留在一段自然语言里。</p>
      <p>系统同时展示原文依据。用户确认时间或参会人时，能够知道这一结果来自哪里，而不是只能选择相信或放弃整次识别。</p>
      <h3>06 AI 输出如何进入业务流程</h3>
      <p>识别结果不是终点。用户确认字段后，系统才创建会议，并把附件、摘要和后续任务关联到同一个会议对象。纪要生成后也要回到对应会议，经过确认再进入归档。</p>
      <p>我在方案中重点写清楚每一步的触发条件和回写对象，避免不同端各自保存一份“看起来相同”的结果。</p>
      <h3>07 失败怎么办</h3>
      <p>抽取失败、文件格式不支持、多个时间冲突、附件被替换和接口超时都不是边角问题。我把失败提示、重新识别、保留已填写内容和手动继续作为第一版范围。</p>
      <p>这个方案最后没有采用“识别失败后清空表单重新开始”的处理，因为它会让用户为系统错误重复工作。失败时保留可用结果，比追求一次全自动更重要。</p>
      <h3>08 人工如何接管</h3>
      <p>人工接管不是一个笼统的“可编辑”。我区分了识别前、回填后、正式提交前和归档前的确认点，并记录谁修改了什么。高置信度字段可以直接建议，关键信息仍由用户确认。</p>
      <p>这样做的取舍是多了一次确认，但换来了可追溯性，也让使用者愿意把 AI 放进正式工作。</p>
      <h3>09 多端如何联调</h3>
      <p>项目同时涉及 Agent 平台、会议系统、协同端、Java 后端和实时通道。我的工作不止是交付原型，还要推动各端对字段含义、状态变化、接口时机和异常返回形成一致理解。</p>
      <p>联调时我用同一份状态与验收清单逐项确认：谁发起、谁处理、完成后回写到哪里、超时后页面显示什么。问题因此能被定位到具体环节。</p>
      <h3>10 产品设计中的取舍</h3>
      <p>第一版没有追求覆盖所有文件和所有会议类型，而是先保证通知识别、结构化回填、材料摘要和纪要生成这几条主链可用。对于依据不足的结果，宁可要求人工补充，也不让系统用不确定内容直接提交。</p>
      <p>我的判断是，生产环境中的 AI 产品应先建立信任，再扩大自动化范围。</p>
      <h3>11 最终形成什么</h3>
      <p>项目最终形成从通知与附件进入、字段识别、人工确认、会议创建，到材料摘要、纪要生成与归档的连续流程。AI 不再是独立入口，而是被放在重复录入和内容整理最集中的节点上。</p>
      <blockquote>一个智能体真正进入生产环境的标志，不是它能回答多少问题，而是它能否稳定完成一项工作，并在失败时把工作交还给人。</blockquote>
      <h3>12 如果重新做一次</h3>
      <p>我会更早收集失败样本，把文件格式、字段缺失、时间冲突和权限问题作为场景库，而不是等联调后再补。同时会为每次识别保留更清楚的版本关系，让附件更新后哪些字段需要重新确认一目了然。</p>
      <p>我也会更早定义评估口径：不只看识别准确率，还看用户修改了多少字段、一次任务是否完成、失败后能否继续。这些指标更接近产品是否真的减少了工作。</p>
      <h3>我的判断</h3>
      <ol><li>AI 的输入必须包含来源、版本和业务上下文，否则结构化输出无法稳定回填。</li><li>可交付的输出应落到字段、状态或任务，单独一段生成文本很难继续推动业务。</li><li>关键信息需要人工确认，确认点应放在正式提交和归档之前，而不是让人从头复核全部内容。</li><li>失败处理要保留已经完成的工作，并允许手动继续；全自动不是比任务可恢复更高的目标。</li><li>会议结束后的纪要、任务与归档仍属于产品流程，智能体不能在“生成完成”处停止。</li></ol>`
  },
  device: {
    title: "一个软硬件结合 App，怎样从设备连接走到售后闭环",
    summary: "以软硬件项目为背景，说明为什么产品不能只画 App 页面，以及设备、软件、后台与服务之间的边界如何定义。",
    author: "吴昊",
    category: "IoT / 软硬件产品",
    published: "2026.09.23",
    updated: "2026.09.24",
    reading: "16 分钟阅读",
    related: [
      { href: "./cases/shark.html", title: "鲨鱼妹妹设备服务体系", note: "IoT + App + 后台 + 售后" },
      { href: "./cases/fiber.html", title: "光纤互联 App", note: "专业设备 + App + 作业场景" },
      { href: "./cases/cycling.html", title: "蓝图骑行", note: "智能硬件 + App + 用户产品" }
    ],
    body: `
      <h3>01 项目背景</h3>
      <p>六马达熔接机设备管理项目最初可以被理解成“给设备配一个 App”。真正进入调研后，我发现用户面对的是一条更长的链路：设备被销售、激活、授权、连接、使用、升级，发生故障后还要进入售后。</p>
      <p>任何一个环节只在某一端成立，用户都会遇到“明明已经连接却不能用”或“已经报修却查不到进度”。</p>
      <h3>02 为什么不能只设计 App</h3>
      <p>App 上的一个按钮，背后可能需要设备响应、服务端校验和后台记录。客户当时提出某个控制功能时，我不会只确认按钮放在哪里，而会继续问：设备能不能返回执行结果，超时后谁判断失败，后台是否需要留痕。</p>
      <blockquote>软硬件产品不能只画手机页面。设备、App、后台和服务团队共同完成的，才是一项完整功能。</blockquote>
      <h3>03 用户与设备是什么关系</h3>
      <p>我先画清用户、设备、经销商和服务人员之间的关系。同一台设备可能经历销售、激活、授权、转移和维修，账号当前能看到设备，不一定代表拥有全部控制权限。</p>
      <p>只有先确定关系由谁建立、何时失效、后台怎样追溯，页面上的“我的设备”才有可靠含义。</p>
      <h3>04 设备生命周期</h3>
      <p>我把设备从出厂、入库、销售、激活、使用、升级、故障到维修后的状态逐段梳理。每个阶段都记录触发动作、责任角色和下一个可到达状态。</p>
      <p>这份生命周期不是额外文档，它直接决定 App 显示什么、后台允许什么，以及售后拿到设备后怎样恢复服务。</p>
      <h3>05 绑定与授权</h3>
      <p>绑定解决“设备属于谁或谁可以看到”，授权解决“当前账号可以做什么”。早期方案把两者合在一起，研发发现经销商协助服务和用户自行使用会产生冲突，因此我将关系与权限拆开定义。</p>
      <p>这样既能保留设备归属，也能给服务角色必要的查看与处理能力。</p>
      <h3>06 设备状态</h3>
      <p>我把蓝牙连接、账号绑定、设备激活、授权校验、固件兼容和业务可用拆成不同状态。页面上的一个“已连接”无法覆盖这些差异。</p>
      <p>用户看到的不只是状态名称，还要看到影响和下一步：需要重新连接、补充授权、升级固件，还是联系服务人员。</p>
      <h3>07 数据回传</h3>
      <p>一次设备数据回传要明确数据由哪台设备、哪个账号、什么时间产生，服务端是否接收成功，App 展示的是实时值还是最近一次值。缺少这些上下文，数据就无法支持复查。</p>
      <p>以参数下发为例，我会写清谁发起、设备何时响应、数据怎样回传、重复操作是否允许，以及最终状态由哪一端确认。</p>
      <h3>08 异常与离线</h3>
      <p>弱网和离线不是统一的“网络错误”。App 断网、设备断连、服务端超时和指令未响应，对业务的影响不同。我在规则中分别定义提示、重试、保留内容和恢复入口。</p>
      <p>这个方案最后没有采用“失败后自动无限重试”，因为重复下发可能产生新的状态不一致。关键操作需要明确结果，无法确认时交给用户决定是否再次执行。</p>
      <h3>09 故障报修</h3>
      <p>设备异常不是产品之外的事情。我让故障信息、设备身份、使用记录和固件版本随报修一起进入服务流程，用户只补充现场现象和必要凭证。</p>
      <p>这样售后收到的不是一句“设备坏了”，而是一组可以用于定位的上下文。</p>
      <h3>10 售后服务</h3>
      <p>报修提交后，用户还需要知道是否受理、当前由谁处理、是否需要补充信息和最终如何完成。服务状态必须回到 App，而不是停留在后台或线下沟通中。</p>
      <p>我后来发现，售后闭环也是产品可信度的一部分：设备越专业，异常后的可解释与可追踪越重要。</p>
      <h3>11 后台如何承接</h3>
      <p>后台不仅是数据列表，它要承接设备台账、用户关系、授权、固件、异常和工单。每个后台动作都需要明确是否影响 App，以及是否会改变设备可用状态。</p>
      <p>运营人员修改关系或发布固件时，系统要提供范围确认和结果记录，避免一次后台操作让用户端出现无法解释的变化。</p>
      <h3>12 App、设备与后台如何协同</h3>
      <p>我用“发起端、判断端、执行端、记录端”拆解跨端流程。App 发起不代表设备已执行，设备返回也不代表后台已记录；只有四个环节对齐，一项操作才算完成。</p>
      <p>这套方式也用于联调。研发不再只说某个接口已经通，而是共同确认整条状态链是否能走完。</p>
      <h3>13 产品设计中的取舍</h3>
      <p>设备参数并非越多越好。对用户没有明确行动意义、或误操作风险较高的参数，我选择只展示或放在受控入口中。固件升级也不与日常控制并列，而是在版本影响业务可用时提高优先级。</p>
      <p>我的判断是，专业不等于把所有技术能力暴露出来，而是让正确的人在正确状态下完成正确操作。</p>
      <h3>14 最终落地</h3>
      <p>项目最终打通设备激活、授权校验、参数设置、固件发布和售后订单等核心流程，形成 App、小程序、后台与设备侧共同参与的产品体系，累计服务设备终端 2000+ 台。</p>
      <p>这次工作让我确认：页面只是状态与规则的可视化结果，跨端一致才是软硬件产品真正的交付。</p>
      <h3>15 项目复盘</h3>
      <p>如果重新做一次，我会在第一轮需求阶段就建立完整的设备状态字典和异常样本库，并要求每个关键指令都同时给出成功、失败、未知和恢复路径。</p>
      <p>我也会更早让售后参与评审。很多看似低频的故障信息，实际上决定了产品能否快速定位问题，也决定了用户是否愿意继续使用这套设备。</p>
      <h3>我的判断</h3>
      <ol><li>设备状态只有能回答“是否影响使用、下一步做什么”时，才是对用户有价值的信息。</li><li>绑定、连接、激活、授权和业务可用必须分别定义，不能被一个“在线”状态替代。</li><li>一次设备操作要同时确认发起、执行、回传和记录，任何一端完成都不等于业务完成。</li><li>设备发生异常后，用户需要的是带上下文的恢复路径，因此设备产品最终都会进入服务处理。</li><li>售后信息应在产品设计阶段参与状态与字段定义，而不是上线后再补一个客服入口。</li></ol>`
  },
  prd: {
    title: "从售前到产品经理，我学会先把交付问题问清楚",
    summary: "从年处理 200+ 需求的售前经历出发，复盘如何把客户语言转成字段、状态、权限、异常和验收口径。",
    author: "吴昊",
    category: "B 端产品 / 职业实践",
    published: "2026.09.23",
    updated: "2026.09.24",
    reading: "12 分钟阅读",
    related: [
      { href: "./cases/shark.html", title: "鲨鱼妹妹设备服务体系", note: "查看复杂业务如何被拆成跨端方案" },
      { href: "./works.html", title: "全部作品", note: "浏览 7 个已公开的产品项目" }
    ],
    body: `
      <h3>01 我为什么从售前进入产品</h3>
      <p>我不是从标准的产品助理路径进入产品岗位。前三年多，我在企业采购与政企数字化项目中做售前：听客户描述问题、评估能不能做、跟研发确认边界，再回到现场解释方案。</p>
      <p>我逐渐发现，自己最想继续追下去的不是方案讲得是否完整，而是这个问题到底应该怎样被做成产品，以及交付后用户是否真的能用。</p>
      <h3>02 售前时期最常遇到的问题</h3>
      <p>客户经常从结果描述需求：“增加一个按钮”“做一个审批”“限制一下额度”。这些话有明确诉求，但还不足以进入研发。按钮由谁点击、审批对象是什么、额度按人还是按组织生效，都会让方案完全不同。</p>
      <p>在企业采购平台中，我每年承接和跟进 200+ 项需求。返工最多的往往不是复杂功能，而是大家以为已经理解的那一句话。</p>
      <h3>03 客户说“我要一个系统”时</h3>
      <p>我不会先问系统要几个菜单，而会先问现在的工作怎样完成、哪里最容易出错、为什么原来的方式不能继续。客户说需要一个设备管理系统时，真实问题可能是找不到设备、责任人不清，或售后无法追踪。</p>
      <p>只有具体问题被确认，系统边界才开始出现。</p>
      <h3>04 以前我是怎么理解需求的</h3>
      <p>早期我也会尽快画原型，希望用页面推动沟通。结果是页面越具体，大家越容易讨论按钮位置，却忽略规则还没有确定。研发发现边界不清时，方案已经看起来接近完成，修改成本反而更高。</p>
      <p>我后来发现，原型不是需求澄清的替代品。它适合验证已经形成的判断，不适合掩盖尚未回答的问题。</p>
      <h3>05 后来我开始问什么</h3>
      <p>我形成了一套固定追问：谁在什么情况下发起，输入从哪里来，状态怎样变化，谁可以查看和处理，失败后如何恢复，最后用什么标准确认完成。</p>
      <p>这些问题会被整理成流程、字段、状态、权限、异常和验收条件。页面只是把它们呈现出来。</p>
      <h3>06 用户是谁</h3>
      <p>“企业用户”不是一个可以直接设计的角色。同一个系统里，申请人关心能否快速提交，审批人关心风险与依据，运营人员关心批量处理，管理员关心规则配置。</p>
      <p>如果角色没有拆开，一个页面就会试图服务所有人，最后每个人都需要绕路。</p>
      <h3>07 谁真正使用</h3>
      <p>提出需求的人、决定采购的人和每天操作的人可能不是同一批人。我会分别确认决策者希望看到什么结果，管理者怎样控制过程，一线用户实际需要完成什么动作。</p>
      <p>售前经历让我习惯去现场找真实使用者，而不是只把会议中声音最大的人当成唯一用户。</p>
      <h3>08 什么时候使用</h3>
      <p>同一个功能在办公室批量处理和在现场手机操作，设计会完全不同。我会问使用频率、设备环境、网络条件、前后步骤和时间压力。</p>
      <p>这些信息决定入口优先级、默认值、是否允许暂存，以及用户能承受多少确认步骤。</p>
      <h3>09 异常怎么处理</h3>
      <p>需求评审时最容易被省略的是异常：审批人离职怎么办，额度规则变化如何处理历史订单，设备离线时状态显示什么。主流程可以画得很顺，但真实项目总会进入这些边界。</p>
      <p>我会要求异常不仅有提示，还要有责任人和恢复路径。无法恢复的错误信息，对用户没有帮助。</p>
      <h3>10 最后怎么验收</h3>
      <p>电子签章、品类限额和设备管理项目都让我意识到，如果上线前才讨论“怎样算完成”，范围一定会漂移。我会在评审阶段把主流程、边界值、异常路径和跨端表现转成可验证条件。</p>
      <p>研发据此实现，测试据此验证，客户也用同一套口径确认。验收不是项目最后新增的一步，而是需求定义的一部分。</p>
      <h3>11 售前经历对产品工作的影响</h3>
      <p>从售前转到产品经理后，我仍保留面向现场的工作方式，但责任更完整：除了理解和说明，还要做取舍、管理版本、推动研发测试协同，并对最终结果负责。</p>
      <p>我写 PRD 时会同时问四个问题：研发能否实现，测试能否验证，客户能否确认，未来出现问题时能否追溯当时的决定。</p>
      <h3>12 现在我怎么看产品经理这份工作</h3>
      <p>产品经理不是客户与研发之间的需求中转站。我的价值不是把客户原话写进文档，而是判断哪些问题值得解决、怎样解决，以及哪些事情不应该进入当前版本。</p>
      <blockquote>产品文档的价值不在篇幅，而在于它能否让不同岗位基于同一组事实做决定，并把一次项目经验沉淀为下一次可以复用的方法。</blockquote>
      <p>如果重新走一次这条路径，我仍会保留售前阶段形成的习惯：先去理解真实现场，再谈产品应该长什么样。</p>
      <h3>我的判断</h3>
      <ol><li>售前阶段让我先关注客户是否接受方案，进入产品岗位后，我还要对用户能否完成任务和系统能否持续运行负责。</li><li>客户原话是理解问题的入口，不是可以直接交给研发的需求；角色、规则和边界仍需要产品经理判断。</li><li>原型适合验证已经形成的方案，不能替代对字段、状态、权限和异常的澄清。</li><li>验收口径应在需求阶段确定，它会反向暴露范围是否清楚、异常是否有归属。</li><li>我现在衡量需求质量的方式，是研发能否实现、测试能否验证、客户能否确认，以及后续能否追溯。</li></ol>`
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
  dialogContent.innerHTML = `<p class="article-meta">${article.category} · ${article.reading}</p><h2>${article.title}</h2><dl class="article-byline"><div><dt>作者</dt><dd>${article.author}</dd></div><div><dt>发布</dt><dd>${article.published}</dd></div><div><dt>更新</dt><dd>${article.updated}</dd></div><div><dt>分类</dt><dd>${article.category}</dd></div></dl><p class="article-summary">${article.summary}</p>${article.body}<aside class="article-related"><p class="section-kicker">Related Projects</p><h3>相关项目</h3><div>${relatedProjects}</div></aside><div class="article-actions"><button class="button button-secondary copy-link" type="button"><i data-lucide="link-2" aria-hidden="true"></i>复制文章链接</button><div class="article-pagination">${previousKey ? `<button type="button" data-open-article="${previousKey}"><span>上一篇</span><strong>${articleContent[previousKey].title}</strong></button>` : ""}${nextKey ? `<button type="button" data-open-article="${nextKey}"><span>下一篇</span><strong>${articleContent[nextKey].title}</strong></button>` : ""}</div></div>`;
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

const resumeDownloadLink = document.querySelector("[data-resume-download]");
if (resumeDownloadLink && /MicroMessenger/i.test(navigator.userAgent)) {
  resumeDownloadLink.removeAttribute("download");
  resumeDownloadLink.href = "./resume.html";
  resumeDownloadLink.title = "在微信内预览简历";
}
