/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // REQUIRED for Docker standalone build
  output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;