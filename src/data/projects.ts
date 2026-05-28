export type ProjectCategory = "web" | "mobile" | "tool" | "open-source";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  year: string;
  href?: string;
  github?: string;
  featured?: boolean;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web 应用",
  mobile: "移动端",
  tool: "工具 / CLI",
  "open-source": "开源",
};

export const projects: Project[] = [
  {
    id: "tomato-clock",
    title: "番茄钟 · GoldenTomato",
    description:
      "跨平台专注工具：Windows 桌面端环形番茄计时、成就与休息流程，配套微信小程序；数据本地保存，支持主题、铃声与专注统计。",
    category: "tool",
    tags: ["番茄工作法", "Windows", "微信小程序", "Microsoft Store"],
    year: "2026",
    href: "https://yichong108.github.io/tomato-clock-site/",
    featured: true,
  },
  {
    id: "nebula-dashboard",
    title: "Nebula Dashboard",
    description:
      "实时数据可视化控制台，支持多数据源接入、自定义图表与告警规则，面向 SaaS 运营团队。",
    category: "web",
    tags: ["Next.js", "TypeScript", "WebSocket", "D3"],
    year: "2025",
    href: "#",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "pulse-mobile",
    title: "Pulse 健康助手",
    description:
      "跨平台健康追踪应用，整合穿戴设备数据、AI 趋势分析与隐私优先的本地存储。",
    category: "mobile",
    tags: ["React Native", "Expo", "HealthKit"],
    year: "2024",
    href: "#",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "forge-cli",
    title: "Forge CLI",
    description:
      "面向前端团队的脚手架与代码生成工具，统一 Monorepo 模板、Lint 与 CI 配置。",
    category: "tool",
    tags: ["Node.js", "Commander", "Plop"],
    year: "2024",
    github: "https://github.com",
  },
  {
    id: "quantum-ui",
    title: "Quantum UI",
    description:
      "轻量级 React 组件库，专注无障碍、主题令牌与暗色模式，已在多个内部项目中落地。",
    category: "open-source",
    tags: ["React", "Tailwind", "Storybook"],
    year: "2023",
    href: "#",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "arcade-arena",
    title: "Arcade Arena",
    description:
      "浏览器端多人休闲游戏平台，WebRTC 联机、房间匹配与成就系统。",
    category: "web",
    tags: ["Canvas", "WebRTC", "Socket.io"],
    year: "2023",
    href: "#",
  },
  {
    id: "sync-pipeline",
    title: "Sync Pipeline",
    description:
      "ETL 数据同步管道，支持增量同步、失败重试与可观测性仪表盘。",
    category: "tool",
    tags: ["Python", "PostgreSQL", "Redis"],
    year: "2022",
    github: "https://github.com",
  },
];
