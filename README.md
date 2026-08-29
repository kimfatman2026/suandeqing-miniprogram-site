# 算得清小程序宣传网站

这是“算得清”小微商家经营管理小程序的品牌宣传网站源码与图片资产备份仓库。网站采用 React + Vite 的静态前端架构，包含首页、人物化使用场景页、使用指南与小程序扫码体验入口占位结构。

| 目录 | 说明 |
| --- | --- |
| `client/` | 前端页面、组件、样式与路由。 |
| `docs/项目运维手册.md` | 本地开发、构建、素材替换、二维码接入、发布、回退与排查流程。 |
| `docs/当前图片资产清单.md` | 当前线上图片的使用位置和托管地址记录。 |
| `assets/` | 品牌、产品界面、人物场景与二维码预留的源文件备份。 |
| `assets/ASSET_MANIFEST.md` | 图片源文件、使用位置、线上地址与维护边界。 |

## 快速开始

```bash
pnpm install
pnpm dev
```

提交改动前请运行：

```bash
pnpm check
pnpm build
```

> 自托管部署（`self-hosted-deploy` 分支）已将图片本地化：页面引用 `client/public/assets/` 下的 WebP 优化版，`assets/` 目录仍作为源文件备份与迁移底稿，不参与生产构建。部署方式见 [deploy/README.md](deploy/README.md)。
