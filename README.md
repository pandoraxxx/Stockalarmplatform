# 金叉叉 · Stock Alarm Platform

港股股票监控与金叉预警平台，支持自选股、订阅提醒及多均线黄金交叉分析。

## 功能

- **港股市场**：模拟 3000+ 港股列表，支持搜索、板块筛选、涨跌幅/成交量/最近金叉排序
- **黄金交叉**：多均线组合（MA5/20、MA20/50、MA20/60），列表与详情页分 Tab 展示金叉记录
- **自选股**：星标收藏，本地持久化
- **订阅监控**：价格、RSI、MACD、成交量、市盈率、市净率等指标条件告警，触发后本地通知
- **价格走势**：90 日 K 线图、技术指标、基本面数据

## 技术栈

- **框架**：React 18 + Vite 6 + React Router 7
- **样式**：Tailwind CSS 4 + shadcn/ui（Radix UI）
- **图表**：Recharts
- **数据**：当前使用本地模拟数据（`src/app/utils/mockData.ts`），可替换为真实 API

## 快速开始

### 环境要求

- Node.js 18+
- npm / pnpm / yarn

### 安装

```bash
npm install
```

### 开发

```bash
npm run dev
```

浏览器访问 http://localhost:5173

### 构建

```bash
npm run build
```

产物输出到 `dist/`，可部署至 Vercel、Netlify 等静态托管平台。

## 项目结构

```
src/
├── app/
│   ├── components/     # 业务组件与 shadcn/ui 组件
│   ├── pages/          # 页面：Home、Favorites、StockDetail、Subscriptions
│   ├── utils/          # mockData、storage
│   ├── App.tsx
│   └── routes.ts
├── styles/
└── main.tsx
public/                 # 静态资源（logo 等）
```

## 接入真实数据

当前数据来自 `mockData.ts` 的随机生成。接入真实行情时：

1. 新增 API 层（如 `src/app/api/client.ts`），封装 `getStocks`、`getStock`、`getStockPriceHistory` 等
2. 将 `VITE_API_BASE_URL` 配置为后端地址
3. 替换 Home、StockDetail、Subscriptions 等页面中对 mockData 的直接调用

## 设计来源

UI 设计基于 [Figma 设计稿](https://www.figma.com/design/3hbfNSKsLT4gjbGVpCNtpa/Stock-Alarm-Platform)。

## 致谢

- [shadcn/ui](https://ui.shadcn.com/)（MIT）
- [Unsplash](https://unsplash.com) 图片素材

详见 [ATTRIBUTIONS.md](ATTRIBUTIONS.md)。
