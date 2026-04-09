# personal-web

这是我的个人主页源码：[sixsevenlabs.xyz](https://sixsevenlabs.xyz)

项目基于 Next.js、TypeScript、Tailwind CSS 搭建，整体视觉采用 playful geometric 风格。

## 这是什么

这是一个支持中英文切换的个人品牌主页，特点包括：

- 有明确识别度的视觉风格
- 内容型单页结构
- 统一维护的 typed content 文案源
- 已部署到 Vercel 并绑定正式域名

当前首页包含：

- Hero 首屏
- 关键词跑马灯
- 开源项目
- 实验项目
- 写作内容
- 社交链接

## 本地开发

```bash
npm install
npm run dev
```

然后打开 [http://localhost:3000](http://localhost:3000)。

## 可用脚本

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## 内容修改

首页的大部分文案都集中在：

- [`lib/site-content.ts`](./lib/site-content.ts)

主要页面结构在：

- [`components/homepage.tsx`](./components/homepage.tsx)

全局样式在：

- [`app/globals.css`](./app/globals.css)

## 部署

- 正式站点：[sixsevenlabs.xyz](https://sixsevenlabs.xyz)
- `www.sixsevenlabs.xyz` 会永久跳转到主域名
- 托管平台：Vercel

域名跳转规则配置在：

- [`next.config.ts`](./next.config.ts)

## 设计方向

这个站点的视觉和设计上下文记录在：

- [`.impeccable.md`](./.impeccable.md)
