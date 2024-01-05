/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com", port: "" },
      { protocol: "https", hostname: "www.personiv.com", port: "" },
      { protocol: "https", hostname: "bisu.edu.ph", port: "" },
    ],
  },
};

module.exports = nextConfig;
