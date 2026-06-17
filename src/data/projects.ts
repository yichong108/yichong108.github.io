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
];
