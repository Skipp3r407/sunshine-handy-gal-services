import type { NextConfig } from "next";

const payPageUrl = "https://www.sunshineshandygal.com/pay";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // One main host: send the bare domain to www so only one version answers 200.
      // Keep in sync with SITE_URL in src/lib/site-url.ts.
      {
        source: "/:path*",
        has: [{ type: "host", value: "sunshineshandygal.com" }],
        destination: "https://www.sunshineshandygal.com/:path*",
        permanent: true,
      },
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
