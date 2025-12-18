import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /**
   * If you want to control SWC minification in Next 16, it's no longer exposed
   * via `swcMinify` in the top-level config validator. Next uses SWC by default
   * for production builds. Provide other flags or features below if required.
   */
  // future: { /* feature flags */ },
};

export default nextConfig;
