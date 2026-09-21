/** @type {import('next').NextConfig} */

// GitHub Pages serves project repos from https://<user>.github.io/<repo>/,
// so every asset needs that /<repo> prefix. The deploy workflow sets
// NEXT_PUBLIC_BASE_PATH automatically; locally and on Vercel it stays empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
