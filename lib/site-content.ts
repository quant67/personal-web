export type LocalizedText = {
  zh: string;
  en: string;
};

export type Locale = "zh" | "en";

export type AccentTone = "accent" | "secondary" | "tertiary" | "quaternary";

export type IconKey =
  | "sparkles"
  | "rocket"
  | "code"
  | "book"
  | "github"
  | "mail"
  | "globe";

type LinkLabel = {
  href: string;
  label: LocalizedText;
  ariaLabel: LocalizedText;
};

type SectionHeadingContent = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
};

export type SiteContent = {
  seo: {
    title: string;
    description: LocalizedText;
  };
  brand: {
    name: LocalizedText;
  };
  navigationAriaLabel: LocalizedText;
  navigation: Array<{
    label: LocalizedText;
    href: string;
  }>;
  hero: {
    badge: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    primaryCta: LinkLabel;
    secondaryCta: LinkLabel;
    highlights: Array<{
      label: LocalizedText;
      value: string;
    }>;
    figure: {
      label: LocalizedText;
      status: LocalizedText;
      note: LocalizedText;
      tags: LocalizedText[];
    };
  };
  keywords: {
    heading: LocalizedText;
    items: LocalizedText[];
  };
  openSourceProjects: {
    heading: SectionHeadingContent;
    items: Array<{
      icon: IconKey;
      tone: AccentTone;
      title: LocalizedText;
      summary: LocalizedText;
      metric: LocalizedText;
      stack: LocalizedText;
      href: string;
      ariaLabel: LocalizedText;
    }>;
  };
  experiments: {
    heading: SectionHeadingContent;
    items: Array<{
      icon: IconKey;
      tone: AccentTone;
      label: LocalizedText;
      title: LocalizedText;
      summary: LocalizedText;
      highlights: LocalizedText[];
      details: Array<{
        title: LocalizedText;
        body: LocalizedText;
      }>;
      href: string;
      ariaLabel: LocalizedText;
    }>;
  };
  writing: {
    heading: SectionHeadingContent;
    items: Array<{
      icon: IconKey;
      tone: AccentTone;
      category: LocalizedText;
      title: LocalizedText;
      summary: LocalizedText;
      meta: LocalizedText;
      href?: string;
      ariaLabel: LocalizedText;
    }>;
  };
  socialLinks: {
    heading: SectionHeadingContent;
    items: Array<{
      icon: IconKey;
      tone: AccentTone;
      kind: LocalizedText;
      title: LocalizedText;
      description: LocalizedText;
      cta: LocalizedText;
      href: string;
      ariaLabel: LocalizedText;
    }>;
  };
  ui: {
    skipToContent: LocalizedText;
    languageToggleLabel: LocalizedText;
    switchToChinese: LocalizedText;
    switchToEnglish: LocalizedText;
    visitProject: LocalizedText;
    visitExperiment: LocalizedText;
    readArticle: LocalizedText;
    comingSoon: LocalizedText;
  };
  footerNote: {
    heading: LocalizedText;
    body: LocalizedText;
    backToTop: LocalizedText;
  };
};

