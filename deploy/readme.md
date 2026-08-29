# 算得清宣传网站 · 自托管部署

本目录用于把宣传网站部署到自己的服务器（推荐与成本管家 `3dqcostbook` 同一台腾讯云服务器，复用其 Caddy 出 80/443）。仓库本身是纯静态 SPA + 一个仅负责静态文件与 SPA 回退的 Express 服务。

## 方案 A：Docker 容器 + 现有 Caddy 反代（推荐，与 3dqcostbook 架构一致）

### 1. 构建并启动容器

在服务器上拉取本仓库代码后：

```sh
cd suandeqing-miniprogram-site
docker compose -f deploy/docker-compose.yml build
docker compose -f deploy/docker-compose.yml up -d site
```

容器监听 3000 端口（仅容器网络内可见，不对外暴露）。

### 2. 加入现有 costbook 网络

编辑 `deploy/docker-compose.yml` 底部 `SITE_NETWORK` 的默认值，改成服务器上 costbook 的实际 compose 网络名（在服务器上执行 `docker network ls | grep costbook` 查询，通常是 `<项目名>_costbook`）。

### 3. Caddy 增加站点块

在 costbook 的 `deploy/Caddyfile`（服务器路径 `/opt/cost-book/app/deploy/Caddyfile`）追加：

```caddyfile
www.3dq.site {
    encode gzip
    reverse_proxy site:3000
    header {
        Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
        X-Content-Type-Options "nosniff"
        Referrer-Policy "strict-origin-when-cross-origin"
        -Server
    }
}
```

把 `www.3dq.site` 换成实际选定的域名。然后重载 Caddy：

```sh
docker exec <caddy容器名> caddy reload --config /etc/caddy/Caddyfile
# 或短暂闪断可接受时：docker restart <caddy容器名>
```

### 4. DNS

在 DNSPod 给选定域名添加 A 记录 → 服务器公网 IP。Caddy 会自动签发续期 HTTPS 证书（前提：腾讯云安全组放行 80/443）。

### 5. 验收

```sh
curl -I https://<域名>/            # 200
curl -I https://<域名>/scenes      # 200（SPA 回退）
curl -I https://<域名>/assets/brand/hero-mascot.webp   # 200 image/webp
```

浏览器复核：首页、场景页、使用指南手风琴、扫码弹窗、移动端 390px 宽度无横向溢出。

## 方案 B：纯静态托管（无 Node）

`dist/public/` 是完整静态站点，任何静态托管都能用：

- Nginx：`root` 指向 `dist/public`，`location / { try_files $uri /index.html; }`
- 或 Caddy `file_server` + `try_files` 等价配置
- 或 Cloudflare Pages / Vercel：构建命令 `pnpm install && pnpm build`，输出目录 `dist/public`；注意 SPA 需要配置 `/scenes` 回退到 `index.html`。国内访问速度与合规自行评估，3dq.site 主站流量仍走腾讯云。

## 回退

- Docker 方案：保留上一镜像 tag，`docker compose -f deploy/docker-compose.yml down && docker compose ... up -d` 换回旧镜像即可。
- 静态方案：保留上一版 `dist/public` 目录副本，直接换回。

## 本地验证（部署前）

```sh
pnpm install
pnpm check
pnpm build
NODE_ENV=production PORT=4173 node dist/index.js
# 打开 http://localhost:4173/ 与 /scenes 检查
```
