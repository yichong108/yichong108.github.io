# Yichong · 软件作品集

基于 **Next.js 16** + **Tailwind CSS 4** 构建的个人软件作品集网站，采用复古未来 / 赛博朋克风格：深色背景、霓虹强调色、网格与扫描线效果。

## 功能

- Hero 介绍与数据概览
- 可按分类筛选的作品网格（Web / 移动端 / 工具 / 开源）
- 关于与技术栈展示
- 联系表单（前端占位，可接入 API）
- 静态导出，适配 GitHub Pages

## 本地开发

```bash
npm install
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)。

## 构建

```bash
npm run build
```

静态文件输出至 `out/` 目录。

## 自定义内容

编辑 `src/data/projects.ts` 修改作品列表；在 `src/components/Hero.tsx`、`About.tsx`、`Contact.tsx` 中更新个人信息与链接。

## 部署到 GitHub Pages

1. 仓库 Settings → Pages → Source 选择 **GitHub Actions**
2. 推送至 `main` 分支，`.github/workflows/deploy.yml` 会自动构建并发布

站点地址：`https://yichong108.github.io`

## 技术栈

- Next.js App Router（静态导出）
- TypeScript
- Tailwind CSS v4
- Lucide React（图标）
- Space Grotesk + DM Sans（Google Fonts）
