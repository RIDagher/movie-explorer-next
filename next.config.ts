import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Outputs a Single-Page Application (SPA) ###By removing this line This lets  dynamic routes (like [id]/page.js) fetch data at runtime based on what the user clicks.
  distDir: "build", // Changes the build output directory to `build`
};

export default nextConfig;
