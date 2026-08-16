import type { NextConfig } from "next";

const payPageUrl = "https://www.sunshineshandygal.com/pay";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/pay",
        has: [{ type: "host", value: "sunshineshandygal.com" }],
        destination: payPageUrl,
        permanent: true,
      },
      {
        source: "/pay",
        has: [{ type: "host", value: "sunshineshandygalservices.com" }],
        destination: payPageUrl,
        permanent: true,
      },
      {
        source: "/pay",
        has: [{ type: "host", value: "www.sunshineshandygalservices.com" }],
        destination: payPageUrl,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
