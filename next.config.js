/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // 自定义域名部署 — 不需要 basePath 和 assetPrefix
  // basePath: '/folding-house-site',
  // assetPrefix: '/folding-house-site/',
  
  // 图片优化配置（静态导出时禁用图片优化 API）
  images: {
    unoptimized: true,
  },
  
  // 严格模式下构建
  reactStrictMode: true,
}

module.exports = nextConfig