export const siteContent = {
  seo: {
    title: "Playful Geometric Personal Homepage",
    description: {
      zh: "一个用 playful geometric 设计语言搭建的双语个人品牌主页，展示项目、文章和公开构建轨迹。",
      en: "A bilingual personal homepage built with a playful geometric system to showcase projects, writing, and public building.",
    },
  },
  brand: {
    name: {
      zh: "实验中的个人主页",
      en: "Playful Web",
    },
  },
  navigationAriaLabel: {
    zh: "首页导航",
    en: "Homepage navigation",
  },
  navigation: [
    {
      label: {
        zh: "项目",
        en: "Projects",
      },
      href: "#projects",
    },
    {
      label: {
        zh: "实验",
        en: "Experiments",
      },
      href: "#experiments",
    },
    {
      label: {
        zh: "文章",
        en: "Writing",
      },
      href: "#writing",
    },
    {
      label: {
        zh: "联系",
        en: "Connect",
      },
      href: "#connect",
    },
  ],
  hero: {
    badge: {
      zh: "独立构建者 / 创作者",
      en: "Indie builder / public thinker",
    },
    title: {
      zh: "把想法做成有形的产品、工具和长期作品",
      en: "I turn curious ideas into products, tools, and long-form internet artifacts.",
    },
    description: {
      zh: "我偏爱把复杂问题拆成清晰体验，把过程公开，把作品做得既能用又有记忆点。这里是一个内容型首页，集中展示我的开源项目、在做实验、写作主题和公开构建入口。",
      en: "I like turning messy ideas into clear experiences, building in public, and shipping things that feel useful and memorable. This page is a content-rich front door to my open-source work, current experiments, writing themes, and public touchpoints.",
    },
    primaryCta: {
      href: "#projects",
      label: {
        zh: "查看代表项目",
        en: "Explore projects",
      },
      ariaLabel: {
        zh: "跳转到代表项目区域",
        en: "Jump to the featured projects section",
      },
    },
    secondaryCta: {
      href: "#connect",
      label: {
        zh: "联系我",
        en: "Say hello",
      },
      ariaLabel: {
        zh: "跳转到联系区域",
        en: "Jump to the connect section",
      },
    },
    highlights: [
      {
        label: {
          zh: "开源项目",
          en: "Open-source builds",
        },
        value: "12+",
      },
      {
        label: {
          zh: "公开笔记",
          en: "Public notes",
        },
        value: "48",
      },
      {
        label: {
          zh: "长期实验",
          en: "Active experiments",
        },
        value: "03",
      },
    ],
    figure: {
      label: {
        zh: "构建偏好",
        en: "Build mode",
      },
      status: {
        zh: "持续更新中",
        en: "Shipping weekly",
      },
      note: {
        zh: "内容可以有温度，系统可以很清晰，界面也不必长得像每一个模板网站。",
        en: "Content can feel warm, systems can stay sharp, and interfaces do not need to look like every other template on the internet.",
      },
      tags: [
        {
          zh: "AI 工具",
          en: "AI tooling",
        },
        {
          zh: "个人系统",
          en: "Personal systems",
        },
        {
          zh: "公开构建",
          en: "Build in public",
        },
      ],
    },
  },
  keywords: {
    heading: {
      zh: "主题关键词",
      en: "Theme keywords",
    },
    items: [
      {
        zh: "产品思维",
        en: "Product thinking",
      },
      {
        zh: "AI 工作流",
        en: "AI workflows",
      },
      {
        zh: "工具设计",
        en: "Tool design",
      },
      {
        zh: "写作系统",
        en: "Writing systems",
      },
      {
        zh: "公开构建",
        en: "Build in public",
      },
      {
        zh: "个人品牌",
        en: "Personal brand",
      },
      {
        zh: "小而美产品",
        en: "Small bets",
      },
      {
        zh: "实验驱动",
        en: "Experiment-driven",
      },
    ],
  },
  openSourceProjects: {
    heading: {
      eyebrow: {
        zh: "精选公开作品",
        en: "Selected open source",
      },
      title: {
        zh: "我愿意长期维护、反复打磨的项目",
        en: "Projects I keep refining because they solve problems I still care about.",
      },
      description: {
        zh: "这一组更像是“可验证的工作方式”：不是只展示截图，而是把问题拆法、执行习惯和产品判断都体现在产物里。",
        en: "This set acts as a proof of working style. Instead of just polished screenshots, each project shows how I frame problems, ship features, and refine product decisions over time.",
      },
    },
    items: [
      {
        icon: "code",
        tone: "accent",
        title: {
          zh: "Prompt Atlas",
          en: "Prompt Atlas",
        },
        summary: {
          zh: "一个帮助创作者整理、测试与迭代提示词的可视化工作台，把零散灵感整理成可复用的系统。",
          en: "A visual workspace for organizing, testing, and iterating on prompts so scattered ideas become reusable systems.",
        },
        metric: {
          zh: "模块化 Prompt 库",
          en: "Modular prompt library",
        },
        stack: {
          zh: "React / TypeScript / AI UX",
          en: "React / TypeScript / AI UX",
        },
        href: "https://github.com/your-handle/prompt-atlas",
        ariaLabel: {
          zh: "打开 Prompt Atlas 项目仓库",
          en: "Open the Prompt Atlas repository",
        },
      },
      {
        icon: "rocket",
        tone: "secondary",
        title: {
          zh: "Signal Garden",
          en: "Signal Garden",
        },
        summary: {
          zh: "一个个人信号面板，用来追踪创作节奏、内容反馈和微型实验，把“感觉”变成可以回看的记录。",
          en: "A personal signal dashboard for tracking creative rhythm, audience feedback, and tiny experiments over time.",
        },
        metric: {
          zh: "构建中仪表盘",
          en: "Live dashboard",
        },
        stack: {
          zh: "Next.js / Data Viz / Notes",
          en: "Next.js / Data viz / Notes",
        },
        href: "https://github.com/your-handle/signal-garden",
        ariaLabel: {
          zh: "打开 Signal Garden 项目仓库",
          en: "Open the Signal Garden repository",
        },
      },
      {
        icon: "sparkles",
        tone: "tertiary",
        title: {
          zh: "Build Notes",
          en: "Build Notes",
        },
        summary: {
          zh: "面向公开构建的写作与归档系统，用短篇笔记记录每一次迭代、推翻与复盘。",
          en: "A writing and archiving system for public building that captures each iteration, reversal, and retrospective in short notes.",
        },
        metric: {
          zh: "公开构建归档",
          en: "Public build archive",
        },
        stack: {
          zh: "Content / MDX / Workflow",
          en: "Content / MDX / Workflow",
        },
        href: "https://github.com/your-handle/build-notes",
        ariaLabel: {
          zh: "打开 Build Notes 项目仓库",
          en: "Open the Build Notes repository",
        },
      },
    ],
  },
  experiments: {
    heading: {
      eyebrow: {
        zh: "现在在做什么",
        en: "Selected experiments",
      },
      title: {
        zh: "一些还在长大的产品方向",
        en: "Ideas in motion that are still changing shape as I learn from them.",
      },
      description: {
        zh: "这些不是“完成品橱窗”，而是我当前愿意继续下注的问题空间。它们展示的是方向感、判断力，以及我对长期产品的耐心。",
        en: "These are not finished-product trophies. They are current bets that reveal where my attention is going and what kinds of long-term product questions I want to keep exploring.",
      },
    },
    items: [
      {
        icon: "globe",
        tone: "secondary",
        label: {
          zh: "实验一",
          en: "Experiment one",
        },
        title: {
          zh: "Orbit Studio",
          en: "Orbit Studio",
        },
        summary: {
          zh: "一个面向个人品牌与内容系统的小型工作室框架，把站点、内容、社交分发和轻量转化做成一个更顺手的闭环。",
          en: "A compact studio system for personal brands that connects site, content, distribution, and lightweight conversion into one smoother loop.",
        },
        highlights: [
          {
            zh: "内容中台",
            en: "Content hub",
          },
          {
            zh: "轻量 CRM",
            en: "Light CRM",
          },
          {
            zh: "多渠道分发",
            en: "Multi-channel",
          },
        ],
        details: [
          {
            title: {
              zh: "想解决的问题",
              en: "Core problem",
            },
            body: {
              zh: "大多数个人站只是展示面，缺少和内容、关系、转化之间的真实连接。",
              en: "Most personal sites act like static showcases without a real connection to content, relationships, and conversion.",
            },
          },
          {
            title: {
              zh: "当前阶段",
              en: "Current phase",
            },
            body: {
              zh: "正在探索更轻量的内容后台与更自然的关注者入口，不急着产品化，先找到正确工作流。",
              en: "I am exploring a lighter content backend and more natural follower entry points before turning it into a product.",
            },
          },
        ],
        href: "https://github.com/your-handle/orbit-studio",
        ariaLabel: {
          zh: "打开 Orbit Studio 实验项目",
          en: "Open the Orbit Studio experiment",
        },
      },
      {
        icon: "sparkles",
        tone: "accent",
        label: {
          zh: "实验二",
          en: "Experiment two",
        },
        title: {
          zh: "Second Brain Playground",
          en: "Second Brain Playground",
        },
        summary: {
          zh: "一个把阅读、摘录、思考和执行动作重新接起来的个人知识实验，希望让知识系统不再只是收藏夹，而是能推动下一步行动。",
          en: "A personal knowledge experiment that reconnects reading, extraction, reflection, and execution so a second brain can drive action instead of turning into a graveyard.",
        },
        highlights: [
          {
            zh: "检索体验",
            en: "Retrieval",
          },
          {
            zh: "行动建议",
            en: "Action prompts",
          },
          {
            zh: "长期记忆",
            en: "Long memory",
          },
        ],
        details: [
          {
            title: {
              zh: "想解决的问题",
              en: "Core problem",
            },
            body: {
              zh: "很多知识管理系统很会收纳，却不擅长让信息在正确时间重新出现。",
              en: "Most knowledge systems are good at storing information but weak at surfacing it at the moment it actually matters.",
            },
          },
          {
            title: {
              zh: "当前阶段",
              en: "Current phase",
            },
            body: {
              zh: "正在测试检索方式、语义分层和轻提醒机制，重点不是大而全，而是刚好够用。",
              en: "I am testing retrieval models, semantic layers, and light reminder mechanics with an emphasis on enoughness over breadth.",
            },
          },
        ],
        href: "https://github.com/your-handle/second-brain-playground",
        ariaLabel: {
          zh: "打开 Second Brain Playground 实验项目",
          en: "Open the Second Brain Playground experiment",
        },
      },
    ],
  },
  writing: {
    heading: {
      eyebrow: {
        zh: "写作与观点",
        en: "Writing",
      },
      title: {
        zh: "把构建过程写下来，也把判断写清楚",
        en: "Writing that captures both the making and the thinking behind it.",
      },
      description: {
        zh: "我更偏爱“可复用的思路”而不是纯情绪输出，所以文章会围绕系统、产品、内容与个人增长的交叉地带展开。",
        en: "I prefer publishing reusable thinking rather than pure reaction, so the writing lives at the intersection of systems, products, content, and personal growth.",
      },
    },
    items: [
      {
        icon: "book",
        tone: "tertiary",
        category: {
          zh: "系统设计",
          en: "Systems",
        },
        title: {
          zh: "为什么个人品牌需要一个“作品操作系统”",
          en: "Why a personal brand needs an operating system, not just a landing page",
        },
        summary: {
          zh: "写给想把内容、产品和机会连接起来的人，核心是如何从“单次输出”过渡到“可复利的作品结构”。",
          en: "For creators who want to connect content, products, and opportunities by moving from one-off outputs to a compounding body of work.",
        },
        meta: {
          zh: "长文 · 设计中的内容系统",
          en: "Longform · content architecture",
        },
        href: "https://example.com/operating-system",
        ariaLabel: {
          zh: "阅读关于作品操作系统的文章",
          en: "Read the article about a personal brand operating system",
        },
      },
      {
        icon: "code",
        tone: "accent",
        category: {
          zh: "AI 工作流",
          en: "AI workflow",
        },
        title: {
          zh: "把 AI 工具做成真正能长期使用的产品，需要补上的 5 个环节",
          en: "Five missing layers between a clever AI demo and a product people keep using",
        },
        summary: {
          zh: "不是模型能力越强越好，而是输入、记忆、反馈和出口要一起工作，这篇会拆我最常用的产品判断框架。",
          en: "Raw model capability is not enough; the input, memory, feedback, and output layers have to work together. This essay unpacks the product lens I return to most.",
        },
        meta: {
          zh: "草稿中 · 即将公开",
          en: "Drafting · coming soon",
        },
        ariaLabel: {
          zh: "查看 AI 工作流文章状态",
          en: "View the status of the AI workflow article",
        },
      },
      {
        icon: "sparkles",
        tone: "quaternary",
        category: {
          zh: "公开构建",
          en: "Public building",
        },
        title: {
          zh: "为什么我开始把“做了什么”改成“学到了什么”",
          en: "Why I stopped publishing only what I made and started sharing what I learned",
        },
        summary: {
          zh: "记录公开构建的转向：从结果导向到学习导向，也让输出更能帮助后来者理解真实过程。",
          en: "A reflection on shifting public building from result-first updates to learning-first notes that make the process more useful for others.",
        },
        meta: {
          zh: "短文 · 可立即阅读",
          en: "Short essay · live now",
        },
        href: "https://example.com/build-in-public",
        ariaLabel: {
          zh: "阅读关于公开构建的文章",
          en: "Read the article about building in public",
        },
      },
    ],
  },
  socialLinks: {
    heading: {
      eyebrow: {
        zh: "公开在场",
        en: "Build in public",
      },
      title: {
        zh: "如果你想继续观察、合作或直接发消息",
        en: "The fastest ways to follow along, collaborate, or simply send a note.",
      },
      description: {
        zh: "我倾向于在公开环境里持续输出，在需要深聊的时候再进入一对一。所以这些入口既是社交链接，也是长期关系的起点。",
        en: "I prefer showing up in public first and going one-to-one when the conversation gets specific. These links are both social surfaces and relationship entry points.",
      },
    },
    items: [
      {
        icon: "github",
        tone: "accent",
        kind: {
          zh: "代码与原型",
          en: "Code",
        },
        title: {
          zh: "GitHub",
          en: "GitHub",
        },
        description: {
          zh: "看我在做什么、怎么做，以及哪些项目还在演化中。",
          en: "Follow what I am building, how I structure it, and which experiments are still evolving.",
        },
        cta: {
          zh: "打开 GitHub",
          en: "Open profile",
        },
        href: "https://github.com/your-handle",
        ariaLabel: {
          zh: "打开 GitHub 主页",
          en: "Open the GitHub profile",
        },
      },
      {
        icon: "globe",
        tone: "secondary",
        kind: {
          zh: "公开更新",
          en: "Social",
        },
        title: {
          zh: "X / Twitter",
          en: "X / Twitter",
        },
        description: {
          zh: "短更新、实验切片、想法测试，通常会比正式文章更快出现。",
          en: "Short updates, experiment fragments, and half-formed ideas usually show up here before they become essays.",
        },
        cta: {
          zh: "去看近况",
          en: "See updates",
        },
        href: "https://x.com/your-handle",
        ariaLabel: {
          zh: "打开 X 或 Twitter 主页",
          en: "Open the X or Twitter profile",
        },
      },
      {
        icon: "mail",
        tone: "quaternary",
        kind: {
          zh: "直接联系",
          en: "Email",
        },
        title: {
          zh: "Email",
          en: "Email",
        },
        description: {
          zh: "如果你已经知道想聊什么，邮件仍然是最清晰、最稳妥的入口。",
          en: "If you already know what you want to talk about, email is still the clearest and most durable channel.",
        },
        cta: {
          zh: "发一封邮件",
          en: "Send an email",
        },
        href: "mailto:hello@example.com",
        ariaLabel: {
          zh: "发送邮件联系我",
          en: "Send an email to get in touch",
        },
      },
    ],
  },
  ui: {
    skipToContent: {
      zh: "跳转到主要内容",
      en: "Skip to content",
    },
    languageToggleLabel: {
      zh: "切换网站语言",
      en: "Switch site language",
    },
    switchToChinese: {
      zh: "切换到中文",
      en: "Switch to Chinese",
    },
    switchToEnglish: {
      zh: "切换到英文",
      en: "Switch to English",
    },
    visitProject: {
      zh: "查看项目",
      en: "Visit project",
    },
    visitExperiment: {
      zh: "查看实验",
      en: "See experiment",
    },
    readArticle: {
      zh: "阅读文章",
      en: "Read article",
    },
    comingSoon: {
      zh: "即将发布",
      en: "Coming soon",
    },
  },
  footerNote: {
    heading: {
      zh: "这不是一张完成态名片，而是一张持续更新的工作地图",
      en: "This is not a frozen calling card. It is a living map of what I am building and learning.",
    },
    body: {
      zh: "这里的内容会继续变化，项目也会继续被替换、迭代、放弃或重做。如果某个方向和你有关，欢迎直接联系；如果只是路过，也希望你能带走一两个有用的想法。",
      en: "Everything here is subject to revision. Some projects will deepen, some will disappear, and some will be rebuilt from scratch. If one of these directions overlaps with what you are building, I would love to hear from you.",
    },
    backToTop: {
      zh: "回到顶部",
      en: "Back to top",
    },
  },
} satisfies SiteContent;
