/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./cloudflare-loader.ts",
  },
};

module.exports = nextConfig;
