# 算得清宣传网站：图片资产清单

> **2026-08-29 自托管迁移说明：** 自 `self-hosted-deploy` 分支起，页面代码已改为引用仓库内本地资源 `client/public/assets/`（WebP 优化版，总计约 1MB），构建时随 `dist/public` 一起发布，不再依赖 Manus 平台的 `/manus-storage/...` 代理地址。下表“线上静态地址”列为 Manus 托管时期的历史记录，仅供追溯；替换图片时更新 `client/public/assets/` 下同名文件即可（建议保持 WebP、单图控制在 300KB 内）。

本目录保存当前官网实际使用的图片源文件。Manus 托管时期线上页面引用平台静态地址（见下表历史列）；自托管版本已改为引用 `client/public/assets/` 下的本地 WebP。此处的资产副本用于版本控制、内容审阅、迁移和替换。人物照片仅作使用场景示意，不能表述为客户案例、推荐或经营成绩；后续正式传播前应确认每张人物素材的授权状态。

| 备份文件 | 页面位置 | 线上静态地址 | 来源/维护说明 |
| --- | --- | --- | --- |
| `brand/hero-mascot-reference.png` | 首页首屏 | `/manus-storage/hero-mascot-reference_76ec7307.png` | 算小胖品牌辅助插画；替换时保留橘色毛发、白色肚皮与深棕算盘。 |
| `brand/brand-board.png` | 首页品牌介绍 | `/manus-storage/brand-board_0a03c37a.png` | 用户提供的品牌 VI 展示板。 |
| `product/app-overview.png` | 首页首屏与经营总览段落 | `/manus-storage/app-overview_c37036f4.png` | 用户提供的官方产品传播图。 |
| `product/app-inventory.png` | 首页库存提醒段落 | `/manus-storage/app-inventory_a793ba3a.png` | 用户提供的官方产品传播图。 |
| `product/app-trends.png` | 首页经营趋势段落 | `/manus-storage/app-trends_b90ef1b4.png` | 用户提供的官方产品传播图。 |
| `product/app-multistore.png` | 首页多门店段落 | `/manus-storage/app-multistore_dbd0e1f7.png` | 用户提供的官方产品传播图。 |
| `product/app-reminders.png` | 首页经营提醒素材备份 | `/manus-storage/app-reminders_9241b6ed.png` | 用户提供的官方产品传播图。 |
| `scenes/retail-checkout.jpg` | 使用场景页：零售/批发 | `/manus-storage/retail-checkout_fa34b997.jpg` | 通用人物场景示意；上线投放前确认授权，或替换为品牌自有素材。 |
| `scenes/restaurant-owner.jpg` | 使用场景页：餐饮/门店 | `/manus-storage/restaurant-owner_58105868.jpg` | 通用人物场景示意；上线投放前确认授权，或替换为品牌自有素材。 |
| `scenes/shop-owner.jpg` | 使用场景页：服务/个体经营 | `/manus-storage/shop-owner_239faf30.jpg` | 通用人物场景示意；上线投放前确认授权，或替换为品牌自有素材。 |
| `scenes/service-owner-tablet.jpg` | 使用场景页首屏 | `/manus-storage/service-owner-tablet_e24b24c3.jpg` | 通用人物场景示意；上线投放前确认授权，或替换为品牌自有素材。 |

## 二维码预留

`qr/` 目录用于未来保存正式小程序二维码。当前官网使用的不是二维码图片，而是明确标注为“二维码占位”的不可扫码图形。正式二维码接入后，应将源文件放入 `assets/qr/`，更新本表中的线上静态地址，并通过微信完成实际扫码验证。

## 替换流程

将新源图保存在项目目录外的静态资产工作区后，上传至托管存储并取得 `/manus-storage/...` 地址；随后更新相应页面常量、运行 `pnpm check && pnpm build`、在预览和移动设备上核验，最后更新本清单并与图片源文件一起提交至 GitHub。
