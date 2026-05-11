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
  | "x"
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
    };
  };
  keywords: {
    heading: LocalizedText;
    items: LocalizedText[];
  };
  experience: {
    heading: SectionHeadingContent;
    items: Array<{
      label: LocalizedText;
      title: LocalizedText;
      summary: LocalizedText;
      marker: string;
      keywords: LocalizedText[];
      tone: AccentTone;
    }>;
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
      href?: string;
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
      title: LocalizedText;
      value: string;
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
    requestPreview: LocalizedText;
    requestPreviewAria: LocalizedText;
  };
  footerNote: {
    heading: LocalizedText;
    body: LocalizedText;
    backToTop: LocalizedText;
  };
};

export const siteContent = {
  seo: {
    title: "Sixseven Labs",
    description: {
      zh: "个人品牌主页，展示项目、文章和公开构建轨迹。",
      en: "A personal homepage to showcase projects, writing, and public building.",
    },
  },
  brand: {
    name: {
      zh: "六七的个人主页",
      en: "六七的个人主页",
    },
  },
  navigationAriaLabel: {
    zh: "首页导航",
    en: "Homepage navigation",
  },
  navigation: [
    {
      label: {
        zh: "经历",
        en: "Journey",
      },
      href: "#experience",
    },
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
      zh: "六七",
      en: "Sixseven",
    },
    title: {
      zh: "AI Native 生活",
      en: "AI Native living",
    },
    description: {
      zh: "项目、实验、写作和长期作品。",
      en: "Projects, experiments, writing, and long-term work.",
    },
    primaryCta: {
      href: "#experience",
      label: {
        zh: "查看个人经历",
        en: "Follow the journey",
      },
      ariaLabel: {
        zh: "跳转到个人经历区域",
        en: "Jump to the personal journey section",
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
        zh: "我偏爱结构清楚、能长期维护的东西；精益求精，合作共赢。",
        en: "Content can feel warm, systems can stay sharp, and interfaces can carry a distinct point of view across the internet.",
      },
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
  experience: {
    heading: {
      eyebrow: {
        zh: "个人经历",
        en: "Personal journey",
      },
      title: {
        zh: "经历",
        en: "Journey",
      },
      description: {
        zh: "教育、牌桌、链上实验、AI 工作室。",
        en: "Education, poker, Web3, and an AI studio.",
      },
    },
    items: [
      {
        label: {
          zh: "起点",
          en: "Start",
        },
        title: {
          zh: "STEAM 教育创业公司",
          en: "STEAM education startup",
        },
        summary: {
          zh: "从教育产品和线下交付开始，理解学习体验、课程设计和真实用户反馈。",
          en: "Started with education products and offline delivery, learning how curriculum, experience, and user feedback connect.",
        },
        marker: "01",
        keywords: [
          {
            zh: "教育产品",
            en: "Education product",
          },
          {
            zh: "线下交付",
            en: "Offline delivery",
          },
          {
            zh: "用户反馈",
            en: "User feedback",
          },
        ],
        tone: "tertiary",
      },
      {
        label: {
          zh: "训练场",
          en: "Training ground",
        },
        title: {
          zh: "德州扑克半职业",
          en: "Semi-pro poker",
        },
        summary: {
          zh: "长期训练概率、风险控制、情绪管理和决策质量，让直觉接受数据和纪律的校准。",
          en: "Trained probability, risk control, emotional discipline, and decision quality over long sessions.",
        },
        marker: "02",
        keywords: [
          {
            zh: "概率思维",
            en: "Probability",
          },
          {
            zh: "风险控制",
            en: "Risk control",
          },
          {
            zh: "决策质量",
            en: "Decision quality",
          },
        ],
        tone: "secondary",
      },
      {
        label: {
          zh: "开放网络",
          en: "Open network",
        },
        title: {
          zh: "Web3 种种",
          en: "Many Web3 chapters",
        },
        summary: {
          zh: "经历链上工具、交易系统、社区叙事和开放网络实验，把速度、波动和协作放进同一个现场。",
          en: "Worked through on-chain tools, trading systems, community narratives, and open-network experiments.",
        },
        marker: "03",
        keywords: [
          {
            zh: "链上工具",
            en: "On-chain tools",
          },
          {
            zh: "交易系统",
            en: "Trading systems",
          },
          {
            zh: "社区叙事",
            en: "Community narrative",
          },
        ],
        tone: "accent",
      },
      {
        label: {
          zh: "现在",
          en: "Now",
        },
        title: {
          zh: "个人 AI 工作室",
          en: "Personal AI studio",
        },
        summary: {
          zh: "把 AI 工作流、个人品牌、产品实验和公开构建组合成长期作品系统。",
          en: "Combining AI workflows, personal brand systems, product experiments, and public building into long-term work.",
        },
        marker: "04",
        keywords: [
          {
            zh: "AI 工作流",
            en: "AI workflows",
          },
          {
            zh: "个人品牌",
            en: "Personal brand",
          },
          {
            zh: "公开构建",
            en: "Build in public",
          },
        ],
        tone: "quaternary",
      },
    ],
  },
  openSourceProjects: {
    heading: {
      eyebrow: {
        zh: "已经做成的",
        en: "Selected open source",
      },
      title: {
        zh: "项目",
        en: "Projects",
      },
      description: {
        zh: "我持续维护的工具和系统。",
        en: "Tools and systems I keep refining.",
      },
    },
    items: [
      {
        icon: "rocket",
        tone: "accent",
        title: {
          zh: "Sol Tracker",
          en: "Sol Tracker",
        },
        summary: {
          zh: "Solana 钱包追踪、价格信号和 Telegram 告警。",
          en: "Solana wallet tracking, price signals, and Telegram alerts.",
        },
        metric: {
          zh: "链上钱包 + 策略提醒",
          en: "Wallet tracking + signal alerts",
        },
        stack: {
          zh: "Next.js / Supabase / Helius / Telegram Bot",
          en: "Next.js / Supabase / Helius / Telegram Bot",
        },
        href: "https://github.com/quant67/sol-tracker",
        ariaLabel: {
          zh: "打开 Sol Tracker 项目仓库",
          en: "Open the Sol Tracker repository",
        },
      },
      {
        icon: "sparkles",
        tone: "secondary",
        title: {
          zh: "Vibe Skills for Codex",
          en: "Vibe Skills for Codex",
        },
        summary: {
          zh: "把调研、PRD、技术设计和交接串成 MVP 工作流。",
          en: "Research, PRD, technical design, and handoff as an MVP workflow.",
        },
        metric: {
          zh: "MVP 工作流 + 技能包",
          en: "MVP workflow + skill pack",
        },
        stack: {
          zh: "Markdown Skills / AGENTS.md / Shell Scripts",
          en: "Markdown Skills / AGENTS.md / Shell Scripts",
        },
        href: "https://github.com/quant67/vibe-skills-codex",
        ariaLabel: {
          zh: "打开 Vibe Skills for Codex 项目仓库",
          en: "Open the Vibe Skills for Codex repository",
        },
      },
      {
        icon: "book",
        tone: "tertiary",
        title: {
          zh: "Pomodoro Timer",
          en: "Pomodoro Timer",
        },
        summary: {
          zh: "Obsidian 原生番茄钟插件，支持专注计时、任务管理和 Daily Note 同步。",
          en: "A native Obsidian Pomodoro plugin for focus timers, task management, and Daily Note sync.",
        },
        metric: {
          zh: "专注计时 + 笔记任务同步",
          en: "Focus timer + note task sync",
        },
        stack: {
          zh: "TypeScript / esbuild / Obsidian Plugin API",
          en: "TypeScript / esbuild / Obsidian Plugin API",
        },
        href: "https://github.com/quant67/pomodoro-timer",
        ariaLabel: {
          zh: "打开 Pomodoro Timer 项目仓库",
          en: "Open the Pomodoro Timer repository",
        },
      },
    ],
  },
  experiments: {
    heading: {
      eyebrow: {
        zh: "正在试的",
        en: "Selected experiments",
      },
      title: {
        zh: "实验",
        en: "Experiments",
      },
      description: {
        zh: "还在推进的产品假设。",
        en: "Product bets still in motion.",
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
          zh: "个人品牌的站点、内容和分发系统。",
          en: "A site, content, and distribution system for personal brands.",
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
              zh: "让个人站连接内容、关系和转化。",
              en: "Connect the personal site with content, relationships, and conversion.",
            },
          },
          {
            title: {
              zh: "当前阶段",
              en: "Current phase",
            },
            body: {
              zh: "测试轻量内容后台和关注者入口。",
              en: "Testing a lightweight content backend and follower entry points.",
            },
          },
        ],
        ariaLabel: {
          zh: "跳转到联系区域请求 Orbit Studio 内测",
          en: "Jump to the connect section to request Orbit Studio preview access",
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
          zh: "把阅读、摘录、思考和行动重新接起来。",
          en: "Reconnecting reading, notes, reflection, and action.",
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
              zh: "让信息在正确时间重新出现。",
              en: "Surface the right information at the right moment.",
            },
          },
          {
            title: {
              zh: "当前阶段",
              en: "Current phase",
            },
            body: {
              zh: "测试检索、语义分层和轻提醒。",
              en: "Testing retrieval, semantic layers, and light reminders.",
            },
          },
        ],
        ariaLabel: {
          zh: "跳转到联系区域请求 Second Brain Playground 内测",
          en: "Jump to the connect section to request Second Brain Playground preview access",
        },
      },
    ],
  },
  writing: {
    heading: {
      eyebrow: {
        zh: "写下来",
        en: "Writing",
      },
      title: {
        zh: "写作",
        en: "Writing",
      },
      description: {
        zh: "把问题想清楚，留下可复用版本。",
        en: "Reusable thinking from building and reflection.",
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
          zh: "个人品牌这件事，最后拼的是作品操作系统",
          en: "Why a personal brand needs an operating system",
        },
        summary: {
          zh: "从单次输出到可复利的作品结构。",
          en: "From one-off output to a compounding body of work.",
        },
        meta: {
          zh: "长文 · 即将公开",
          en: "Longform · coming soon",
        },
        ariaLabel: {
          zh: "查看关于作品操作系统文章的状态",
          en: "View the status of the operating system article",
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
          zh: "把模型接进来，只是 AI 产品最简单的一步",
          en: "Five missing layers between a clever AI demo and a product people keep using",
        },
        summary: {
          zh: "输入、记忆、反馈和出口一起决定产品体验。",
          en: "Inputs, memory, feedback, and outputs shape the product.",
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
          zh: "后来我发现，公开构建也要分享学习过程",
          en: "Why I started sharing what I learned while building",
        },
        summary: {
          zh: "记录公开构建里更真实的学习过程。",
          en: "Notes on the learning process behind public building.",
        },
        meta: {
          zh: "短文 · 即将公开",
          en: "Short essay · coming soon",
        },
        ariaLabel: {
          zh: "查看关于公开构建文章的状态",
          en: "View the status of the public building article",
        },
      },
    ],
  },
  socialLinks: {
    heading: {
      eyebrow: {
        zh: "找到我",
        en: "Connect",
      },
      title: {
        zh: "联系",
        en: "Connect",
      },
      description: {
        zh: "代码、近况、邮件。",
        en: "Code, updates, or a direct note.",
      },
    },
    items: [
      {
        icon: "github",
        tone: "accent",
        title: {
          zh: "GitHub",
          en: "GitHub",
        },
        value: "quant67",
        href: "https://github.com/quant67",
        ariaLabel: {
          zh: "打开 GitHub 主页",
          en: "Open the GitHub profile",
        },
      },
      {
        icon: "x",
        tone: "secondary",
        title: {
          zh: "X",
          en: "X",
        },
        value: "@0xSixseven",
        href: "https://x.com/0xSixseven",
        ariaLabel: {
          zh: "打开 X 主页",
          en: "Open the X profile",
        },
      },
      {
        icon: "mail",
        tone: "quaternary",
        title: {
          zh: "Email",
          en: "Email",
        },
        value: "sherlockliu6@gmail.com",
        href: "mailto:sherlockliu6@gmail.com",
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
      zh: "即将公开",
      en: "Coming soon",
    },
    requestPreview: {
      zh: "请求内测",
      en: "Request preview",
    },
    requestPreviewAria: {
      zh: "跳转到联系区域请求内测",
      en: "Jump to the connect section to request preview access",
    },
  },
  footerNote: {
    heading: {
      zh: "持续更新",
      en: "Still shipping",
    },
    body: {
      zh: "这个页面会跟着我的项目、写作和实验继续变化。",
      en: "This page will keep changing with my projects, writing, and experiments.",
    },
    backToTop: {
      zh: "回到顶部",
      en: "Back to top",
    },
  },
} satisfies SiteContent;
