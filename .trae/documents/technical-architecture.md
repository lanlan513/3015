## 1. 架构设计

```mermaid
flowchart TB
    subgraph "前端层"
        "React SPA" --> "React Router"
        "React Router" --> "首页"
        "React Router" --> "人物页"
        "React Router" --> "武功页"
        "React Router" --> "门派页"
        "React Router" --> "剧情页"
    end
    subgraph "静态数据层"
        "Mock数据" --> "人物数据"
        "Mock数据" --> "武功数据"
        "Mock数据" --> "门派数据"
        "Mock数据" --> "剧情数据"
    end
    "前端层" --> "静态数据层"
```

## 2. 技术说明

- **前端框架**：React@18 + Tailwind CSS@3 + Vite
- **初始化工具**：Vite (npm create vite@latest)
- **路由**：React Router DOM@6
- **动画**：CSS Animations + Transitions（无需额外动画库）
- **后端**：无（纯静态站点，使用Mock数据）
- **数据库**：无（静态JSON数据内嵌于组件中）

## 3. 路由定义

| 路由路径 | 用途 |
|----------|------|
| / | 首页，全屏武侠背景+主角轮播+快捷导航 |
| /characters | 人物页，金庸武侠人物图鉴 |
| /martial-arts | 武功页，武功招式大全 |
| /sects | 门派页，江湖门派总览 |
| /stories | 剧情页，经典剧情回顾 |

## 4. 项目目录结构

```
src/
├── components/          # 公共组件
│   ├── Navbar.jsx       # 顶部导航
│   ├── Footer.jsx       # 页脚
│   ├── HeroSection.jsx  # 全屏英雄区
│   └── Carousel.jsx     # 轮播图组件
├── pages/               # 页面组件
│   ├── Home.jsx         # 首页
│   ├── Characters.jsx   # 人物页
│   ├── MartialArts.jsx  # 武功页
│   ├── Sects.jsx        # 门派页
│   └── Stories.jsx      # 剧情页
├── data/                # 静态数据
│   ├── characters.js    # 人物数据
│   ├── martialArts.js   # 武功数据
│   ├── sects.js         # 门派数据
│   └── stories.js       # 剧情数据
├── App.jsx              # 根组件
├── main.jsx             # 入口文件
└── index.css            # 全局样式
```

## 5. 数据模型

### 5.1 人物数据结构

```javascript
{
  id: 1,
  name: "乔峰",
  alias: "南院大王",
  novel: "天龙八部",
  description: "丐帮帮主，契丹人，豪迈慷慨",
  martialArts: ["降龙十八掌", "打狗棒法"],
  quote: "塞上牛羊空许约"
}
```

### 5.2 武功数据结构

```javascript
{
  id: 1,
  name: "降龙十八掌",
  category: "掌法",
  novel: "天龙八部/射雕英雄传",
  description: "天下第一掌法，至刚至猛",
  practitioners: ["乔峰", "郭靖", "洪七公"]
}
```

### 5.3 门派数据结构

```javascript
{
  id: 1,
  name: "少林寺",
  location: "嵩山",
  leader: "方证大师",
  alignment: "正派",
  description: "天下武功出少林"
}
```

### 5.4 剧情数据结构

```javascript
{
  id: 1,
  novel: "天龙八部",
  title: "杏子林之变",
  description: "乔峰身世之谜揭开",
  characters: ["乔峰", "马夫人"]
}
```
